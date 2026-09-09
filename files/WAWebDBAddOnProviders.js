__d(
  "WAWebDBAddOnProviders",
  [
    "WAWebDBCommentAddOnProvider",
    "WAWebDBKeepInChatAddOnProvider",
    "WAWebDBMessageEditAddOnProvider",
    "WAWebDBPinInChatAddOnProvider",
    "WAWebDBPollVotesAddOnProvider",
    "WAWebDBReactionsAddOnProvider",
    "WAWebDBReactionsEncAddOnProvider",
    "cr:5281",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:5281")) == null ? void 0 : e.botMsgOrphanProvider,
      u = [
        o("WAWebDBPollVotesAddOnProvider").pollVotesAddOnProvider,
        o("WAWebDBKeepInChatAddOnProvider").keepInChatAddOnProvider,
        o("WAWebDBReactionsAddOnProvider").reactionsAddOnProvider,
        o("WAWebDBReactionsEncAddOnProvider").reactionsEncAddOnProvider,
        o("WAWebDBMessageEditAddOnProvider").messageEditAddOnProvider,
        o("WAWebDBPinInChatAddOnProvider").pinInChatAddOnProvider,
        o("WAWebDBCommentAddOnProvider").commentsAddOnProvider,
      ].concat(s != null ? [s] : []);
    function c(e) {
      var t;
      return (t = u.find(function (t) {
        return t.type === e;
      })) != null
        ? t
        : null;
    }
    function d(e) {
      return u.find(function (t) {
        return t.matches(e);
      });
    }
    function m(e) {
      return u.find(function (t) {
        return t.matchesFutureproof(e);
      });
    }
    ((l.addOnProviders = u),
      (l.getProviderForAddOnType = c),
      (l.getAddOnProviderForMsg = d),
      (l.getAddOnProviderForFutureproofMsg = m));
  },
  98,
);
