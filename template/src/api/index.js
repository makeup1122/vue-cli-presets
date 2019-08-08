import request from '@/utils/request'
export function fetchList(query) {
  return request({
    url: '/admin/config/index',
    method: 'GET',
    params: query
  })
}
export function fetchOne(id) {
  return request({
    url: '/admin/config/detail',
    method: 'GET',
    params: { id }
  })
}
// export function updateOne(data) {
//   return request({
//     url: '/admin/config/update',
//     method: 'post',
//     data
//   })
// }
// export function createOne(data) {
//   return request({
//     url: '/admin/config/create',
//     method: 'POST',
//     data
//   })
// }
// export function deleteOne(id) {
//   return request({
//     url: '/admin/config/delete',
//     method: 'DELETE',
//     params: {
//       id: id
//     }
//   })
// }
