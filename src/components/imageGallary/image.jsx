import styles from "./styles.module.css";
import cx from "classnames";

export default function Image({ src, alt, render, opacity, ...rest }) {
  if (!src) return <h2>no image</h2>;

  return (
    <img
      className={cx(styles.image, opacity && styles.opacity)}
      src={src}
      alt={alt}
      {...rest}
    />
  );
}
