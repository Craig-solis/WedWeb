import Image from 'next/image';

type RegistryTileProps = {
  title: string;
  price: string;
  description: string;
  image: string;
  productUrl?: string;
};

export default function RegistryTile({
  title,
  price,
  description,
  image,
  productUrl = "https://www.amazon.com/wedding/registry/ZM3R01OFL2B1"
}: RegistryTileProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[var(--foreground)]/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm opacity-30">No image</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-base mb-1 leading-snug">{title}</h3>
        <p className="text-xs opacity-50 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{price}</span>
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--foreground)] text-white text-xs font-semibold tracking-widest uppercase rounded-full hover:opacity-75 transition-opacity"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
