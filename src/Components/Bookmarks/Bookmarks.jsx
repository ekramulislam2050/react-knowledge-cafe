 
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({clickedBlog}) => {
   
    return (
        <aside>
            <Bookmark clickedBlog={clickedBlog}></Bookmark>
        </aside>
    );
};
Bookmarks.propTypes={
    // Bookmarks:PropTypes.array.isRequired,
    clickedBlog:PropTypes.object.isRequired,
}
export default Bookmarks;