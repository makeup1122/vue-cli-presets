import request from '@/utils/request'
export function getRedirectUrl() {
  const AppID = 'wx7780c57c0d007c6c'
  const state = 'c756fd3846573153091d45184d43a3f5'
  const redirectUrl = encodeURIComponent(window.location.protocol + '//' + window.location.hostname + '/callback')
  return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + AppID + '&redirect_uri=' + redirectUrl + '&response_type=code&scope=snsapi_userinfo&state=' + state + '&connect_redirect=1#wechat_redirect'
}
export function login(code) {
  return request({
    url: '/wx/server/oauth/login',
    method: 'GET',
    params: {
      code
    }
  })
}
export function jssdkconfig() {
  return request({
    url: '/wx/server/oauth/jssdkconfig',
    method: 'GET'
  })
}
export function info(token) {
  return request({
    url: '/wx/member/info',
    method: 'GET',
    params: {
      token
    }
  })
}
export function getSettings() {
  return request({
    url: '/wx/member/settings',
    method: 'GET'
  })
}
export function updateSettings(data) {
  return request({
    url: '/wx/member/settings',
    method: 'POST',
    data
  })
}
export function getVerification() {
  return request({
    url: '/wx/member/verification',
    method: 'GET'
  })
}
export function applyVerification(data) {
  return request({
    url: '/wx/member/verification',
    method: 'POST',
    data
  })
}
