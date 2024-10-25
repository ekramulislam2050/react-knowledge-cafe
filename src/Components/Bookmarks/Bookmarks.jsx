 
import PropTypes from 'prop-types';
const Bookmarks = ({blog}) => {
    // console.log(blog)
    const {reading_time}=blog
    return (
        <aside className="md:w-1/3">
            <h4>{reading_time}</h4>
        </aside>
    );
};
Bookmarks.propTypes={
    Bookmarks:PropTypes.array.isRequired,
    blog:PropTypes.object.isRequired,
}
export default Bookmarks;