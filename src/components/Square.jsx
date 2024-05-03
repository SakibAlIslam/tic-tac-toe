const Square = ({value, onSquareClick}) => {
    return (
        <button onClick={onSquareClick} className="bg-white border border-gray-300 h-20 w-20 m-2 leading-9 text-5xl text-bold text-[#0c0c0c]">{value}</button>
    );
};
export default Square;