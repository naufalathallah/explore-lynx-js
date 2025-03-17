import { useEffect } from "@lynx-js/react";

import "./App.css";

export function App() {
  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  return (
    <view>
      <text className="Title">React</text>
      <text className="Subtitle">on Lynx</text>
      <text>Check out the organized project structure!</text>
    </view>
  );
}
