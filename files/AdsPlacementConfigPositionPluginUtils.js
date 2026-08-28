__d(
  "AdsPlacementConfigPositionPluginUtils",
  ["AdsAccountUtils", "AdsPlacementAdsAccountGKEvaluator", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var o = e.reduce(function (e, n) {
        if (e != null) return e;
        var o = n.account_capability,
          a = n.ad_account_gk,
          i = n.value;
        if (o == null && a == null) return i;
        var l = o != null && r("AdsAccountUtils").hasCapabilityFromList(t, o),
          s = a != null && r("AdsPlacementAdsAccountGKEvaluator")(a);
        return l || s ? i : null;
      }, null);
      return o != null ? o : n;
    }
    function s(e) {
      var t = !1;
      switch (e) {
        case "reels":
        case "stream":
        case "ig_search":
        case "profile_feed":
        case "explore":
        case "explore_home":
        case "story":
          t = !0;
          break;
        case "reels_overlay":
          t = r("gkx")("21836");
          break;
        case "profile_reels":
          t = r("gkx")("21837");
          break;
        case "threads_stream":
          t = r("gkx")("5403");
          break;
        default:
          break;
      }
      return t;
    }
    function u(e) {
      var t = [
        "explore",
        "explore_home",
        "reels",
        "stream",
        "story",
        "profile_feed",
      ];
      return t.includes(e);
    }
    ((l.getFirstEnabledConfigValue = e),
      (l.enableV2PlacementEligibilityCheck = s),
      (l.shouldLogPlacementEligibility = u));
  },
  98,
);
