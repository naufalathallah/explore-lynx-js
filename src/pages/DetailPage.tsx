import { Button } from "../components/Button.js";

interface DetailPageProps {
  onClose: () => void;
}

export function DetailPage({ onClose }: DetailPageProps) {
  return (
    <view
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <view className="Background" />
      <view
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          zIndex: 1001,
        }}
      >
        <text style={{ fontSize: "24px", color: "white", marginBottom: "20px" }}>Detail Page</text>
        <Button onTap={onClose}>Close Page</Button>
      </view>
    </view>
  );
}
