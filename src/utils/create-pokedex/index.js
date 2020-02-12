import convertIdToUrl from '../convert-id-to-url'; 

const createPokedex = (pokedex = []) => {
    return pokedex.map(item => {
        const {id, name: {english}, type, base} = item;
        const thumbnail = convertIdToUrl(id);
        return {id, name: english,thumbnail, type, ...base}
    })
}

export default createPokedex;