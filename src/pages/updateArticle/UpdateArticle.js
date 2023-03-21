import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxiosGet from "../../hooks/useAxiosGet"
import useAxiosPut from "../../hooks/useAxiosPut"

const UpdateArticle = ()=>{
    let {articleId} = useParams()
    const [article, error, isLoading, getArticle] = useAxiosGet(`https://apib2-production.up.railway.app/article/${articleId}`)
    const [categories, errorCategories, isLoadingCategories,getCategories] = useAxiosGet('https://apib2-production.up.railway.app/category')
    const [title,setTitle] = useState('')
    const [description, setDescription] =useState('')
    const [image,setImage] = useState(null)
    const [category, setCategory] =useState({})
    const formData = new FormData()
    formData.append("title",title)
    formData.append('description',description)
    formData.append('image',image)
    formData.append("categoryId",category)
    const [data,errorData,isLoadingData, putData] = useAxiosPut(`https://apib2-production.up.railway.app/article/${articleId}`,formData,{headers:{'Content-Type': 'multipart/form-data'}})
    const handleSubmit = (e)=>{
        e.preventDefault()
        putData()
    }
    useEffect(()=>{
        if(article){
            console.log(article.category)
            setTitle(article.title)
            setDescription(article.description)
            setCategory(article.categoryId)
        }
    },[article])

    return(
        <>
        {data && data.message}
        {error &&<p>{error}</p>}
        {isLoading && isLoadingCategories ?
            <p>Chargement en cours</p>
        :
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ecrivez le titre" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="Le contenue" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <select onChange={(e)=>{setCategory(e.target.value)}}>
            <option value={category._id}>{category.name}</option>
                {categories && categories.map((c)=>(
                    c._id !== category._id && <option value={c._id}>{c.name}</option>
                ))}
            </select>
            {image && <img alt="preview" src={URL.createObjectURL(image)} />}
            <button type="submit">Modifierr</button>
        </form>
        }
        </>
        
    )
}

export default UpdateArticle