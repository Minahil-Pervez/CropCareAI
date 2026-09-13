/*import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function AIAssistantScreen() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { type: "user" | "ai"; text: string }[]
  >([
    {
      type: "ai",
      text: "Hello! I am CropCare AI. Ask me anything about your crops, diseases, irrigation, or farming.",
    },
  ]);

  const sendQuestion = () => {
    if (!question.trim()) {
      return;
    }

    const userQuestion = question.trim();

    setMessages((previous) => [
      ...previous,
      {
        type: "user",
        text: userQuestion,
      },
      {
        type: "ai",
        text: "Thanks for your question. I can help you with crop diseases, farming practices, irrigation, and crop care. This AI assistant will be connected to the real AI service next.",
      },
    ]);

    setQuestion("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.back}>‹</Text>

          <View>
            <Text style={styles.title}>AI Assistant</Text>
            <Text style={styles.subtitle}>CropCare AI</Text>
          </View>

          <View style={styles.aiIcon}>
            <Text style={styles.aiIconText}>🤖</Text>
          </View>
        </View>

        <ScrollView
          style={styles.chat}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageRow,
                message.type === "user"
                  ? styles.userRow
                  : styles.aiRow,
              ]}
            >
              {message.type === "ai" ? (
                <View style={styles.smallAiIcon}>
                   <Text>🤖</Text>
                </View>
               ) : null}
              <View
                style={[
                  styles.messageBubble,
                  message.type === "user"
                    ? styles.userBubble
                    : styles.aiBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    message.type === "user"
                      ? styles.userText
                      : styles.aiText,
                  ]}
                >
                  {message.text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.suggestions}>
          <Text style={styles.suggestionTitle}>
            Try asking
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Pressable
              style={styles.suggestion}
              onPress={() =>
                setQuestion("How can I protect my rice crop?")
              }
            >
              <Text style={styles.suggestionText}>
                Rice protection
              </Text>
            </Pressable>

            <Pressable
              style={styles.suggestion}
              onPress={() =>
                setQuestion("How often should I water my crop?")
              }
            >
              <Text style={styles.suggestionText}>
                Irrigation
              </Text>
            </Pressable>

            <Pressable
              style={styles.suggestion}
              onPress={() =>
                setQuestion("How can I identify crop diseases?")
              }
            >
              <Text style={styles.suggestionText}>
                Crop diseases
              </Text>
            </Pressable>
          </ScrollView>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={setQuestion}
            placeholder="Ask a farming question..."
            placeholderTextColor="#8A978F"
            multiline
          />

          <Pressable
            style={styles.sendButton}
            onPress={sendQuestion}
          >
            <Text style={styles.sendText}>➤</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  keyboard: {
    flex: 1,
  },

  header: {
    height: 75,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E6EEE8",
  },

  back: {
    fontSize: 36,
    color: "#17321D",
    width: 40,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 11,
    color: "#718078",
    textAlign: "center",
    marginTop: 2,
  },

  aiIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  aiIconText: {
    fontSize: 23,
  },

  chat: {
    flex: 1,
  },

  chatContent: {
    padding: 20,
    paddingBottom: 10,
  },

  messageRow: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-end",
  },

  aiRow: {
    justifyContent: "flex-start",
  },

  userRow: {
    justifyContent: "flex-end",
  },

  smallAiIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  messageBubble: {
    maxWidth: "78%",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 18,
  },

  aiBubble: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1EAE3",
    borderBottomLeftRadius: 5,
  },

  userBubble: {
    backgroundColor: "#2E7D32",
    borderBottomRightRadius: 5,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 21,
  },

  aiText: {
    color: "#405047",
  },

  userText: {
    color: "#FFFFFF",
  },

  suggestions: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
  },

  suggestionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#718078",
    marginBottom: 8,
  },

  suggestion: {
    backgroundColor: "#EAF5EC",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 18,
    marginRight: 8,
  },

  suggestionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2E7D32",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E6EEE8",
  },

  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 100,
    backgroundColor: "#F2F6F3",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 14,
    color: "#17321D",
    marginRight: 9,
  },

  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
  },

  sendText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },
});

*/

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

