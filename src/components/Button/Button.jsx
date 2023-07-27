export const Button = ({handleDelete, index}) => {
    return(
        <>
            <button onClick={() => handleDelete(index)}>x</button>
        </>
    )
}