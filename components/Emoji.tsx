import bullsEye from "../public/bulls-eye.webp";
import thumbsUp from "../public/thumbs-up.webp";
import meh from "../public/meh.webp";
import Image, { ImageProps } from "next/image";
type Props = {
  rating: number;
};

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", width: "25", height: "25" },
    4: { src: thumbsUp, alt: "thumbsUp", width: "25", height: "25" },
    5: { src: bullsEye, alt: "bullsEye", width: "35", height: "35" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