type Message = {
  type: "user" | "bot";
  text: string;
};

export default function AIAssistantScreen() {
  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hello! I am CropCare AI. Ask me anything about your crops, diseases, irrigation, or farming.",
    },
  ]);

  const sendQuestion = () => {
    if (!question.trim()) {
      return;
    }

    const userQuestion = question.trim();

    setMessages((previous) => [
      ...previous,
      {
        type: "user",
        text: userQuestion,
      },
      {
        type: "bot",
        text: "Thanks for your question. I can help you with crop diseases, farming practices, irrigation, and crop care. This AI assistant will be connected to the real AI service next.",
      },
    ]);

    setQuestion("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.back}>‹</Text>

          <View>
            <Text style={styles.title}>AI Assistant</Text>
            <Text style={styles.subtitle}>CropCare AI</Text>
          </View>

          <View style={styles.aiIcon}>
            <Text style={styles.aiIconText}>🤖</Text>
          </View>
        </View>

        <ScrollView
          style={styles.chat}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message, index) => (
  <View
    key={index}
    style={[
      styles.messageRow,
      message.type === "user"
        ? styles.userRow
        : styles.aiRow,
    ]}
  >
    <View
      style={[
        styles.messageBubble,
        message.type === "user"
          ? styles.userBubble
          : styles.aiBubble,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          message.type === "user"
            ? styles.userText
            : styles.aiText,
        ]}
      >
        {message.text}
      </Text>
    </View>
  </View>
))}
        </ScrollView>

        <View style={styles.suggestions}>
          <Text style={styles.suggestionTitle}>
            Try asking
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Pressable
              style={styles.suggestion}
              onPress={() =>
                setQuestion("How can I protect my rice crop?")
              }
            >
              <Text style={styles.suggestionText}>
                Rice protection
              </Text>
            </Pressable>

            <Pressable
              style={styles.suggestion}
              onPress={() =>
                setQuestion("How often should I water my crop?")
              }
            >
              <Text style={styles.suggestionText}>
                Irrigation
              </Text>
            </Pressable>

            <Pressable
              style={styles.suggestion}
              onPress={() =>
                setQuestion("How can I identify crop diseases?")
              }
            >
              <Text style={styles.suggestionText}>
                Crop diseases
              </Text>
            </Pressable>
          </ScrollView>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={setQuestion}
            placeholder="Ask a farming question..."
            placeholderTextColor="#8A978F"
            multiline
          />

          <Pressable
            style={styles.sendButton}
            onPress={sendQuestion}
          >
            <Text style={styles.sendText}>➤</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  keyboard: {
    flex: 1,
  },

  header: {
    height: 75,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E6EEE8",
  },

  back: {
    fontSize: 36,
    color: "#17321D",
    width: 40,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 11,
    color: "#718078",
    textAlign: "center",
    marginTop: 2,
  },

  aiIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  aiIconText: {
    fontSize: 23,
  },

  chat: {
    flex: 1,
  },

  chatContent: {
    padding: 20,
    paddingBottom: 10,
  },

  messageRow: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-end",
  },

  aiRow: {
    justifyContent: "flex-start",
  },

  userRow: {
    justifyContent: "flex-end",
  },

  smallAiIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  messageBubble: {
    maxWidth: "78%",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 18,
  },

  aiBubble: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1EAE3",
    borderBottomLeftRadius: 5,
  },

  userBubble: {
    backgroundColor: "#2E7D32",
    borderBottomRightRadius: 5,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 21,
  },

  aiText: {
    color: "#405047",
  },

  userText: {
    color: "#FFFFFF",
  },

  suggestions: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
  },

  suggestionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#718078",
    marginBottom: 8,
  },

  suggestion: {
    backgroundColor: "#EAF5EC",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 18,
    marginRight: 8,
  },

  suggestionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2E7D32",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E6EEE8",
  },

  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 100,
    backgroundColor: "#F2F6F3",
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 14,
    color: "#17321D",
    marginRight: 9,
  },

  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
  },

  sendText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },
});