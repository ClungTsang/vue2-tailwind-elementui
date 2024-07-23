import { get } from '@/utils/request.js'

// 获取话题
export const getTopicById = (id) => get(`/topic/${id}`)
// 登录
export const login = (params) => get('/validateLogon', params)
