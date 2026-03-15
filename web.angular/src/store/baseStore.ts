export class BaseStore {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  get(): Promise<any> {
    return Promise.resolve([]);
  }
}

