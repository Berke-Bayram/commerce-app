import Footer from "./ui/footer";
import LoginForm from "./ui/login-form";
import Link from 'next/link';

export default function Page() {
  const totalListedProducts = 100;
  return (
    <body>
      <main>
        <div className="block md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 m-5">
          <div className= "mb-5 md:mb-0 bg-blue-700 md:rounded-l-lg p-1 md:p-0 text-center md:text-left">
            <h1 className="text-white text-4xl font-bold m-5">Next-Commerce</h1>
          </div>
          <div className="mb-5 md:mb-0 p-3 md:p-2 col-span-1 md:col-span-2 row-span-2 bg-stone-300">
            <h1 className="text-center text-2xl font-bold m-3 text-blue-700">
              Welcome to <span className="text-green-500">Next-Commerce</span>
            </h1>
            <ul className="list-disc m-5 text-gray-700">
              <li className="ml-2"> 
                <h2 className="font-bold m-5 ml-0">What do we offer?</h2>
              </li>
              <p className="text-justify">
                Next-Commerce is an e-commerce platform built with Next.js. It is a
                simple and easy-to-use platform that allows you to shop online, browse
                products, add them to your cart, and much more. It is designed to be
                fast, secure, and reliable, so you can shop with confidence.
              </p>
            </ul>
            
            <ul className="list-disc m-5 text-gray-700">
              <li className="ml-2"> 
                <h2 className="font-bold m-5 ml-0">Where should I start?</h2>
              </li>
              <p className="text-justify">
                To get started, simply browse the product catalog, add items to your
                cart, and proceed to checkout. You can create an account, save your
                payment information, and track your orders. If you have any questions
                or need assistance, feel free to contact us. We are here to help!
              </p>
            </ul>
          </div>
          <div className="hidden md:block bg-blue-700 p-5 rounded-r-lg">
            <h2 className="font-bold text-white">A live marketplace.</h2>
            <p className="text-white">Currently {totalListedProducts} products in the market.</p>
          </div>
          <div className="hidden md:block bg-gray-300 rounded"></div>
          <div className="row-start-2 row-span-2 bg-green-500 rounded-l-lg p-8 md:p-0">
            <h2 className="text-white text-xl font-bold m-5">Register / Login</h2>
            <LoginForm />
            <div className="flex justify-center mt-4">
              <p className="text-white italic">
                Is this your first time? Start from
                <span className="text-blue-700 ml-0">
                  <Link href="/register"
                    className="inline-block font-bold py-2 px-1 rounded">
                    here
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="hidden md:block row-start-3 col-start-2 col-span-3 bg-blue-600">
            <div className="w-2/3">
              <h2 className="font-bold text-white m-5">You are always welcomed.</h2>
              <p className="text-justify m-5 text-white">
                Next-Commerce is a community of shoppers, sellers, and developers who
                are passionate about e-commerce. We are always looking for new members
                to join our community and help us grow. If you are interested in
                shopping, selling, or developing on Next-Commerce, we would love to
                have you on board. Join us today and be part of the future of e-commerce!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </body>
    )
}