function Houmwork () {
    let text;
    const isActive = true;


    if(isActive){
        text = '<span>OPEN</span>';
    } else{
        text = '<span>CLOSE</span>';
    }

    const result =
    <>
      <div className="child" id={text}>
        {text}
      </div>
      <div className="child">
        {isActive && text + 'TASK'}
      </div>
    </>

    return [result]

}

export default Houmwork