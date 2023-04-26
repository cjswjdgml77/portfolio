import { Game } from "@/hooks/useGames";
import Image from "next/image";
import React, { useRef, useState } from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import defaultImage from "../public/no-image-placeholder-6f3882e0.webp";
import Emoji from "./Emoji";
import { motion } from "framer-motion";
import axios, { AxiosError } from "axios";
import parser from "html-react-parser";
import Link from "next/link";

type Props = {
  game: Game;
};

interface GameDetail {
  description: string;
  website: string;
}

const GameCard = ({ game }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [expandCard, setExpandCard] = useState<boolean>(false);
  const [cardDimenstion, setCardDimenstion] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [gameDetail, setGameDetail] = useState<GameDetail>();

  const fetchDetail = () => {
    if (gameDetail) return;
    try {
      axios
        .get(
          `https://api.rawg.io/api/games/${game.id}?key=7ad26984614e4308baadfe754c1a00d6`
        )
        .then((res) => {
          setGameDetail(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <motion.div
        className={`flex flex-col items-center w-full rounded-2xl bg-darkSecondary overflow-hidden cursor-pointer ${
          expandCard &&
          "fixed w-[min(40rem,95%)] z-[15] h-[80vh] m-[auto] top-0 right-0 bottom-0 left-0 overflow-y-auto"
        }`}
        layout
        onClick={() => {
          if (expandCard) {
            setExpandCard(false);
            setCardDimenstion({ width: 0, height: 0 });
          } else {
            if (!ref.current) return;
            setExpandCard(true);
            setCardDimenstion({
              width: ref.current.clientWidth,
              height: ref.current.clientHeight,
            });
            fetchDetail();
          }
        }}
        ref={ref}
      >
        <Image
          className={`w-full min-h-[200px] max-h-[200px] ${
            expandCard && "min-h-[40vh]"
          }`}
          src={game.background_image ? game.background_image : defaultImage}
          alt={game.name}
          width="500"
          height="300"
        />
        <div className="flex flex-col flex-1 w-full justify-center items-center gap-2 py-8">
          <div className="flex w-full justify-around items-center">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </div>
          <p className="w-full text-5xl sm:text-3xl text-darkTeritary text-center sm:p-4">
            {game.name}
            <Emoji rating={game.rating_top} />
          </p>
          {expandCard && (
            <Link href={`/game/${game.id}?id=${game.id}`}>more info</Link>
          )}
          {expandCard && (
            <div className="text-darkTeritary text-lg pt-2 px-5">
              {gameDetail && parser(gameDetail?.description as string)}
            </div>
          )}
        </div>
      </motion.div>
      {expandCard && (
        <>
          <div
            className="w-[var(--width)] h-[var(--height)] block"
            style={
              {
                "--height": `${cardDimenstion.height}px`,
                "--width": `${cardDimenstion.width}px`,
              } as React.CSSProperties
            }
          ></div>
          <div
            className="w-[100vw] h-[100vh] fixed top-0 left-0 block bg-darkPrimary/70 z-[14]"
            onClick={() => {
              setExpandCard(false);
              setCardDimenstion({ width: 0, height: 0 });
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default GameCard;
