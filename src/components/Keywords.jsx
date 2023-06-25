import Keyword from "./Keyword";

const Keywords = ({ keywords, remove, clear }) => {
    console.log('xxx', keywords);
    return (
        <>
            <div className="keywords">
                <div className="keyword_container">
                    {keywords.map((keyword, index) => (
                        <Keyword key={index} keyword={keyword} remove={remove}/>
                    ))}
                </div>
                {(keywords.length > 0) && <div className="clear" onClick={clear}>Clear</div>}
            </div>
        </>
    )
};

export default Keywords
