import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Gravatar, GravatarApi } from 'react-native-gravatar';

const ProfileHeader = ({data}) => {
  return (
    <View>
      <ImageBackground 
        style={styles.background}
      >
        <View style={styles.headerContainer}> 
          <Gravatar
            style={styles.userImage}
            options={{ 
              email: data.email,
              parameters: { "size": "200", "d": "mm" },
              secure: true
            }}
          />
          <Text style={styles.fullName}>{data.name}</Text>
          <Text style={styles.username}>{data.username}</Text>
          
          <View style={styles.userInfo}>
            <View style={styles.likeRows}>
              <Text style={styles.likeCounts}>
              </Text>
            </View>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  background: {
    paddingBottom: 20,
    paddingTop: 45,
    backgroundColor: '#FF9494'
  },
  headerContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  likeIcon: {
    color: 'black',
    fontSize: 26,
  },
  userInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  likeRows: {
    backgroundColor: 'transparent',
  },
  likeCounts: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    alignContent: 'center'
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  fullName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 6,
    textAlign: 'center',
  },
})
