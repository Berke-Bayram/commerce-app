import Footer from "./ui/footer";
import LoginForm from "./ui/login-form";
import Link from 'next/link';

export default function Page() {
  const totalListedProducts = 100;
  return (
    <main>
      <div className="block lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-4 m-5">
        <div className= "m-0 mb-5 lg:mb-0 bg-blue-700 lg:rounded-l-lg p-1 lg:p-0 text-center lg:text-left">
          <Link
            href = "/"
            className='text-white text-4xl font-bold m-5'
          >
          <div className="lg:ml-5">
            <span className='lg:block text-green-400'>Next-</span>
            Commerce
          </div>
          </Link>
        </div>
        <div className="mb-5 lg:mb-0 p-3 lg:p-2 col-span-1 lg:col-span-2 row-span-2 bg-stone-300">
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
        <div className="hidden lg:block bg-green-700 p-5 rounded-r-lg">
          <h2 className="font-bold text-white">
            A live marketplace.
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline m-2 mt-0 w-6 h-6">
              <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
            </svg>
          </h2>
          <p className="text-white">Currently {totalListedProducts} products in the market.</p>
        </div>
        <div className="hidden lg:block bg-gray-300 rounded"></div>
        <div className="row-start-2 row-span-2 bg-green-500 rounded-l-lg p-8 lg:p-0">
          <h2 className="text-white text-xl font-bold m-5">Register / Login</h2>
          <LoginForm />
          <div className="flex justify-center mt-4">
            <p className="text-white italic">
              First time? Start from
              <span className="text-blue-700 ml-0">
                <Link href="/register"
                  className="inline-block font-bold py-2 px-1 rounded">
                  here
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="hidden lg:block row-start-3 col-start-2 col-span-3 bg-blue-600">
          <div className="w-2/3">
            <h2 className="font-bold text-white m-5">
              You are always welcomed.
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline m-2 mt-0 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </h2>
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
      <Footer />
    </main>
  )
}


