const CastCard = ({ profile, name, acting }: { profile: string; name: string; acting: string }) => (
  <div className="w-36 flex-shrink-0 bg-tertiary-500 rounded-lg aspect-[9_/_16]">
    <img src={profile} alt="" className="object-cover rounded-t-lg" />
    <div className="px-2 pt-4 pb-9">
      <h1 className="text-white text-xs font-redHatMono font-bold">{name}</h1>
      <h1 className="mt-2 text-grey-500 text-xs font-roboto font-bold">{acting}</h1>
    </div>
  </div>
);
export default CastCard;
