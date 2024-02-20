import logo from "./logo.svg";
import "./App.css";

const numberData = [
  // {
  //   name: "Brett Harding",
  //   phoneNumber: "(931) 357-5569",
  //   gmail: "BrettHarding381@gmail.com",
  //   status: "1 usage available",
  // },
  {
    name: "Rick Robertson",
    phoneNumber: "(920) 791-1869",
    gmail: "RickRobertson766@gmail.com",
    status: "3 usage available",
  },
  {
    name: "Steven Adams",
    phoneNumber: "(704) 495-7404",
    gmail: "StevenAdams964@gmail.com",
    status: "2 usage available",
  },
  {
    name: "Greg Stevenson",
    phoneNumber: "(731) 991-3368",
    gmail: "GregStevenson454@gmail.com",
    status: "3 usage available",
  },
  {
    name: "Lara Howarth",
    phoneNumber: "(442) 368-2173",
    gmail: "LaraHowarth011@gmail.com",
    status: "3 usage available",
  },
];

const App = () => {
  return (
    <div className="">
      <Menu />
    </div>
  );
};

const Menu = () => {
  const numbers = numberData;
  return (
    <div>
      <ul className="">
        {numbers.map((number) => (
          <Number numberObj={number} key={number.name} />
        ))}
      </ul>
    </div>
  );
};

const Number = ({ numberObj }) => {
  return (
    <div>
      <li className="cards-container">
        <div className="card">
          <h3>{numberObj.name}</h3>
          <p>{numberObj.phoneNumber}</p>
          <p>{numberObj.gmail}</p>
          <span>{numberObj.status}</span>
        </div>
      </li>
    </div>
  );
};

export default App;
