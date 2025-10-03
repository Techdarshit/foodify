const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-48 h-60 rounded-xl 
                       bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
                       bg-[length:200%_100%] animate-shimmer"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
