export const ApiEndPoints = {
  topStories: () =>
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`,
  getItem: (item: string | number) =>
    `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`,
  askStories: () =>
    `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`,
  showStories: () =>
    `https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty`,
  newStories: () =>
    `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`,
  jobStories: () =>
    `https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`,
  getUser: (user: string) =>
    `https://hacker-news.firebaseio.com/v0/user/${user}.json?print=pretty`,
};
