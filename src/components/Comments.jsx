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
          <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
            {comment.id === 1 ? (
              <>
                <input
                  type="text"
                  className="inputContainer__input first_input"
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="type..."
                />
    
                <Action
                  className="reply comment"
                  type="COMMENT"
                  handleClick={onAddComment}
                />
              </>
            ) : (
              <>
                <span
                  contentEditable={editMode}
                  suppressContentEditableWarning={editMode}
                  ref={inputRef}
                  style={{ wordWrap: "break-word" }}
                >
                  {comment.name}
                </span>
    
                <div style={{ display: "flex", marginTop: "5px" }}>
                  {editMode ? (
                    <>
                      <Action
                        className="reply"
                        type="SAVE"
                        handleClick={onAddComment}
                      />