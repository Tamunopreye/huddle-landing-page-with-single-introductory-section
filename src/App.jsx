import logo from "./images/logo.svg"
import illustrator from "./images/illustration-mockups.svg"
function App() {
  return (
    <div className="">
      <nav>
        <img src={logo} alt="" />
      </nav>
      <main>
        <section>
          <div>
            <img src={illustrator} alt="" />
          </div>
          <div>
            <h2>Build The Community Your Fans Will Love</h2>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
