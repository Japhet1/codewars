// return masked string
function maskify(cc: string): string {
  
    const splitData = cc.split('')
    const sliceDate = splitData.slice(-4)
    const maskedData = splitData.slice(0, -4).map(str => str.replace(str, '#'))

    // const replaceString = []

    // for ( i = 0; i < maskedData.length; i++) {
    //     maskedData[i].replace('', '#')
    // }

    // const maskedDataNew = maskedData.map(str => str.slice(-4).padStart(str.length, '#'));

    const result = [...maskedData, ...sliceDate].join('')

    console.log(result)

    return result

    // return splitData
    // return '#1234'
}

maskify("gunsteindotdev")