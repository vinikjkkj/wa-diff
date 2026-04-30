__d(
  "WAWebNewsletterStatusPostingUtils",
  ["WAWebNewsletterCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null ? !1 : e.iAmAdminOrOwner() && !e.isSuspendedOrTerminated;
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
