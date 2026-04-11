__d(
  "WAWebSubscriptionFeatureFlagActions",
  ["WAWebFeatureFlagCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(e);
      return (t == null ? void 0 : t.enabled) === !0;
    }
    l.isSubscriptionFeatureFlagEnabled = e;
  },
  98,
);
