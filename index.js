export function connectToAI({
    prompt,
    apiKey,
    baseURL = "https://openrouter.ai/api/v1",
    socketURL = "ws://localhost:4000",
    onData
  }) {
    const socket = new WebSocket(socketURL);
  
    socket.onopen = () => {
      socket.send(JSON.stringify({ prompt, apiKey, baseURL }));
    };
  
    socket.onmessage = (msg) => {
      if (msg.data === "__done__") return;
      if (msg.data.startsWith("ERROR")) {
        console.error("AI Socket Error:", msg.data);
      } else {
        onData(msg.data);
      }
    };
  
    socket.onerror = (err) => {
      console.error("Socket error:", err);
    };
  }
  