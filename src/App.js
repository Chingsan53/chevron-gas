import "./App.css";

const numberData = [
  // {
  //   name: "Brett Harding",
  //   phoneNumber: "(931) 357-5569",
  //   gmail: "BrettHarding381@gmail.com",
  //   status: "1 usage available",
  // },

  {
    name: "Greg Stevenson",
    phoneNumber: "(731) 991-3368",
    gmail: "GregStevenson454@gmail.com",
    status: "2 usage available",
  },
  {
    name: "Lara Howarth",
    phoneNumber: "(442) 368-2173",
    gmail: "LaraHowarth011@gmail.com",
    status: "3 usage available",
  },
  {
    name: "William Benson",
    phoneNumber: "(256) 337-1886",
    gmail: "williambenson11@gmail.com",
    status: "3 usage available",
  },
  // Will include it later. Expect to include them on 03/05/2024
  // {
  //   name: "James Lee",
  //   phoneNumber: "",
  //   gmail: "",
  //   status: "3 usage available",
  // },

  {
    name: "More on the way. Please be patient",
    phoneNumber: "Expected 3-4 new numbers a week since the bot is very slow",
    gmail: "Please contact me if any phone number doesn't work as expected",
    status: "Facebook: Ching San",
  },
];

const App = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};

const Menu = () => {
  const numbers = numberData;
  return (
    <div>
      <ul className="container">
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
      <li className="pizza">
        <div className="">
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
