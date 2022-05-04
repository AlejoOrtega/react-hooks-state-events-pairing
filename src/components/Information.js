import React, {useState} from 'react';
import CommentSection from './CommentSection';


const Information = ({video}) => {
    const {title, views, createdAt, upvotes, downvotes, comments} = video

    const [isHidden, setHidden] = useState(false)
    const [upVotes, setUpVotes] = useState(upvotes)
    const [downVotes, setDownVotes] = useState(downvotes)

    const hiddenText = isHidden? 'Show Comments' : 'Hide Comments'

    const handleOnClick = () => {
        setHidden(!isHidden)
    }
    const handleUpVotes = () => {
        setUpVotes((previous)=>previous+1)
    }
    const handleDownVotes = () => {
        setDownVotes((previous)=>previous+1)
    }
    return ( 
        <>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded { createdAt }</p>
            <div>
                <button onClick={handleUpVotes}>{upVotes} 👍</button>
                <button onClick={handleDownVotes}>{downVotes} 👎</button>
            </div>
            
            <button onClick={handleOnClick}>{hiddenText}</button>
            
            {!isHidden? <CommentSection comments={comments}/> : null}
            

        </>
     );
}
 
export default Information;