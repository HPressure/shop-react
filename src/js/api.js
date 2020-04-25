export default class Api {
  static async requestTimeout(controller) {
    setTimeout(() => {
      controller.abort();
    }, 5000);
  }
  static async getData(path, query) {
    let abortController = new AbortController();
    await this.requestTimeout(abortController);
    return await fetch(`${path}${query}`)
      .then((data) => data.json())
      .then((data) => data)
      .catch((e) => 0);
  }
}
