import "./App.css";
import Card from "./components/Card";
import CardLayout from "./components/CardLayout";

const users = [
  {
    id: "#0001",
    username: "Phineas",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "phin • 20 yrs co-founder & dev @ giggl",
    profilePic:
      "https://cdn.discordapp.com/avatars/94490510688792576/55294160686d30f11d19d21045d3f35a",
  },
  {
    id: "#1999",
    username: "Dustin",
    wallpaper: "rgb(0, 0, 0)",
    userInfo:
      "22y - Software Engineer passionate about networking and infrastructure",
    profilePic:
      "https://cdn.discordapp.com/avatars/156114103033790464/8bd12e1bdc5bf93249eeffb783587823",
  },
  {
    id: "#3020",
    username: "pxseu",
    wallpaper: "rgb(126, 97, 59)",
    userInfo:
      "penniless, invented dogecoin, times person of the year zero years in a row",
    profilePic:
      "https://cdn.discordapp.com/avatars/338718840873811979/6ba75206071cd9b847cf407ed8e151ee",
  },
  {
    id: "#6577",
    username: "🗕🗗🗙",
    wallpaper: "rgb(24, 25, 28)",
    userInfo: "👶 7 years ago 💔2 years ago",
    profilePic:
      "https://cdn.discordapp.com/avatars/937051733773938689/679321173067da9d28dc7ce7f6351323",
  },
  {
    id: "#0002",
    username: "stealthwave",
    wallpaper: "rgb(66, 66, 112",
    userInfo: "follow me on twitter ☺",
    profilePic:
      "https://cdn.discordapp.com/avatars/597170794111434753/bdcd695d491a681005f91113ec2459ae",
  },
  {
    id: "#0023",
    username: "Atzu",
    wallpaper: "rgb(66, 81, 78)",
    userInfo: "Dev for streamers.",
    profilePic:
      "https://cdn.discordapp.com/avatars/325414558623858698/a_cb7f83cd43a2023baff5767483b85be6",
  },
  {
    id: "#0016",
    username: "Voltages",
    wallpaper: "rgb(0, 81, 119)",
    userInfo: "Information technology specialist.",
    profilePic:
      "https://cdn.discordapp.com/avatars/218972931701735424/8252199d8e59762c4952597118e743b2",
  },
];

function App() {
  return (
    <div className="App">
      <CardLayout>
      {users.map((elem, index) => {
        return (
          <Card
            id={elem.id}
            name={elem.username}
            walp={elem.wallpaper}
            info={elem.userInfo}
            pic={elem.profilePic}
          />
        );
      })}
      </CardLayout>
    </div>
  );
}

export default App;
