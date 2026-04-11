__d(
  "WAWebNewsletterMessageReactionSenderListQueryJob",
  [
    "WAWebMexFetchNewsletterMessageReactionSenderListJob",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var r = (function () {
        var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebMexFetchNewsletterMessageReactionSenderListJob",
          ).mexFetchNewsletterMessageReactionSenderList(e, t);
        });
        return function () {
          return r.apply(this, arguments);
        };
      })();
      return o("WAWebNewsletterRpcUtils").runWithBackoff(r);
    }
    l.getNewsletterMessageReactionSenderList = e;
  },
  98,
);
