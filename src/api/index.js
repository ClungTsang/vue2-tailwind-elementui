import { get } from '@/utils/request.js'
export const login = (params) => get('/validateLogon', params)
