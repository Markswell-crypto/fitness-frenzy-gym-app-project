import { useState, useRef, useEffect } from "react";

const Comments = ({
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
    comment,
  }) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);
  

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };
    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");
        }


    if (editMode) setEditMode(false);
};

const handleDelete = () => {
  handleDeleteNode(comment.id);
};

    }
  return (
    <div>
        <div>
            <input  
                type="text"
                className="form-control"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type..."
            />
            <div className="reply-btn" onClick={onAddComment}>COMMENT</div>
        </div>
    </div>
  )
}

export default Comments;