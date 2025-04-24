const images = [1, 2, 3, 4, 5, 6].map((n) => `/images/${n}.jpg`);

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 w-full max-w-screen-md mx-auto">
      {images.map((src, i) => (
        <div key={i} className="aspect-square w-full overflow-hidden rounded shadow">
          <img
            src={src}
            alt={`Image ${i + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
