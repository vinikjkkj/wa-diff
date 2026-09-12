__d(
  "WAWebBizBroadcastProListUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e != null;
    }
    function l(t) {
      return t.map(function (t) {
        return e(t.customAudienceFbid) && t.recipientCount === 0
          ? babelHelpers.extends({}, t, { recipientCount: null })
          : t;
      });
    }
    ((i.isBizBroadcastProList = e), (i.withUnknownProCounts = l));
  },
  66,
);
