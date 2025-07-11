import GitHubCalendar from "react-github-calendar";

export default function PlatformsProfile() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <p className="font-bold text-2xl mb-10 flex items-center justify-center">
        Code Activity Dashboard
      </p>

      <div className="flex justify-center mb-8">
        <img
          src="https://leetcard.jacoblin.cool/Padma_kumar?theme=dark&font=Marcellus&ext=heatmap"
          alt="LeetCode Heatmap"
          className="w-full max-w-3xl rounded-xl shadow-lg"
        />
      </div>

      {/* <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Padmakumar18&show_icons=true&theme=react&hide_border=true"
          alt="GitHub Stats"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=Padmakumar18&theme=react&hide_border=true"
          alt="GitHub Streak"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
      </div> */}

      <div className="flex justify-center mb-8">
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Padmakumar18&theme=vue"
          alt="GitHub Profile Summary"
          className="w-full max-w-5xl rounded-xl shadow-xl"
        />
      </div>

      <div className=" rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-center  mb-4">
          GitHub Contributions
        </h2>
        <div className="flex justify-center">
          <GitHubCalendar
            username="Padmakumar18"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            // colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
}
