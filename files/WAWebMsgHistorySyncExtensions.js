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
      return t == null
        ? e
        : babelHelpers.extends({}, e, {
            pollAdditionalMetadata: babelHelpers.extends({}, t, {
              pollNameHashHistory: [],
            }),
          });
    }
    ((l.parseHistorySyncMsgExtensions = e),
      (l.omitPrimaryOnlyHistorySyncFields = s));
  },
  98,
);
