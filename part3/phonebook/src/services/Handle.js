import React from 'react'
import axios from 'axios'

const baseURL = 'https://pure-garden-08206.herokuapp.com/api/persons'
const getAll = () => {
    console.log('test 1a')
    let req = axios.get(baseURL)
    return req.then(
      (response) => {
        console.log(response.data)
        return response.data}
    )
}

const add = (personObject) => {
    let req = axios.post(baseURL,personObject)
    return req.then(response => {
        console.log('add',response)
        return response.data})
}

const update = (personObject) => {
    console.log('test 7',personObject)
    let req = axios.put(`${baseURL}/${personObject.id}`,personObject)
    return req.then(response => {
        console.log('update',response.data)
    return response.data})
}

const deleteContact = (personObject) => {
    console.log(personObject)
    let req = axios.delete(`${baseURL}/${personObject.id}`)
    return req.then(response => {
        console.log(response)
        return response.data})
}
export default { getAll, add, update, deleteContact };