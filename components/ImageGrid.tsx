const images = [1, 2, 3, 4, 5, 6].map((n) => `/images/${n}.jpeg`);

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Image ${i + 1}`}
          className="rounded shadow object-cover w-full"
        />
      ))}
    </div>
  );
}