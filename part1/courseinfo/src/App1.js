const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.exerciseNum}
      </p>
    </>
  )
}

const Total = (props) => {
  function calculateTotal(numArr) {
    let total = 0;
    numArr.forEach(element => {
      total += element;
    });
    return total;
  }
  return (
    <>
      <p>Number of exercises: {calculateTotal(props.exerciseNumArr)}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content partName={part1} exerciseNum={exercises1} />
  //     <Content partName={part2} exerciseNum={exercises2} />
  //     <Content partName={part3} exerciseNum={exercises3} />
  //     <Total exerciseNumArr={[exercises1,exercises2,exercises3]} />
  //   </div>
  // )
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App1