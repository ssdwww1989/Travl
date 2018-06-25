export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 储存到本地 需要搭配try catch
    } catch (e) {}
  }
}
