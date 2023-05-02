import { Text, TouchableOpacity, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#424242",
        borderRadius: 50,
        width: 70,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 30,
    },
})

export default function Button({ value, handleChange, color }) {
    return (
        <TouchableOpacity
            onPress={() => {
                if (value === "x") {
                    return handleChange("*")
                }
                if (value === "÷") {
                    return handleChange("/")
                }
                return handleChange(value)
            }}
            style={[styles.button, color && { backgroundColor: color }]}
        >
            <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
    )
}
