import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !user.uid) return; // Kiểm tra user có tồn tại không

    const unsubscribe = onSnapshot(
      query(
        collection(db, "matches"),
        where("usersMatched", "array-contains", user.uid)
      ),
      (snapShot) => {
        console.log("Snapshot Docs:", snapShot.docs); // Kiểm tra dữ liệu trả về
        setMatches(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    return unsubscribe;
  }, [user]);

  return matches.length > 0 ? (
    <FlatList
      style={tw.style("h-full")}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View style={tw.style("p-5")}>
      <Text style={tw.style("text-center text-lg")}>
        No matches at the moment
      </Text>
    </View>
  );
};

export default ChatList;
