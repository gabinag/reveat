import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./src/routes/tab.routes";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <TabRoutes/>
      </NavigationContainer>
    </>
  );
}
