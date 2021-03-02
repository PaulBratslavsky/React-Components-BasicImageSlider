import React from "react";
import Image from "./image";
import cx from "classnames";
import { CgArrowLongRightR, CgArrowLongLeftR } from "react-icons/cg";
import HotButton from "./../hotButton";
import styles from "./styles.module.css";

export default function ImageGallary({ images }) {
  const [selected, setSelected] = React.useState(0);

  const notEnd = () => selected + 1 !== images.length;
  const notStart = () => selected !== 0;

  return (
    <div className={styles.imageGallary}>
      <div className={styles.imageShowcase}>
        <HotButton />
        {notEnd() && (
          <button
            className={cx(styles.button, styles.nextButton)}
            onClick={() =>
              notEnd() && setSelected((prevState) => prevState + 1)
            }
          >
            <CgArrowLongRightR />
          </button>
        )}
        <Image
          key={images[selected].id}
          src={images[selected].src}
          alt={images[selected].alt}
        />
        {notStart() && (
          <button
            className={cx(styles.button, styles.previousButton)}
            onClick={() =>
              notStart() && setSelected((prevState) => prevState - 1)
            }
          >
            <CgArrowLongLeftR />
          </button>
        )}
      </div>

      <div className={styles.imageOptions}>
        {images.map((image, index) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => selected !== index && setSelected(index)}
            opacity={selected !== index && "opacity"}
          />
        ))}
      </div>
    </div>
  );
}
