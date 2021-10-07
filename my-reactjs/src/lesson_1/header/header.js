import './header.css';

function Header() {
    const isActive = true;

    const users = [
        {
            name: 'Alex',
            age: 20
        },
        {
            name: 'Egor',
            age: 23
        },
        {
            name: 'Yan',
            age: 53
        },
    ];

    if(isActive) {
        users[0].age = 50
    }else {
        users[0].age = 10
    }

    const header = (
        <>
        <div>Header</div>
        <div className="user">
        <p className="user__name" id={ users[0].age >= 30 ? 'OPEN' : 'CLOSE' }>
        { users[0].name }
        </p>
        <p className="user__age">
        { users[0].age + 1 }
        </p>
        </div>

        <div className="user">
        <p className="user__name" id={users[1].name}>
        { users[1].name }
        </p>
        <p className="user__age">
        { users[1].age + 1 }
        </p>
        </div>

        <div className="user">
        <p className="user__name" id={users[2].name}>
        { users[2].name }
        </p>
        <p className="user__age">
        { users[2].age + 1 }
        </p>
        </div>

        </>
)

    return (
        <header className="header">
        { header }
        </header>
)
}

export default Header

