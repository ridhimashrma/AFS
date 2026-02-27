// import { useState } from "react";
// export default function App() {
//   const [num, setNum] = useState(null);
//   const [res, setResult] = useState(null);
//   function check() {
//     const n = Math.floor(Math.random() * 10);
//     setNum(n);

//     if (n == 7) setResult("win");
//     else setResult("lose");
//   }
//   return (
//     <div>
//       <button onClick={check}>Click</button>
//       <h1>Number: {num}</h1>
//       {res == "win" && (
//         <img src="https://t3.ftcdn.net/jpg/03/12/81/58/360_F_312815843_CdVm05kiBenU3YmChP1KRIzcblRgTQFV.jpg" 
//         alt="You Won" width="200"/>
//       )}
//       {res == "lose" && (
//         <img src="https://www.shutterstock.com/image-vector/you-lose-stamp-on-white-260nw-1320874436.jpg"
//           alt="You Lost" width="200"/>
//       )}
//     </div>
//   );
// }



import { useState } from "react";
export default function App() {
  const [num, setNum] = useState(null);
  function check() {
    const n = Math.floor(Math.random() * 10);
    setNum(n);
  }
  const result = num === null ? null : num === 7 ? "win" : "lose";
  return (
    <div>
      <button onClick={check}>Click</button>
      <h1>Number: {num}</h1>
      {result === "win" && (
        <img
          src="https://t3.ftcdn.net/jpg/03/12/81/58/360_F_312815843_CdVm05kiBenU3YmChP1KRIzcblRgTQFV.jpg"
          alt="You Won" width="200"/>
      )}

      {result === "lose" && (
        <img
          src="https://media.tenor.com/HgfzKvP9OeAAAAAM/loser-you-lose.gif"
          alt="You Lost" width="200" />
      )}
    </div>
  );
}