import { useState } from "react";
import Skeleton from "../skeleton";

const CastCard = ({
  profile,
  name,
  character,
}: {
  profile: string;
  name: string;
  character: string;
}) => {
  const [isLoadImgSuccess, setIsLoadImgSuccess] = useState(true);
  return (
    <div className="w-36 flex-shrink-0 bg-tertiary-500 rounded-lg aspect-[9_/_16] flex flex-col">
      {isLoadImgSuccess ? (
        <img
          src={profile}
          alt={`${name}_profile`}
          className="object-cover rounded-t-lg h-[70%]"
          onError={() => {
            setIsLoadImgSuccess(false);
          }}
        />
      ) : (
        <Skeleton ui={{ base: "h-[70%]" }} />
      )}
      <div className="grow px-2 pt-4 pb-9">
        <h1 className="text-white text-xs font-redHatMono font-bold">{name}</h1>
        <h1 className="mt-2 text-grey-500 text-xs font-roboto font-bold">{character}</h1>
      </div>
    </div>
  );
};
export default CastCard;
