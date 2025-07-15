import { useState } from "react";

export default function Moving() {
  const [cursor, setcursor] = useState({ x: 0, y: 20 });

  function handlecursor(e) {
    setcursor({ x: e.clientX, y: e.clientY });

    console.log(e.clientX, e.clientY);
    console.log(e)
  }

  return (
    <>
      <div
        className="container"
        onPointerMove={(e) => handlecursor(e)}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vw",
        }}
      >
        <div
          className="dot"
          style={{
            height: "13px",
            width: "13px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            top: cursor.y,
            left: cursor.x,
            //   transform: "translate(-50%, -50%)"
          }}
        ></div>
      </div>
    </>
  );
}
