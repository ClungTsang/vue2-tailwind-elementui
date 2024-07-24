import { get, post } from '@/utils/request.js'

// 登录
export const login = (params) => get('http://localhost:1101/validateLogon', params)

// 获取文章列表
export const getArticleList = (data) => post('http://localhost:1101//queryArticleInformationList', data)

// 获取文章
export const getArticle = (id) => get(`/queryArticleDetails?id=${id}`)

// 新增文章列表
export const addArticle = (data) => post('/addArticleInformation', data)

// mq服务
export const mqArticle = () => get('/mqMessageSending?str=xx')
