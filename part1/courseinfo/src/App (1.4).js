const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part,index) => {return <p key={index}>{part.name} {part.exercises}</p>})}
        </div>
    )
}

const Total = (props) => {
    console.log(props.parts)
    function findTotal() {
        let total = 0
        props.parts.forEach(part => total += part.exercises)
        return total
    }
    return (
            <p>Number of exercises: {findTotal()}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App

/* <Content parts={parts} />
            <Total parts={parts} />*/