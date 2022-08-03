import React from 'react'
import axios from 'axios'

const getAll = (URL) => {
    let req = axios.get(URL)
    return req.then(
      (response) => {
        console.log(response.data)
        return response.data}
    )
}

const add = (URL,personObject) => {
    axios
        .post(URL,personObject)
        .then(response => response.data
    )
}

const update = () => {

}

export default { getAll, add, update };