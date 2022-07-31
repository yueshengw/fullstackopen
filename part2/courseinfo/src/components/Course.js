import React from 'react'

const Header = (props) => {
    return (
        <>
            <h2>{props.course.name}</h2>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part, index) => { return <p key={index}>{part.name} {part.exercises}</p> })}
        </div>
    )
}

const Total = ({ parts }) => {
    console.log(parts)
    function findTotal() {
        let total = 0
        parts.forEach(part => total += part.exercises)
        return total
    }
    return (
        <h4>Number of exercises: {parts.map(part => part.exercises).reduce((iv, cv) => {
            return iv + cv
        })}</h4>
    )
} //Done

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course