import { Button } from "react-bootstrap";


export const TestButton = ({buttonname})=>{
    return(
        <div className="TestButton">

            <Button>{buttonname}</Button>
            <Button variant =  "primary"> Primary </Button>{' '}
            <Button variant =  "Secondary"> Secondary </Button>{' '}
        </div>
    )
}

export const PrimaryButton = ()=>{
    return(
        <div className="PrimaryButton">

            <Button variant =  "primary"> Primary </Button>{' '}
        </div>
    )
}