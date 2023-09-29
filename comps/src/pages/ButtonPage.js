import {GoBell} from 'react-icons/go'
import Button from "../components/Button";
function ButtonPage(){
    return(
        <div>
            <div><Button primary rounded outline >
                 <GoBell/> 
                 Click me
                 </Button>
            </div>
            <div><Button secondary>Click me</Button></div>
            <div><Button success>Click me</Button></div>
            <div><Button warning >Click me</Button></div>
            <div><Button danger outline>Click me</Button></div>
        </div>
    )
}
export default ButtonPage;