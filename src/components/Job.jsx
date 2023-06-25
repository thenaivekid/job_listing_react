import Card from './Card';

const Job = ({ job, addKeyword }) => {
    return (
        <div className='job'>
            <Card job={job} addKeyword={addKeyword}/>
        </div>
    )
};

export default Job