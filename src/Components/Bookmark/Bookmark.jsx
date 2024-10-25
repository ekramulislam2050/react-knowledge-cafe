
import PropTypes from "prop-types"
const Bookmark = ({ clickedBlog, allOfData, timeOfBlog }) => {
   //   console.log(clickedBlog)
   //  console.log(allOfData)
   // console.log(timeOfBlog)
   const { id } = clickedBlog
   return (
      <div>
           <div className="mt-20 text-center bg-purple-300 rounded-lg">
              <h5 className="py-5 text-xl font-bold">Reading Time : {timeOfBlog} min</h5>
           </div>

         <div className="py-5 mt-4 bg-slate-200 rounded-xl">
            <div className="text-center " >

               <h3 className="text-xl font-bold text-slate-500">Bookmark Blog :{id}</h3>
            </div>
            {
               allOfData.map((data) => <div key={data.id} className="mx-5 my-6 text-center rounded-md bg-slate-50">
                  <h4 className="px-4 py-6 text-lg font-bold" >{data.title}</h4>
               </div>
               )
            }
         </div>

      </div>

   );
};
Bookmark.propTypes = {
   clickedBlog: PropTypes.object.isRequired,
   timeOfBlog: PropTypes.object.isRequired,
   allOfData: PropTypes.array.isRequired
}
export default Bookmark;