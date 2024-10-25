
import PropTypes from "prop-types"
const Bookmark = ({ clickedBlog, allOfData }) => {
   //   console.log(clickedBlog)
   //  console.log(allOfData)
   const { reading_time } = clickedBlog
   return (
      <div>


         <div className="py-5 mt-20 bg-slate-200 rounded-xl">
            <div className="text-center " >

               <h3 className="text-xl font-bold text-slate-500">Bookmarks :{reading_time}</h3>
            </div>
            {
               allOfData.map((data) => <div key={data.id} className="mx-5 my-6 text-center rounded-md bg-slate-50">
                  <h4 className="px-4 py-8 text-lg font-bold" >{data.title}</h4>
               </div>
               )
            }
         </div>

      </div>

   );
};
Bookmark.propTypes = {
   clickedBlog: PropTypes.object.isRequired,
   allOfData: PropTypes.array.isRequired
}
export default Bookmark;