import axios from "axios"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import socket from "./utils/socket"

const protocol = "http"
const ipAddr = "192.168.56.1"
const port = "8080"
const url = protocol + "://" + ipAddr + ":" + port + "/data/get"

export default function App() {
	const [data, setData] = useState([])

	const getUserAccount = () => {
		socket.emit("test", 10)
		socket.on("resTest", () => console.log("RESPONSE TEST"))

		axios
			.get(url)
			.then(function (response) {
				setData(response.data)
				// console.log("Response : ", response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
			<Button onPress={getUserAccount} title="Get user account" />
			<View style={styles.viewData}>
				{data.map((nodeData) => (
					<View style={styles.data}>
						<Text>----------------------------------------------</Text>
						<Text>NodeID : {nodeData.nodeId}</Text>
						<Text>GatewayId : {nodeData.gatewayId}</Text>
						<Text>RSSI : {nodeData.rssi}</Text>
						<Text>Temperature : {nodeData.temperature}</Text>
						<Text> Humidity : {nodeData.humidity}</Text>
						<Text>Noise : {nodeData.noise}</Text>
					</View>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	viewData: {
		flexDirection: "column",
	},
	data: {
		// backgroundColor: "red",
		// padding: "4",
	},
})
