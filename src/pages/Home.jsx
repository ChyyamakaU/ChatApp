import HomeLeft from "../components/HomeLeft";
import Mainhome from "../components/Mainhome";


function Home() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-6 h-screen ">
         <HomeLeft/>
          <Mainhome/>
        </div>
      </section>
    </>
  );
}

export default Home;
