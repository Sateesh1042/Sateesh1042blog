import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { addDoc,collection } from "firebase/firestore";
import { db,auth } from "../firebase/config";

const CreatePost = () => {
  const navigate = useNavigate();
  useTitle("Create");
  const postRef = collection(db, "posts");

  async function handleCreatePost(event){
    event.preventDefault();

    const document = {      
      title: event.target.title.value,
      description: event.target.description.value,
      name : auth.currentUser.displayName,
      id : auth.currentUser.uid
    }
    await addDoc(postRef,document);
    navigate("/");
    console.log(document.name)
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required />
        <textarea type="text" className="description" name ="description" placeholder="description" maxLength="600" required ></textarea>
        <button type="submit" className="submit" >Create</button>
      </form>
    </section>
  )
}

export default CreatePost
