import { ChatLog } from "./component/ChatLog"
import { ChatReturnArea } from "./component/ChatReturnArea"
import { ChatInputArea } from "./component/ChatInputArea"
import "./css/global.css"
import { Container } from "postcss"

export default function App() {

  const container = {
    width: "1980px",
    height: "1080px",
    backgroundColor: "#ECEDEF",
    display: "flex",
    margin: "auto",
  }
  const ChatArea = {
    width: "100%",
    height:"100%",
    margin: "auto"
  }

  return (
    <>
      <div style={ container }>
        <ChatLog></ChatLog>
        <div style={ ChatArea }>
          <ChatReturnArea></ChatReturnArea>
          <ChatInputArea></ChatInputArea>
        </div>

      </div>
    </>
  )
}