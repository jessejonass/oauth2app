import React from "react";
import * as AuthSession from "expo-auth-session";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { SignInContent } from "../../components/SignInContent";

import { styles } from "./styles";

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export function SignIn() {
  const navigation = useNavigation();

  async function handleSignIn() {
    const CLIENT_ID =
      "930117110312-8rvhuho2m6lqcamhl7bqmho3htiu6j69.apps.googleusercontent.com";
    const REDIRECT_URI = "https://auth.expo.io/@jessejonas/oauth2app";
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const response = await AuthSession.startAsync({ authUrl });
    console.log(response);

    navigation.navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <SignInContent />

      <Button
        title="Entrar com Google"
        icon="social-google"
        onPress={handleSignIn}
      />
    </View>
  );
}
