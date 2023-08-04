import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
      "Montserrat_Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat_Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    });
};