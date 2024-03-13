
import PropTypes from 'prop-types';
const BookMarks = ({bookMarks}) => {
    return (
       <div className='h-auto p-5'>
         <div>
            <h1 className='text-center text-3xl font-bold'>BookMarks : {bookMarks.length} </h1>
            <div>
                {
                    bookMarks.map(book =>
                    <div key={book.id} className='w-[80%] m-auto bg-white rounded-lg p-3 my-3'>
                         <h1 className='text-xl font-bold'>{book.title} </h1>
                         </div>
)
}
            </div>
        </div>
       </div>
    );
};
BookMarks.propTypes = {
    bookMarks : PropTypes.array
  };
export default BookMarks;