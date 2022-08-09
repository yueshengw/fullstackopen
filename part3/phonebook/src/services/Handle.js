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
    return req.then(response => {
        console.log('add',response)
        return response.data})
}

const update = (URL,personObject) => {
    console.log('test 7',personObject)
    let req = axios.put(`${URL}/${personObject.id}`,personObject)
    return req.then(response => {
        console.log('update',response.data)
    return response.data})
}

const deleteContact = (URL, personObject) => {
    console.log(personObject)
    let req = axios.delete(`${URL}/${personObject.id}`)
    return req.then(response => {
        console.log(response)
        return response.data})
}
export default { getAll, add, update, deleteContact };