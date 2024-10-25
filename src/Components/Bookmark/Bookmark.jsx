 
 import PropTypes from "prop-types"
 const Bookmark = ({clickedBlog}) => {
    //   console.log(clickedBlog)
    const {reading_time}=clickedBlog
    return (
        <div>
              <h4>{reading_time}</h4> 
        </div>
    );
 };
 Bookmark.propTypes={
    clickedBlog:PropTypes.object.isRequired,
 }
 export default Bookmark;