import { Button } from "../Button/Button"

export const Lists = ({name , index, handleDelete}) => {
    return(
        <>
            <li>{name} 
                <Button
                    index={index}
                    handleDelete={handleDelete}
                />
            </li>
        </>
    )
}