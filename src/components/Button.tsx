import { ReactNode } from "@lynx-js/react";

interface ButtonProps {
  onTap?: () => void;
  children: ReactNode;
  style?: Record<string, string | number>;
  className?: string;
}

export function Button({ onTap, children, style, className = "" }: ButtonProps) {
  return (
    <view
      className={`Button ${className}`}
      style={{
        backgroundColor: "#ff6448",
        padding: "10px 20px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      bindtap={onTap}
    >
      <text
        style={{
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {children}
      </text>
    </view>
  );
}
