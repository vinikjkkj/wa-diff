__d(
  "WAWebUserPrefsSubscription",
  ["$InternalEnum", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "NextSubscriptionQuery",
      "ShouldShowMetaVerifiedEntryPoint",
      "NextFetchSubscriptionEntryPointsTime",
      "MetaVerifiedEntryPointRedirectionUri",
    ]);
    function s() {
      var t = r("WAWebUserPrefsStore").getUser(e.NextSubscriptionQuery);
      return (t != null && parseInt(t, 10)) || 0;
    }
    function u(t) {
      r("WAWebUserPrefsStore").setUser(e.NextSubscriptionQuery, t);
    }
    function c() {
      var t = r("WAWebUserPrefsStore").getUser(
        e.ShouldShowMetaVerifiedEntryPoint,
      );
      return t == null ? null : t === !0;
    }
    function d(t) {
      r("WAWebUserPrefsStore").setUser(e.ShouldShowMetaVerifiedEntryPoint, t);
    }
    function m() {
      var t = r("WAWebUserPrefsStore").getUser(
        e.NextFetchSubscriptionEntryPointsTime,
      );
      return (t != null && parseInt(t, 10)) || 0;
    }
    function p(t) {
      r("WAWebUserPrefsStore").setUser(
        e.NextFetchSubscriptionEntryPointsTime,
        t,
      );
    }
    function _() {
      var t = r("WAWebUserPrefsStore").getUser(
        e.MetaVerifiedEntryPointRedirectionUri,
      );
      return typeof t != "string" || t === "" ? null : t;
    }
    function f(t) {
      r("WAWebUserPrefsStore").setUser(
        e.MetaVerifiedEntryPointRedirectionUri,
        t,
      );
    }
    ((l.getNextSubscriptionQuery = s),
      (l.setNextSubscriptionQuery = u),
      (l.getShouldShowMetaVerifiedEntryPoint = c),
      (l.setShouldShowMetaVerifiedEntryPoint = d),
      (l.getNextFetchSubscriptionEntryPointsTime = m),
      (l.setNextFetchSubscriptionEntryPointsTime = p),
      (l.getMetaVerifiedEntryPointRedirectionUri = _),
      (l.setMetaVerifiedEntryPointRedirectionUri = f));
  },
  98,
);
