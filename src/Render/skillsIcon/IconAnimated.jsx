import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function ReactIcon() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lottie/react.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div style={{ width: 100, height: 100 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

// function Icon(){
//     return(<div>
//         <img src=""></img>
//     </div>)
// }
