import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useAxiosDelete from "../../hooks/useAxiosDelete"

const DeleteArticle = () =>{
    let {articleId} = useParams()
    const navigate = useNavigate()
    const [data, error,isLoading,deleteData] = useAxiosDelete(`https://apib2-production.up.railway.app/article/${articleId}`)
    if(data){
        navigate('/')
    }
    return(
        <>
            {error && <p>Vous avez une erreur : {error}</p>}
            {isLoading && <p>Suppression en cours</p>}
            <p>Etes-vous sur de vouloir supprimer l'article ?</p>
            <button onClick={deleteData}>Oui</button>
        </>
    )
}

export default DeleteArticle