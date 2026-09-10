import HomeLeft from "../components/HomeLeft";
import Homeright from "../components/Homeright";
import Mainhome from "../components/Mainhome";


function Home() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-7 h-screen ">
         <HomeLeft/>
          <Mainhome/>
          <Homeright/>
        </div>
      </section>
    </>
  );
}

export default Home;
