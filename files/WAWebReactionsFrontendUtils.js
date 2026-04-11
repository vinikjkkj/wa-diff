__d(
  "WAWebReactionsFrontendUtils",
  ["WAWebReactionsCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.map(function (e) {
        return !!o(
          "WAWebReactionsCollection",
        ).ReactionsCollection.getSenderByMsgKey(e);
      });
    }
    l.hasReactionsInCollection = e;
  },
  98,
);
