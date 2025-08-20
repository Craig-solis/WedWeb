import Image from "next/image";

const images = [
  "/infinite-photos/20250802_011748000_iOS.jpg",
  "/infinite-photos/20250802_012347000_iOS.jpg",
  "/infinite-photos/20250802_012322000_iOS.jpg",
  "/infinite-photos/20250802_011945000_iOS.jpg",
  "/infinite-photos/20250802_011707000_iOS.jpg",
  "/infinite-photos/20250802_010325000_iOS.jpg",
  "/infinite-photos/20250801_153042624_iOS.jpg",
  "/infinite-photos/20250801_153016884_iOS.jpg",
  "/infinite-photos/20250801_153005092_iOS.jpg",
  "/infinite-photos/20250802_012902000_iOS.jpg",
];

export default function InfiniteImageSlider() {
  return (
    <div className="overflow-hidden w-full h-[350px] sm:h-[300px] md:h-[450px] 2xl:h-[600px] bg-white">
      <div
        className="flex animate-infinite-scroll whitespace-nowrap h-full"
        style={{ animation: "infinite-scroll 40s linear infinite" }}
      >
        {images.concat(images).map((src, idx) => (
          <div key={idx} className="inline-block h-full w-auto">
            <Image
              src={src}
              alt={`wedding photo ${idx + 1}`}
              width={350}
              height={350}
              className=" shadow-md object-cover h-full w-auto"
              style={{ height: "100%", width: "auto", objectFit: "cover" }}
              sizes="(max-width: 600px) 50vw, 20vw"
              priority={idx < images.length}
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          min-width: 2000px;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
