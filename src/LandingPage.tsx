import profile from "./assets/profile.jpg";
import resume from "./assets/Burns Resume 2024.pdf";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img style={{ width: "30%", borderRadius: "50%" }} src={profile} />
      <h1>mburns.me</h1>
      <h3>portfolio website for matthew burns</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form action="https://github.com/greendingbat">
          <button>GitHub</button>
        </form>
        <form action="https://www.linkedin.com/in/matthew-r-burns/">
          <button>LinkedIn</button>
        </form>
        <form action={resume}>
          <button>Resume (download)</button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
