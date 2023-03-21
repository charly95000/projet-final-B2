import {useState} from 'react'
import useAxiosGet from '../../hooks/useAxiosGet'

const Home = ()=>{
    const [articles,errorArticles,isLoadingArticles,refreshArticles] = useAxiosGet('https://apib2-production.up.railway.app/article')
    return(
        <>
            {isLoadingArticles ?
                <p>Chargement des données en cours...</p>
            :
            <table>
            <tr>
                <th>Titre</th>
                <th>Contenue</th>
                <th>Categorie</th>
                <th>url de l'image</th>
                <th>Voir</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            {articles.map((a)=>(
                <tr>
                    <td>{a.title}</td>
                    <td>{a.description}</td>
                    <td>{a.categoryId.name}</td>
                    <td>{a.imageUrl}</td>
                    <td>Lien Voir</td>
                    <td>Lien modifier</td>
                    <td>Lien supprimer</td>
                </tr>
            ))}
        </table>
            }
        </>
    )
}

export default Home