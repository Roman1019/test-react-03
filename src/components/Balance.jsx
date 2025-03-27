import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/store.js";

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const handleDeposit = () => {
    const depositAction = deposit(20);
    dispatch(depositAction);
  };
  const handleWithdraw = () => {
    const withdrawAction = withdraw(20);
    dispatch(withdrawAction);
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
