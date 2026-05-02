__d(
  "WAWebQuickPromotionForcePassRuleValidator",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = e.data.qpConfigForcePass,
        r;
      return (
        n === "true" ? (r = !0) : (r = !1),
        { result: !0, skipWaterfallLogging: !0, forcePass: r }
      );
    }
    i.forcePassRuleValidator = e;
  },
  66,
);
