 
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({clickedBlog,allOfData,timeOfBlog}) => {
   
    return (
        <aside >
            <Bookmark 
            clickedBlog={clickedBlog}
             allOfData={allOfData}
             timeOfBlog={timeOfBlog}
            ></Bookmark>
           
        </aside>
    );
};
Bookmarks.propTypes={
    // Bookmarks:PropTypes.array.isRequired,
    clickedBlog:PropTypes.object.isRequired,
    timeOfBlog:PropTypes.object.isRequired,
    allOfData: PropTypes.array.isRequired
}
export default Bookmarks;