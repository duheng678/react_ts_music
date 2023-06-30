import request from '@/service'

export function getBanners() {
  return request.get({
    url: '/banner',
    params: { type: 0 }
  })
}

export function getHotRecommend(limit = 30) {
  return request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit = 30) {
  return request.get({
    url: '/album/newest',
    params: {
      limit
    }
  })
}
