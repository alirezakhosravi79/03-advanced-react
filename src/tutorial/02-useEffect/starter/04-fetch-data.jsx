import { useEffect } from "react";
import { useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const users = await res.json();
        setUsers(users)
        
      }catch (error) {
        console.log('Error fetching data');
      }
    }
    fetchData();
  }, [])
  return <section>
    <h3>Github Users</h3>
    <ul className="users">
      {
        users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })
      }
    </ul>
  </section>;
};
export default FetchData;
