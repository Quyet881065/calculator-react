
export const Button = ({value, onClick, className}) => {
    return (
        <button onClick={() => onClick(value)}
           className={`p-5 rounded text-xl font-medium hover:bg-gray-600 cursor-pointer ${className}`}> 
            {value}
        </button>
    )
}