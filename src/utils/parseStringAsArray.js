module.exports =  function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(techs => techs.trim())
}

// Vai quebrar a String sempre que encontrar uma ' , '
// Vai remover os espaços antes e depois da palavra