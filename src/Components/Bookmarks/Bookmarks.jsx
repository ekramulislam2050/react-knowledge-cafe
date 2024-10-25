 
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({clickedBlog,allOfData}) => {
   
    return (
        <aside >
            <Bookmark 
            clickedBlog={clickedBlog}
             allOfData={allOfData}
            ></Bookmark>
           
        </aside>
    );
};
Bookmarks.propTypes={
    // Bookmarks:PropTypes.array.isRequired,
    clickedBlog:PropTypes.object.isRequired,
}
export default Bookmarks;