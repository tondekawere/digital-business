import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Profile from "./components/Profile";

const Root = styled(Container)({
  fontFamily: "Inter, sans-serif",
  padding:"0",
  width:"100vw",
});

function App() {
  return (
    <Root >
      <Profile />
    </Root>
  );
}

export default App;
