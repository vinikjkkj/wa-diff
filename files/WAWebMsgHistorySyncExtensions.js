__d(
  "WAWebMsgHistorySyncExtensions",
  ["WAWebParsePollNameHashHistory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        pollNameHashHistory: o(
          "WAWebParsePollNameHashHistory",
        ).parsePollNameHashHistoryFromHistorySync(e.pollAdditionalMetadata),
      };
    }
    function s(e) {
      var t = e.pollAdditionalMetadata;
      return babelHelpers.extends({}, e, {
        groupHistoryLastCountedMessageTimestamp: void 0,
        pollAdditionalMetadata:
          t == null
            ? t
            : babelHelpers.extends({}, t, { pollNameHashHistory: [] }),
      });
    }
    ((l.parseHistorySyncMsgExtensions = e),
      (l.omitPrimaryOnlyHistorySyncFields = s));
  },
  98,
);
