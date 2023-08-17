import { useEffect, useState } from "react";
import axios from "axios";

import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import { Post } from "../interfaces/appInterface";
import { postsStyles } from "../theme/themeStyles";
import Loading from "../components/Loading";

const PostsScreen = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        consultarPosts()
      }, [])

    const consultarPosts = async () => {

        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(data)
            setIsLoading(!isLoading)
        } catch (error) {
            console.log(error)
        }

    }

    if (isLoading) return (<Loading/>)

    return ( 
        <ScrollView>
        {
            posts.map( (post) => 
              (
              <View style={postsStyles.postCard} key = {post.id} >
                <Text style={postsStyles.titulo}>Titulo: {post.title}</Text>
                <Text style={postsStyles.content}>{post.body}</Text>
              </View>
          ))
          }
        </ScrollView>
     );
}
 
export default PostsScreen;