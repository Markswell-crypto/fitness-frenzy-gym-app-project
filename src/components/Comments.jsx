import { useState, useRef, useEffect } from "react";
import Action from "./Action";

const Comment = ({
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  comment,
}) => {
  const [input, setInput] = useState(comment.name || "");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode) inputRef.current?.focus();
  }, [editMode]);

  const handleNewComment = () => {
    setExpand(true);
    setShowInput(true);
  };

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, input);
      setEditMode(false);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

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
            <div>
            <Action
              className="reply-comment"
              type="COMMENT"
              handleClick={onAddComment}
            />
            </div>
          </>
          
        ) : (
          <>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning={true}
              ref={inputRef}
              className="commentText"
            >
              {input}
            </span>

            <div className="commentActions">
              {editMode ? (
                <>
                  <Action
                    className="reply"
                    type="SAVE"
                    handleClick={onAddComment}
                  />
                  <Action
                    className="reply"
                    type="CANCEL"
                    handleClick={() => {
                      setInput(comment.name || "");
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="replyButton"
                    type="REPLY"
                    handleClick={handleNewComment}
                  />
                  <Action
                    className="replyEdit"
                    type="EDIT"
                    handleClick={() => {
                      setEditMode(true);
                    }}
                  />
                  <Action
                    className="replyDelete"
                    type="DELETE"
                    handleClick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className="childInput">
            <input
              type="text"
              className="inputContainer__input"
             
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />
            <Action className="reply" type="REPLY" handleClick={onAddComment} />
            <Action
              className="replyCancel"
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
                if (!(comment.items && comment.items.length === 0)) {
                  setExpand(false);
                }
              }}
            />
          </div>
        )}

        {comment.items && comment.items.length > 0 && (
          comment.items.map((cmnt) => (
            <Comment
              key={cmnt.id}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
              comment={cmnt}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Comment;
