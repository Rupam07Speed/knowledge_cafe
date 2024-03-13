
import PropTypes from 'prop-types';
const TimeCount = ({timeCount}) => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-[#6047EC]'>Spent time on read : {timeCount} min</h1>
        </div>
    );
};
TimeCount.propTypes = {
    timeCount : PropTypes.number
  };
export default TimeCount;