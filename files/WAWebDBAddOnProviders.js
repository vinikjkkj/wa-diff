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
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebDBPollVotesAddOnProvider").pollVotesAddOnProvider,
      o("WAWebDBKeepInChatAddOnProvider").keepInChatAddOnProvider,
      o("WAWebDBReactionsAddOnProvider").reactionsAddOnProvider,
      o("WAWebDBReactionsEncAddOnProvider").reactionsEncAddOnProvider,
      o("WAWebDBMessageEditAddOnProvider").messageEditAddOnProvider,
      o("WAWebDBPinInChatAddOnProvider").pinInChatAddOnProvider,
      o("WAWebDBCommentAddOnProvider").commentsAddOnProvider,
    ];
    function s(t) {
      var n;
      return (n = e.find(function (e) {
        return e.type === t;
      })) != null
        ? n
        : null;
    }
    function u(t) {
      return e.find(function (e) {
        return e.matches(t);
      });
    }
    function c(t) {
      return e.find(function (e) {
        return e.matchesFutureproof(t);
      });
    }
    ((l.addOnProviders = e),
      (l.getProviderForAddOnType = s),
      (l.getAddOnProviderForMsg = u),
      (l.getAddOnProviderForFutureproofMsg = c));
  },
  98,
);
