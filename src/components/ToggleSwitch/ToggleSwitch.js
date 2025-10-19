import React, { useState, useContext, useEffect } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  // Destructure context to satisfy ESLint
  const { isDark, changeTheme } = useContext(StyleContext);

  // Local state for toggle, default to dark
  const [isChecked, setChecked] = useState(true);

  // Ensure context theme is dark on mount
  useEffect(() => {
    if (!isDark) {
      changeTheme();
    }
  }, [isDark, changeTheme]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
