export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        All Footwear
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border p-3 rounded">
            <div className="h-24 bg-gray-200 mb-2"></div>
            <h4>Shoe Model {i}</h4>
            <p>₹1,299</p>
            <a
              href={`/products/${i}`}
              className="text-sm underline"
            >
              Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
