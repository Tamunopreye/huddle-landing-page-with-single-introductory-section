import logo from "./images/logo.svg"
import illustrator from "./images/illustration-mockups.svg"
function App() {
  return (
    <div className="font-poppins bg-Violet bg-bgImG bg-left bg-contain bg-no-repeat  h-screen overflow-auto">
      <nav className="container mx-auto py-4 px-8">
        <img src={logo} alt="" className="w-32 mb-4 md:w-60" />
      </nav>
      <main className="container my-3 mx-auto px-8">
        <section className="flex flex-col gap-8 text-center md:flex-row md:text-left">
          <div className="w-full">
            <img src={illustrator} alt="" className="w-full" />
          </div>
          <div className="space-y-6 text-white max-w-lg md:mt-12">
            <h2 className="text-4xl font-bold max-w-sm mx-auto leading-10  md:max-w-md  md:text-5xl md:mx-0">
              Build The Community Your Fans Will Love
            </h2>
            <p className="text-xl md">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="font-openSans bg-white text-center text-Violet py-2 px-14 rounded-full shadow-black shadow-md  hover:text-white hover:bg-SoftMagenta">
              Register
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
