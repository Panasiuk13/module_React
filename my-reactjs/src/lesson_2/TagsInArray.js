import './style.css';

const prods = [
    { id: 1, name: 'Product1', cost: 100 },
    { id: 2, name: 'Product2', cost: 200 },
    { id: 3, name: 'Product3', cost: 300 },
];

function TagsInArray() {
    const array = [<p>1</p>, <p>2</p>, <p>3</p>]

    const generateArray = [];

    for(let x = 0; x <= 10; x++){
        generateArray.push(<p key={x}>{ x }</p>)
    }

    const res = prods.map(el => {
        return (
            <div  key={el.id}>
              <p>Name: { el.name }</p>
              <p>Cost: { el.cost}</p>
            </div>
    )
    });

    return (
        <div>
        <div className="flex">
        { generateArray }
        </div>
        <div>{ res }</div>
        </div>
)
}

export default TagsInArray