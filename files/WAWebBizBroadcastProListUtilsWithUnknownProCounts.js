__d(
  "WAWebBizBroadcastProListUtilsWithUnknownProCounts",
  ["WAWebBizBroadcastProListUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.map(function (e) {
        return o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(
          e.customAudienceFbid,
        ) && e.recipientCount === 0
          ? babelHelpers.extends({}, e, { recipientCount: null })
          : e;
      });
    }
    l.withUnknownProCounts = e;
  },
  98,
);
