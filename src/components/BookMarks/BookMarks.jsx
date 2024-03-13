
import PropTypes from 'prop-types';
const BookMarks = ({bookMarks}) => {
    const {title} = bookMarks;
    return (
        <div>
            <h1>BookMarks : </h1>
            <div>
                {
                    bookMarks.map(book => <div>book</div> )
                }
            </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks : PropTypes.object
  };
export default BookMarks;