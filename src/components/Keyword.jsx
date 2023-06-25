import { FaTimes } from 'react-icons/fa'

const Keyword = ({ keyword, remove }) => {
    return (
        <div className="keyword">
            <div>{ keyword }<FaTimes style={{color: 'red', cursor: 'pointer' }} onClick={ () => remove(keyword)} /></div>
        </div>
    )
};

export default Keyword