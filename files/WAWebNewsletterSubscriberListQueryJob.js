__d(
  "WAWebNewsletterSubscriberListQueryJob",
  ["WAWebMexFetchNewsletterFollowersJob", "WAWebNewsletterRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = async function () {
        return o(
          "WAWebMexFetchNewsletterFollowersJob",
        ).mexFetchNewsletterFollowers(e, t);
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(n);
    }
    l.getNewsletterSubscribers = e;
  },
  98,
);
