# ai-socket-sdk

Stream GPT or OpenRouter responses in real time via WebSocket — zero backend hassle for frontend devs.

## Features
- Simple WebSocket connection to stream AI responses
- Easy integration with frontend applications
- Customizable API endpoint

## Installation

```bash
npm install ai-socket-sdk
```

## Usage
// Example Output:
// AI Response: Hello! How can I assist you today?
```js
import { connectToAI } from 'ai-socket-sdk';

connectToAI({
  prompt: "Hello, AI!",
  apiKey: "YOUR_API_KEY",
  onData: (data) => {
    console.log("AI Response:", data);
  }
});
```
## Backend Note

This SDK expects a local WebSocket server running at `ws://localhost:4000`.  
You can build your own, or use the sample server coming soon.

## API

### connectToAI(options)

| Option    | Type     | Required | Description                                      |
|-----------|----------|----------|--------------------------------------------------|
| prompt    | string   | Yes      | The prompt to send to the AI                     |
| apiKey    | string   | Yes      | Your API key for authentication                  |
| baseURL   | string   | No       | API base URL (default: https://openrouter.ai/api/v1) |
| socketURL | string   | No       | WebSocket server URL (default: `ws://localhost:4000`)  |
| onData    | function | Yes      | Callback for each streamed response chunk        |

## License

MIT

## Contact

Author: ranjith_dev <ranjithkumarproton@gmail.com>

## Changelog

### 1.0.1
- Added support for custom `socketURL` (previously hardcoded to localhost:4000)
