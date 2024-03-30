
export default function Page() {
  return (
    <main>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 m-5">
        <div className="bg-orange-900 rounded-l-lg">
          <h1 className="text-4xl font-bold m-5">Next-Commerce</h1>
        </div>
        <div className="col-span-2 row-span-2 bg-indigo-900">
          <h2 className="font-bold m-5">What is this place all about?</h2>
          <p className="text-justify m-5">
            Next-Commerce is an e-commerce platform built with Next.js. It is a
            simple and easy-to-use platform that allows you to create an online
            store in minutes.
          </p>
        </div>
        <div className="bg-lime-900 p-5 rounded-r-lg">
          <h2 className="font-bold m-5">Features</h2>
          <ul className="list-disc m-5 space-y-3">
            <li>Product catalog</li>
            <li>Shopping cart</li>
            <li>Checkout</li>
            <li>Payment gateway</li>
            <li>Order management</li>
          </ul>
        </div>
      </div>
    </main>
  )
}