import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/balanceSlice.js";

export default function Balance() {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.balance.value);
  console.log(balance);

  const handleDeposit = () => {
    dispatch(deposit(20));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(20));
  };
  return (
    <div>
      <p>Balance:{balance} credits</p>
      {/* <input type="number" /> */}
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
