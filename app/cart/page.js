export default function Cart() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Your Cart
      </h2>

      <p className="mt-2">
        No items added yet
      </p>

      <a href="/checkout" className="underline">
        Proceed to Checkout
      </a>
    </div>
  );
}
