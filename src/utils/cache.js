export default {
  /**
   * 设置缓存
   * @param {string} key
   * @param {object} value
   * @param {timestamp} expire
   */
  set (key, value, expire = null) {
    key = this._getKey(key)
    const cache = {
      value,
      _expire: expire
    }
    try {
      localStorage.setItem(key, JSON.stringify(cache))
    } catch (e) {}
  },

  /**
   * 读取缓存
   * @param {string} key
   */
  get (key) {
    key = this._getKey(key)
    try {
      const storage = localStorage.getItem(key)
      const cache = storage && JSON.parse(storage)
      if (cache && new Date().getTime() < cache._expire) {
        return cache.value
      } else {
        return null
      }
    } catch (e) {
      return null
    }
  },

  /**
   * 删除缓存
   * @param {string} key
   */
  remove (key) {
    key = this._getKey(key)
    localStorage.removeItem(key)
  },

  /**
   * 获取缓存键值
   * @param {string} key
   */
  _getKey (key) {
    return '_cache:' + key
  }
}
