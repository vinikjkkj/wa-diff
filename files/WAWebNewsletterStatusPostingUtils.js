__d(
  "WAWebNewsletterStatusPostingUtils",
  ["WAWebNewsletterCollection", "WAWebNewsletterMembershipUtil"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null
        ? !1
        : o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e) &&
            !e.isSuspendedOrTerminated;
    }
    function s() {
      var t = r("WAWebNewsletterCollection").getModelsArray();
      return t.filter(function (t) {
        return e(t.newsletterMetadata);
      });
    }
    ((l.canPostToNewsletterStatus = e), (l.getStatusPostableNewsletters = s));
  },
  98,
);
