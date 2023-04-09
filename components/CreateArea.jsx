import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={props.onChange}
          value={props.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={props.onChange}
        value={props.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
