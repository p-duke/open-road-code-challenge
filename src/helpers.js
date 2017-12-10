'use strict';

export const convertDate = (dateCreated) => {
  const postDate = new Date(dateCreated * 1000);
  const now = new Date();
  let timeDiff = Math.abs(now - postDate) / 36e5;
  let roundedDiff = Math.round(timeDiff);

  if (roundedDiff > 24) {
    return `${Math.round(roundedDiff / 24)} days ago`;
  }

  return `${roundedDiff} hours ago`;
};
