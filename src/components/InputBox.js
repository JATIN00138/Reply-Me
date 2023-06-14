import './InputBox.css';
import { MessageOUT } from './messages/messages';

function InputBox(props) {
    
    const text = 'textarea'
    
    var x= document.getElementsByClassName("textarea")
    function handleKeyPress(e) {
        if (e.keyCode === 13) {
            console.log("You pressed a ENTER")
            props.printMessage("x");
            return;
        }
        console.log("You pressed a key.")
    }

    return (
        <div className="input-box">
            <textarea className='textarea'  onKeyDown={(e) => handleKeyPress(e)} placeholder='Click here to message'/>
        </div>
    );
}
export default InputBox;