import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import en from "dayjs/locale/en";
import {MdTimer} from 'react-icons/md'
import {GiPositionMarker} from 'react-icons/gi'

const Card = ({ job, addKeyword }) => {
    dayjs.extend(relativeTime);
    dayjs.locale(en);
    const date = dayjs(job.posted_on).fromNow();
    return (
        <div className='card'>
            <div className="left">
            <img className="company_logo" src={ job.company_logo } />
            <div className="add_info">
            <h3 className="company">{ job.company }</h3>
            <span className="posted_on">{ date }</span>
            </div>
            </div>
           <div className="info">
             <h3 className="position"> { job.position } </h3>
             <div className="job_type">
          <div className="with_icon"> <MdTimer/> <span className="timing">{ job.timing }</span> </div>
        <div className="with_icon">   <GiPositionMarker/> <span className="location">   { job.location }</span> </div>
            </div>
            <div className="keywords_container">  {job.keywords?.map((keyword, index)=> <div key={index} onClick={() => addKeyword(keyword)} className="keyword">  {keyword} </div>)}  </div>
        </div>
        </div>
    )
};

export default Card