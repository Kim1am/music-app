import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request'
import {
  CHANGE_SINGER_LIST,
  CHANGE_PAGE_COUNT,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_ENTER_LOADING,
} from './constants'
import { fromJS } from 'immutable'
const changeSingerList = data => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data),
})

export const changePageCount = data => ({
  type: CHANGE_PAGE_COUNT,
  data,
})

//进场loading
export const changeEnterLoading = data => ({
  type: CHANGE_ENTER_LOADING,
  data,
})

//滑动最底部loading
export const changePullUpLoading = data => ({
  type: CHANGE_PULLUP_LOADING,
  data,
})

//顶部下拉刷新loading
export const changePullDownLoading = data => ({
  type: CHANGE_PULLDOWN_LOADING,
  data,
})
// ACTION
export const getHotSingerList = () => {
  return async dispatch => {
    const res = await getHotSingerListRequest(0)
    const data = res.artists
    try {
      dispatch(changeSingerList(data))
      dispatch(changeEnterLoading(false))
      dispatch(changePullDownLoading(false))
    } catch (e) {
      console.log('热门歌手数据获取失败')
    }
  }
}
//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return async (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    const res = await getHotSingerListRequest(pageCount)
    try {
      const data = [...singerList, ...res.artists]
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))
    } catch (e) {
      console.log('热门歌手数据获取失败')
    }
  }
}

//第一次加载对应类别的歌手
export const getSingerList = (category, alpha) => {
  return async (dispatch, getState) => {
    const res = await getSingerListRequest(category, alpha, 0)
    try {
      const data = res.artists
      dispatch(changeSingerList(data))
      dispatch(changeEnterLoading(false))
      dispatch(changePullDownLoading(false))
    } catch (e) {
      console.log('歌手数据获取失败')
    }
  }
}

//加载更多歌手
export const refreshMoreSingerList = (category, alpha) => {
  return async (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    const res = await getSingerListRequest(category, alpha, 0)
    try {
      const data = [...singerList, ...res.artists]
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))
    } catch (e) {
      console.log('歌手数据获取失败')
    }
  }
}
