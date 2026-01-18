export default function Checkout() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Checkout
      </h2>

      <p className="mt-2">Payment Method:</p>

      <ul className="list-disc ml-5">
        <li>Cash on Delivery</li>
        <li>UPI (Manual)</li>
      </ul>

      <button className="mt-4 px-4 py-2 border">
        Place Order
      </button>
    </div>
  );
}
