import { useState, useEffect } from "react"
import axios from 'axios'
import useAxiosPost from "../../hooks/useAxiosPost"
import useAxiosGet from "../../hooks/useAxiosGet"

const CreateArticle = ()=>{
    const [title,setTitle] = useState('')
    const [description, setDescription] =useState('')
    const [image,setImage] = useState(null)
    const [category, setCategory] =useState("")
    const formData = new FormData()
    formData.append("title",title)
    formData.append('description',description)
    formData.append('image',image)
    formData.append("categoryId",category)
    const [categories,errorCategories,isLoadingCategories,refreshCategories] = useAxiosGet('https://apib2-production.up.railway.app/category')
    const [data, error, isLoading,postData] = useAxiosPost('https://apib2-production.up.railway.app/article',formData,{headers:{'Content-Type': 'multipart/form-data'}})
    //const [data, error, isLoading,postData] = useAxiosPost('https://apib2-production.up.railway.app/article',{name})
    const handleSubmit = (e)=>{
        e.preventDefault();
        postData()
    }
    return(
        <>
        {data && data.message}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ecrivez le titre" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="Le contenue" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <select onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="">Choissisez une categorie</option>
                {categories && categories.map((c)=>(
                    <option value={c._id}>{c.name}</option>
                ))}
            </select>
            {image && <img alt="preview" src={URL.createObjectURL(image)} />}
            <button type="submit">Enregistrer</button>
        </form>
        </>
    )
}

export default CreateArticle