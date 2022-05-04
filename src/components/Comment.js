import React, {useState} from 'react';


const Comment = ({com, onDelete}) => {
    const {user, comment, id} = com;

    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)

    const handleUpVotes = () => {
        setUpVotes((previous)=>previous+1)
    }
    const handleDownVotes = () => {
        setDownVotes((previous)=>previous+1)
    }
    return ( 
        <>
            <h4>{user}</h4>
            <p>{comment}</p>
            <div>
                <button onClick={handleUpVotes}>{upVotes} 👍</button>
                <button onClick={handleDownVotes}>{downVotes} 👎</button>
            </div>
            <button onClick={()=>onDelete(id)}>delete</button>
        </>
     );
}
 
export default Comment;