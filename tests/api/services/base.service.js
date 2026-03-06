class BaseService {
  constructor(request) {
    this.request = request;
  }

  async get(url, headers = {}) {
    return await this.request.get(url, { headers });
  }

  async post(url, data = {}, headers = {}) {
    return await this.request.post(url, { data, headers });
  }

  async put(url, data = {}, headers = {}) {
    return await this.request.put(url, { data, headers });
  }

  async delete(url, headers = {}) {
    return await this.request.delete(url, { headers });
  }
}

export default BaseService;
