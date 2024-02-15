
import './style/style.css'
const Hero = () => {
  return (
    <div className="container px-28 py-5 bg-center  bg-cover min-h-screen min-w-full" style={{ backgroundImage: `url('./src/components/image/image.png')` }}>
      <div>
        <nav className="flex items-center">
          <img src="./src/components/image/logo.png" alt="Logo" className="w-40 cursor-pointer" />
          <ul className="flex-1 text-center">
            <li className="list-none inline-block px-3"><a className="no-underline text-white px-2" href="#">Home</a></li>
            <li className="list-none inline-block px-3"><a className="no-underline text-white px-2" href="#">About</a></li>
            <li className="list-none inline-block px-3"><a className="no-underline text-white px-2" href="#">Features</a></li>
            <li className="list-none inline-block px-3"><a className="no-underline text-white px-2" href="#">Contact</a></li>
          </ul>
          <img src="src\components\image\cart.png" alt="Cart" className="w-8 cursor-pointer" />
        </nav>
      </div>
      <div className="text-white mt-48 max-w-xl">
        <h1 className="text-6xl font-semibold leading-normal">Groceries<br />delivery in <span className="font-light">15 mins</span> </h1>
        <p>Groceries offer a wide range of products, including fresh products, meats, dairy, baked goods, and non-perishable items.</p>
        <div className="mt-10">
          <a href="#" className="text-white bg-yellow-300 border rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border-transparent">Order Now</a>
          <a href="#" className="text-white">Download App <span className="text-lg inline-block rotate-90">&#10148;</span> </a>
        </div>
      </div>
      <img src="./src/components/image/grocery-image.png" className="w-full md:w-1/2 md:absolute bottom-0 right-20" alt="" />
    </div>
  );
};

export default Hero;