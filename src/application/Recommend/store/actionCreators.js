// 放不同 action 的地方
import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

// ACTION
export const getBannerList = () => {
  return async dispatch => {
    const data = await getBannerRequest()
    console.log(data)
    try {
      dispatch({
        type: actionTypes.CHANGE_BANNER,
        data: fromJS(data.banners),
      })
    } catch (e) {
      console.log('轮播图获取失败')
    }
  }
}
export const getRecommendList = () => {
  return async dispatch => {
    const data = await getRecommendListRequest()
    console.log('11111:' + data)
    try {
      dispatch({
        type: actionTypes.CHANGE_RECOMMEND_LIST,
        data: fromJS(data.result),
      })
      dispatch({
        type: actionTypes.CHANGE_ENTER_LOADING,
        data: false,
      })
    } catch (e) {
      console.log('推荐歌单数据获取失败')
    }
  }
}
