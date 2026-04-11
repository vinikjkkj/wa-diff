__d(
  "WAWebNewsletterSubscriberListQueryJob",
  [
    "WAWebMexFetchNewsletterFollowersJob",
    "WAWebMexFetchNewsletterSubscribersJob",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var r = (function () {
        var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterSubscriberMigrationEnabled()
            ? o(
                "WAWebMexFetchNewsletterFollowersJob",
              ).mexFetchNewsletterFollowers(e, t)
            : o(
                "WAWebMexFetchNewsletterSubscribersJob",
              ).mexFetchNewsletterSubscribers(e, t);
        });
        return function () {
          return r.apply(this, arguments);
        };
      })();
      return o("WAWebNewsletterRpcUtils").runWithBackoff(r);
    }
    l.getNewsletterSubscribers = e;
  },
  98,
);
