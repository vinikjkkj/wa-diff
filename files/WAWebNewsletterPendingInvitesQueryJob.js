__d(
  "WAWebNewsletterPendingInvitesQueryJob",
  [
    "WAWebMexFetchNewsletterPendingInvitesJob",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o(
            "WAWebMexFetchNewsletterPendingInvitesJob",
          ).mexFetchNewsletterPendingInvites(e);
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
      return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
    }
    l.getNewsletterPendingInvites = e;
  },
  98,
);
