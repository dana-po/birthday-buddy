import Person from "./Person"

const List = ({users}) => {
  return (
    <section>
      {users.map((user)=> {
return <Person key={user.id} {...user}/>
      })}
    </section>
  )
}
export default List