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
    <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <div className="bg-gray-100 rounded-lg p-4 mb-4 h-48 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image 
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-500 text-sm">Product Image</span>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-[var(--accent)]">{price}</span>
        <a 
          href={productUrl} 
          className="bg-[var(--accent)] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Item
        </a>
      </div>
    </div>
  );
}