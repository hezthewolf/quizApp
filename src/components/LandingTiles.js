import '../css/Landing.css'

function LandingTiles(props) {
    return (
        <div>
            <div className="whole-tiles">
                <div className="category-image">
                    <img src={props.imaging} />
                </div>
                <div className="category-label">
                    {props.tileText}
                </div>
            </div>
        </div>
    )
}


export default LandingTiles;