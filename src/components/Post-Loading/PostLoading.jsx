import React from "react";
import "./PostLoading.css";
import { useState } from "react";

const PostLoading = () => {
  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
    </div>
  );
};

export default PostLoading;
