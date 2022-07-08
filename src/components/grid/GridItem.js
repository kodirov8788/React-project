import "./GridItem.css"

const GridItem = (props) => {
    return (
        <div className="grid">
            <img src={props.image} alt="" />
            <h1>Salom, {props.text}</h1>

        </div>
    )

}

// export { GridItem }
export default GridItem;