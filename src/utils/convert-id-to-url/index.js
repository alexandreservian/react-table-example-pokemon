const convertIdToUrl = (id) => {
    const idAsString = id.toString();
    const len = idAsString.length;
    const idUrl = len===1 ? `00${id}` : len===2 ? `0${id}` : idAsString;
    return `./assets/thumbnails/${idUrl}.png`;
}

export default convertIdToUrl;