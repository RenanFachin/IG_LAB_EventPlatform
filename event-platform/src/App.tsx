import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query{
    lessons {
      id
      title
    }
  }
`


interface LessonProps {
  id: string;
  title: string;
}

export function App() {
  // Buscando do jeito tradicional os dados da API
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {console.log(response.data)})
  // }, [])

  const { data } = useQuery<{lessons: LessonProps[]}>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <>
      <ul>
        {data?.lessons.map((lesson) => {
          return (
            <li key={lesson.id} className="text-bold text-3xl text-violet-700">
              {lesson.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}