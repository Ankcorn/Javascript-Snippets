const fs = require('fs-extra')
const Promise = require('bluebird')

function copyAll(filesArray, output_path) {
    return new Promise((resolve, reject) => {

        let initialFileSizeArray = filesArray.map(path => {
            return {
                path: path,
                name: getName(path),
                sizeBefore: fs.statSync(path)
            }
        })
        let count = 0
        let output = []

        initialFileSizeArray.forEach((file) => {
            fs.copy(before, output_path).then(() => {
                file['sizeAfter'] = fs.statSync(output_path + before)
                output.push(file)
                if (output.length === filesArray.length) {
                    resolve(output)
                }
            }).catch((err) => { 
                reject(err)
            })
        })
    })
}

function getName(str) {
    return str.split('\\').pop().split('/').pop();
}