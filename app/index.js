import {
    View,
    ScrollView,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native"
import { Stack } from "expo-router"
import Button from "../components/Button"
import { useState } from "react"
import { calculator } from "../assets/icons"

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#121212",
    },
    textInput: {
        color: "white",
        padding: 13,
        marginTop: 50,
        fontSize: 35,
        fontWeight: "700",
        textAlign: "right",
    },
    textOutput: {
        color: "white",
        padding: 13,
        fontSize: 25,
        textAlign: "right",
    },
    mainCalc: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
    },
    imgIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        resizeMode: "cover",
    },
})

export default function Home() {
    const [calcInput, setCalcInput] = useState("")
    const [outputText, setOutputText] = useState("")
    const [allowDot, setAllowDot] = useState(true)

    function handleChange(value) {
        const operations = ["+", "-", "*", "/", "%"]

        function hasOperation() {
            return operations.includes(calcInput.at(-1))
        }

        switch (value) {
            case "C":
                setCalcInput("")
                setOutputText("")
                break

            case ".":
                let hasDot = /\./.test(calcInput)
                if (hasDot) {
                    if (allowDot) {
                        setCalcInput((prevCalcInput) => prevCalcInput + value)
                        setAllowDot(false)
                    } else {
                        setAllowDot(false)
                    }
                } else {
                    setCalcInput((prevCalcInput) => prevCalcInput + value)
                    setAllowDot(false)
                }
                break

            case "←":
                setCalcInput((prevCalcInput) => prevCalcInput.slice(0, -1))
                break

            case "+":
            case "-":
            case "%":
            case "/":
            case "*":
                setAllowDot(true)
                if (hasOperation()) {
                    setCalcInput(
                        (prevCalcInput) => prevCalcInput.slice(0, -1) + value
                    )
                } else {
                    setCalcInput((prevCalcInput) => prevCalcInput + value)
                }
                break

            case "=":
                try {
                    if (calcInput === "") {
                        setOutputText("")
                        return
                    }
                    if (operations.includes(calcInput.at(-1))) {
                        let output = eval(calcInput.slice(0, -1))
                        setOutputText(() => output.toString())
                    } else {
                        let output = eval(calcInput)
                        setOutputText(() => output.toString())
                    }
                } catch (err) {
                    setOutputText("Error")
                }
                break

            default:
                setCalcInput((prevCalcInput) => prevCalcInput + value)
                break
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#121212" },
                    headerTitleStyle: { color: "white" },
                    headerTitle: "Calculator App",
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity>
                                <Image
                                    style={styles.imgIcon}
                                    source={calculator}
                                />
                            </TouchableOpacity>
                        )
                    },
                }}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View>
                    <TextInput style={styles.textInput} value={calcInput} />
                    <TextInput
                        style={styles.textOutput}
                        value={outputText}
                        editable={false}
                    />
                </View>
                <View style={styles.mainCalc}>
                    <Button value="C" handleChange={handleChange} />
                    <Button value="%" handleChange={handleChange} />
                    <Button value="←" handleChange={handleChange} />
                    <Button value="÷" handleChange={handleChange} />
                    <Button
                        value="7"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="8"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="9"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button value="x" handleChange={handleChange} />
                    <Button
                        value="4"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="5"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="6"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button value="-" handleChange={handleChange} />
                    <Button
                        value="1"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="2"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="3"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button value="+" handleChange={handleChange} />
                    <Button
                        value="00"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="0"
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="."
                        color="#212121"
                        handleChange={handleChange}
                    />
                    <Button
                        value="="
                        color="#362FD9"
                        handleChange={handleChange}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
