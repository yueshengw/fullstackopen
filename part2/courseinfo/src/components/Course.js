import React from 'react'
import { useState } from 'react'

const Header = (props) => {
    return (
        <>
            <h1>{props.course.name}</h1>
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
        <p>Number of exercises: {parts.map(part => part.exercises).reduce((iv, cv) => {
            return iv + cv
        })}</p>
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