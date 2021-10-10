import './Houmwork.css';

function Houmwork () {
    let text;
    const isActive = true;


    if(isActive) {
        text ='OPEN';
    }else {
        text ='CLOSE';
    }

    const result =
    <>
     <div>
       <div className="child" id={text}><span>{text}</span></div>
       <div className="child"><span>{isActive && text + ' TASK'}</span></div>
     </div>
    </>

    return (result);
}

export default Houmwork;



