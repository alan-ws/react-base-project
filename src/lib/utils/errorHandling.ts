export const handleError = (error: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
};

export const handleNetworkError = (error: RequestError): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
};
