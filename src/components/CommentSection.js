import React, {useState} from 'react';
import Comment from './Comment';

const CommentSection = ({comments}) => {
    

    const [searchBar, setSearchBar] = useState('')
    const [sortBy, setSort] = useState('user')
    const [commentsState, setComments] = useState(comments)

    let modifiedComments = commentsState.filter((com => searchBar!==''? (com.user.includes(searchBar)? true : null ) :  true))
                                    .sort((com1, com2) => com1[sortBy].localeCompare(com2[sortBy]))

    const handleSearchBar = (e) => {
        setSearchBar(()=>e.target.value)
    }
    const handleSortBy = (e) => {
        setSort(() => e.target.value)
    }
    const handleDeleteComment = (id) => {
        setComments(()=> commentsState.filter((com)=> com.id !== id ))
    } 


    return ( 
    <>
        <h1>{comments.length} Comments</h1>
        <select value={sortBy} onChange={handleSortBy}>
            <option value="user">User</option>
            <option value="comment">Comment</option>
        </select>
        <input value={searchBar} onChange={handleSearchBar}/> 
        {modifiedComments.map( (com)=> <Comment key={com.id} id={com.id} com={com} onDelete={handleDeleteComment}/>)}
    </> 
    );
}
 
export default CommentSection;