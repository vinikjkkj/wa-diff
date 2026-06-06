__d(
  "WAWebNewsletterPendingInvitesQueryJob",
  ["WAWebMexFetchNewsletterPendingInvitesJob", "WAWebNewsletterRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = async function () {
        return o(
          "WAWebMexFetchNewsletterPendingInvitesJob",
        ).mexFetchNewsletterPendingInvites(e);
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
    }
    l.getNewsletterPendingInvites = e;
  },
  98,
);
