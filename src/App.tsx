import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";
import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";
import { Button } from "./components/Button.js";
import { DetailPage } from "./pages/DetailPage.js";

export function App() {
  const [alterLogo, setAlterLogo] = useState(false);
  const [showDetailPage, setShowDetailPage] = useState(false);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  const handleOpenDetail = useCallback(() => {
    setShowDetailPage(true);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setShowDetailPage(false);
  }, []);

  return (
    <view>
      {showDetailPage && <DetailPage onClose={handleCloseDetail} />}
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">React</text>
          <text className="Subtitle">on Lynx</text>
        </view>
        <view className="Content">
          <image src={arrow} className="Arrow" />
          <text className="Description">Tap the logo and have fun!</text>
          <text className="Hint">
            Edit<text style={{ fontStyle: "italic" }}>{" src/App.tsx "}</text>
            to see updates!
          </text>

          <view style={{ marginTop: "20px" }}>
            <Button onTap={handleOpenDetail}>Open New Page</Button>
          </view>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}
