import { io } from "socket.io-client"

const socket = io.connect("http://192.168.1.50:8080")

export default socket

// https://dev.to/novu/building-a-chat-app-with-socketio-and-react-native-k1b
