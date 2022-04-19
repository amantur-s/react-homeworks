import "./App.css";
import ExpenseItem from "./component/ExpenseItem";
import Expense1 from "./components/Expense1";
import Expense2 from "./components/Expense2";
import Expense3 from "./components/Expense3";

function App() {
  const nft = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiUNkgFW1bToC3DsyDk__iGrW3dmk2PXTo015YImKdB8c0cunszvZol6kWtkRiTn6YIQ&usqp=CAU",
      price: "1200 ETH",
      title: "CryptoPunk #4155",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeYT3BK2OwBlSZDPz2tLaKWemuvSwZmE96eSnIIB0TmwoGPTTCWkgAO5lqbbxRxzmJIs&usqp=CAU",
      price: "1800 ETH",
      title: "CryptoPunk #4075",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMnKOKYUuVD0xlZ9TRK8fcCbNLR4qtLLSGoVQoRYU6jjfjBXKaaT1z8tjPNHaI15BMPs&usqp=CAU",
      price: "3000 ETH",
      title: "CryptoPunk #4209",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGl_6tqe_k0GltF4M93_0Iq7t_U9p41VnjS7aRBgoHURBpHEMN5hNeW8AGrz_iISrA3Ms&usqp=CAU",
      price: "2200 ETH",
      title: "CryptoPunk #4093",
    },
  ];

  return (
    <div className="App">
      <div>
        <Expense1 img={nft[3].url} />
        <Expense2 title={nft[3].title} />
        <Expense3 price={nft[3].price} />
      </div>
      <ExpenseItem img={nft[0].url} title={nft[0].title} price={nft[0].price} />
      <ExpenseItem img={nft[1].url} title={nft[1].title} price={nft[1].price} />
      <ExpenseItem img={nft[2].url} title={nft[2].title} price={nft[2].price} />
    </div>
  );
}

export default App;
