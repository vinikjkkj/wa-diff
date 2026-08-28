__d(
  "adsPostInteractionUtils",
  ["AdsAPIObjectives", "AdsODAXConversionChannelsUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === void 0 && (e = !1);
      var t = r("gkx")("9886") || r("gkx")("9955"),
        n = r("qex")._("1564") === !0;
      return e
        ? r("qex")._("2306") === !0 || r("qex")._("2396") === !0 || t || n
        : r("qex")._("2307") === !0 || r("qex")._("2397") === !0 || t || n;
    }
    function s(t, n, a, i) {
      return (
        t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        a === void 0 && (a = null),
        i === void 0 && (i = null),
        r("qex")._("2338"),
        !(
          !e(t) ||
          n ||
          (i !== null && i !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) ||
          (a !== null &&
            !o(
              "AdsODAXConversionChannelsUtils",
            ).ON_YOUR_AD_PROMOTED_OBJECT_TYPES.includes(a))
        )
      );
    }
    ((l.getIsEnabledForPostInteractionContent = e),
      (l.shouldShowInteractionContents = s));
  },
  98,
);
