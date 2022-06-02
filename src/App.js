import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import { PhoneIcon, CheckIcon} from '@chakra-ui/icons'

function App() {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className={isLight ? "dark" : "light"}>
      <Navbar />
      <div className={isLight ? "darkCol" : "lightCol"}>
        <InputGroup size="sm">
          <InputLeftAddon children="https://"  rounded={"7px"} h={"40px"} />
          <Input placeholder="mysite"  rounded={"7px"} h={"40px"}/>
          <InputRightAddon children=".com"  rounded={"7px"} h={"40px"}/>
        </InputGroup>
        <Stack spacing={4} mt={"25px"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input placeholder="Enter amount" />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
        </Stack>
      </div>
    </div>
  );
}

export default App;
