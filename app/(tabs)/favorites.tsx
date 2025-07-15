import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Render the items choosen as favorites in this screen.</Text>
    </View>
  );
}

//Render the full posts list.
//Post card should have a button to add to favourites.
//Favourites posts should be rendered in the favourites tab.
//BONUS: Render the comments in a modal when touching the post card.

const styles = StyleSheet.create({
  //Focus on functionality styles are only a bonus.
});

//POSTS: https://jsonplaceholder.typicode.com/posts
//COMMETNS: https://jsonplaceholder.typicode.com/posts/{post-id}/comments
