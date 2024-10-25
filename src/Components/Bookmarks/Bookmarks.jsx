 
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({clickedBlog,timeOfBlog}) => {
   
    return (
        <aside >
            <Bookmark 
            clickedBlog={clickedBlog}
             
             timeOfBlog={timeOfBlog}
            ></Bookmark>
           
        </aside>
    );
};
Bookmarks.propTypes={
    // Bookmarks:PropTypes.array.isRequired,
    clickedBlog:PropTypes.object.isRequired,
    timeOfBlog:PropTypes.object.isRequired,
    
}
export default Bookmarks;