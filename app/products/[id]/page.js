export default function ProductDetail({ params }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Shoe Model {params.id}
      </h2>

      <div className="h-40 bg-gray-200 my-4"></div>

      <p>Price: ₹1,499</p>
      <p>Available Sizes: 6 7 8 9 10</p>

      <button className="mt-4 px-4 py-2 border">
        Add to Cart
      </button>
    </div>
  );
}
