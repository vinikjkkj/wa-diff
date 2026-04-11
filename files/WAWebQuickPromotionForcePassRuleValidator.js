__d(
  "WAWebQuickPromotionForcePassRuleValidator",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
      var e = t.data.qpConfigForcePass,
        r;
      return (
        e === "true" ? (r = !0) : (r = !1),
        { result: !0, skipWaterfallLogging: !0, forcePass: r }
      );
    };
    i.forcePassRuleValidator = e;
  },
  66,
);
