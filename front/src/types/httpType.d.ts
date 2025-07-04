export type HttpResponseType<T = any> = {
  code: number;
  message: string;
  data?: T;
};
