type ButtonProps = {
    title: string;
    onClick?: () => void;
    className?: string;
}

export const Button = (
    {title, onClick, className, ...props}:ButtonProps,
) =>{
    return (
        <button
            className={`cursor-pointer py-2 px-4 rounded-lg bg-main hover:shadow-lg hover:shadow-main/50 ${className}`}
            onClick={onClick}
            {...props}
        >
            {title}
        </button>
    )
}