import React from "react";
import cx from "classnames";
import styles from "./styles.module.css";

export default function HotButton() {
  const [hot, setHot] = React.useState(false);
  return (
    <div
      className={cx(styles.hotButton, hot && styles.hot)}
      onClick={() => setHot((prevState) => !prevState)}
    >
      hot
    </div>
  );
}
