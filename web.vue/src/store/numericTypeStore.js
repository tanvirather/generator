export class NumericTypeStore {
  #apiClient;
  #url = "numericType"

  constructor(apiClient) {
    this.#apiClient = apiClient
  }

  async get(id) {
    let result = await this.#apiClient.get(`${this.#url}/?id=${id}`);
    // console.log(result);
    return result;
  }

  async post(model) {
    let result = await this.#apiClient.post(this.#url, model);
    // console.log(result);
    return result;
  }

  async put(model) {
    let result = await this.#apiClient.put(this.#url, model);
    // console.log(result);
    return result;
  }

}
