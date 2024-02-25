
function IncDec({ amount, setAmount }) {

  const handleIncrement = () => {
    setAmount((count) => {
      const newCount = count + 1;
      return newCount;
    });

  }
  const handleDecrement = () => {
    if (amount !== 1)
      setAmount((counter) => {
        const newCount = counter - 1;
        return newCount;
      });

  }
  return (
    <div className="increment-decrement">
      <button className="btn btn-primary btn-m" type="button" onClick={handleDecrement}>-</button>
      <button className="btn btn-primary btn-outline pointer-events-none btn-m mx-1" type="button">{amount}</button>
      <button className="btn btn-primary btn-m" type="button" onClick={handleIncrement}>+</button>
    </div>
  )
}

export default IncDec