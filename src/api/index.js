import { get, post } from '@/utils/request.js'

// 登录
export const login = (params) => get('/validateLogon', params)

// 获取文章列表
export const getArticleList = (data) => post('/queryArticleInformationList', data)

// 新增文章列表
export const addArticle = (data) => post('/addArticleInformation', data)

// mq服务
export const mqArticle = () => get('/mqMessageSending?str=xx')
