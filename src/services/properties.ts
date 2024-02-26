import axios, { AxiosResponse } from 'axios'
import { AddPropertyForm, Property } from '../types'

export const baseUrl = 'http://localhost:4000';

export const getProperties = (): Promise<AxiosResponse<Property[]>> => {
    return axios.get(`${baseUrl}/api/v1/properties`)
}

export const postProperty = (formData: AddPropertyForm): Promise<AxiosResponse<Property[]>> => {
    console.log('posting')
    return axios.post(`${baseUrl}/api/v1/properties`, formData, {
        headers: {
              'Content-Type': 'multipart/form-data'
            }
        }
    )
}