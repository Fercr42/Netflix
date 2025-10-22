class EnvServices {
  constructor() {}

  get ApiURL() {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  get ApiKey() {
    return process.env.NEXT_PUBLIC_API_KEY;
  }

  getApiInformation() {
    return {
      apiURL: this.ApiURL,
      apiKey: this.ApiKey,
    };
  }
}

export const envServices = new EnvServices();
