const Divider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/20" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-transparent px-2 text-white/70">o</span>
      </div>
    </div>
  );
};
export default Divider;
