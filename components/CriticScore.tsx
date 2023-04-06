type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  return (
    <span
      className={`p-2 rounded-xl bg-[#454545] ${
        score > 75
          ? "text-[#609966]"
          : score > 60
          ? "text-[#FDD36A]"
          : "text-darkTeritary"
      }`}
    >
      {score ? score : "0.0"}
    </span>
  );
};

export default CriticScore;
