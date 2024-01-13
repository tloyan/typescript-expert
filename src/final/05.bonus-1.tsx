// Styling
// 🚀 Custom component that encapsulates styling
// http://localhost:3000/alone/exercises-final/05.bonus-1
// "use client"

import "../box-styles.css"

import React from "react"

function Box({
  style,
  size,
  className = "",
  ...otherProps
}: {
  style?: React.CSSProperties
  size?: "small" | "medium" | "large"
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const sizeClassName = size ? `box--${size ?? ""}` : ""
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{ fontStyle: "italic", ...style }}
      {...otherProps}
    />
  )
}

function Usage() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: "lightblue" }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: "pink" }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: "orange" }}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default Usage
