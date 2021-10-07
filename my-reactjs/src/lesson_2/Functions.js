function Functions() {
    const result = cube(2);

    function cube(number) {
        return number ** 3
    }

    function openAlert(e) {
        console.log(e);
        alert('Hello, React');
    }

    function openMessage(arg, e) {
        console.log(e);
        alert(`${arg}`)
    }

    return (
        <div>
        <p>Cube 2: { result }</p>
    <p>Cube 4: { cube(4) }</p>

    <button onClick={openAlert}>Event Alert</button>

    <button onClick={(event) => { openMessage('Messages!!!', event) }}>Open Message</button>
    </div>
)
}

export default Functions