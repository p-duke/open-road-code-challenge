export const convertDate = (dateCreated) => {
  const postDate = new Date(dateCreated * 1000);
  const now = new Date();
  const timeDiff = Math.abs(now - postDate) / 36e5;
  const roundedDiff = Math.round(timeDiff);

  if (roundedDiff > 24) {
    return `${Math.round(roundedDiff / 24)} days ago`;
  }

  return `${roundedDiff} hours ago`;
};

export const convertScore = (score) => {
  const newScore = parseFloat(score * 0.001).toFixed(1);
  return `${newScore}k`;
}
