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
    let req = axios.post(URL,personObject)
    return req.then(response => response.data)
}

const update = () => {

}

const deleteContact = (URL, personObject) => {
    console.log(personObject)
    let req = axios.delete(`${URL}/${personObject.id}`)
    return req.then(response => {
        console.log(response)
        return response.data})
}
export default { getAll, add, update, deleteContact };