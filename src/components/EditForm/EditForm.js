import React from 'react';

const EditForm = (props) => {
    return (
       <form className="w-75 mx-auto">
           <div className="form-group">
               <label htmlFor="exampleFormControlSelect1">Page select</label>
               <select onChange={props.handleSelect} className="form-control" value={props.selected}>
                   <option>home</option>
                   <option>about</option>
                   <option>contacts</option>
                   <option>team</option>
               </select>
               <label>Title</label>
               <input className="form-control" placeholder="Page title" onChange={props.handleTitleChange} value={props.title} />
               <label>Content</label>
               <textarea className="form-control" placeholder="Page content" onChange={props.handleContentChange} value={props.content} />
               <button onClick={props.handleClick} className="btn btn-info my-2">Save</button>
           </div>
       </form>
    );
};

export default EditForm;