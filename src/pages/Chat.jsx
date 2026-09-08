import Chatbox from "../components/Chatbox";
import Leftside from "../components/Leftside";
import Rightside from "../components/Rightside";

function Chat() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-screen ">
          <Leftside />
          <Chatbox />
          <Rightside />
        </div>
      </section>
    </>
  );
}

export default Chat;
