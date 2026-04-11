__d(
  "WAWebReactionFromHistorySyncMsg",
  [
    "WAWebReactionDataUtils",
    "WAWebReactionsParseWebMsgInfoReaction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebReactionsParseWebMsgInfoReaction")
            .parseWebMsgInfoReaction(e.webMsgInfo, e.parsedWebMsgInfo)
            .map(function (e) {
              return o("WAWebReactionDataUtils").reactionRowToReactionMsgData(
                o(
                  "WAWebReactionDataUtils",
                ).webMsgInfoReactionTypeToReactionsRow(e),
              );
            });
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
