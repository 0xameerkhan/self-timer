import "./App.scss";

const App = () => {
  const date1 = new Date(import.meta.env.VITE_LEFT_DATE);
  const date2 = new Date();
  const timeDiff = Math.abs(date2 - date1);
  const diffMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const diffDays = Math.floor((timeDiff / (1000 * 60 * 60 * 24)));
  const diffWeeks = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 7)));
  return (
    <div className="app">
      {/* <p>{diffYears} YEARS</p> */}
      {/* <p>{diffMonths} MONTHS</p> */}
      {/* <p>{diffWeeks} WEEKS</p> */}
      <p>{diffDays} DAYS</p>
    </div>
  );
};

export default App;
