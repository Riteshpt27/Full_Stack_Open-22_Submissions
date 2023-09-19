const Header = props => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = props => {
  return (
    <>
      <p>
        {props.partsInfo[0].part} {props.partsInfo[0].exercises}
      </p>
      <p>
        {props.partsInfo[1].part} {props.partsInfo[1].exercises}
      </p>
      <p>
        {props.partsInfo[2].part} {props.partsInfo[2].exercises}
      </p>
    </>
  )
}

const Total = props => {
  const totalNumberOfExercises = props.partsInfo[0].exercises +
    props.partsInfo[1].exercises + props.partsInfo[2].exercises
  return (
    <p>Number of exercises {totalNumberOfExercises}</p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const partsInfo = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content partsInfo={partsInfo} />
      <Total partsInfo={partsInfo} />
    </div>
  )
}

export default App