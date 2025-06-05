import { useEffect } from "react"
import { useFetch } from "./useFetch"

export const FetchApp = () => {
    
    const url = `https://jsonplaceholder.typicode.com/users`

    const{data, isLoading, errors, fetchData} = useFetch()

    useEffect(() => {
        fetchData(url, 'GET')
    }, [])
    
    return (
        <>
        <h1 className="m-5">Lista de Usuarios / FetchHook</h1>
        {isLoading 
        ? <h4>Cargando ...</h4> 
        : errors 
            ? <h4>Ha ocurrido un error: {errors}</h4>
            : 
            <table className="table m-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(user => {
                            return(
                            <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        }
        </>
    )
}
