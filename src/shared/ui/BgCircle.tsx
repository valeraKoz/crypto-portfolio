export const BgCircle = (
    {color, position}:
        {
            color:'pink'|'green',
            position: {
                top?: number,
                left?: number,
                right?: number,
                bottom?: number,
            }
        }
) => {
    return (
        <div
            style={{...position, backgroundColor: `var(--color-${color}-500)`}}
            className='absolute block h-[400px] w-[400px] rounded-full -z-2 blur-2xl opacity-[5%]'>

        </div>
    )
}