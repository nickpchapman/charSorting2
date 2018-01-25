const helpers = {
  sortString: string => {
    return string
      .split('')
      .sort()
      .reverse()
      .join('')
  }
};

module.exports = helpers;