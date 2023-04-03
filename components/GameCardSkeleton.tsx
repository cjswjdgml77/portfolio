type Props = {};

const GameCardSkeleton = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-full rounded-2xl overflow-hidden bg-[#D3D3D3]">
      <div className="skeleton-square w-full h-[230px] rounded-t-2xl"></div>
      <div className="flex flex-col flex-1 w-full justify-center items-center gap-2 py-8">
        <p className="skeleton-line text-5xl sm:text-3xl text-[transparent] text-center min-w-[150px] rounded-md">
          d
        </p>
        <div className="flex w-full justify-around items-center">
          <p className="skeleton-line rounded-md text-[transparent] min-w-[50px]">
            x
          </p>
          <p className="skeleton-line rounded-xl p-2 text-[transparent] min-w-[20px]">
            dd
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
