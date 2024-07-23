import { get } from '@/utils/request.js'

// 获取话题
export const getTopicById = (params) => get('/topic', params)
// 登录
export const login = (params) => get('/validateLogon', params)
