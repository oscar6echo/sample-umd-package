const base64Encode = (string) => {
  return Buffer.from(string, 'binary').toString('base64');
};

export default base64Encode;
