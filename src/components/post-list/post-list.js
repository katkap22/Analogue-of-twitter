import React from "react";
import "./post-list.css";
import PostListItem from "../post-list-item/post-list-item";
import {ListGroup} from "reactstrap";



const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map(item =>{
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    // label={item.label}
                    // important={item.important}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )
    })

  return (
    <ListGroup className="app-list">
        {elements}
    </ListGroup>
  );
};

export default PostList;
