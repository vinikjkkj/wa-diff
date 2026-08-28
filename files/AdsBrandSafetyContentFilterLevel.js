__d(
  "AdsBrandSafetyContentFilterLevel",
  ["AdsBrandSafetyContentFilterLevelConstants", "flipObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        ((e = {}),
        (e[
          (c = o(
            "AdsBrandSafetyContentFilterLevelConstants",
          )).ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_RELAXED
        ] = c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_RELAXED),
        (e[c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_STANDARD] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STANDARD),
        (e[c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_STRICT] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STRICT),
        e),
      m =
        ((s = {}),
        (s[c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_RELAXED] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_RELAXED),
        (s[c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STANDARD] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STANDARD),
        (s[c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STRICT] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STRICT),
        s),
      p =
        ((u = {}),
        (u[c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_RELAXED] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_RELAXED),
        (u[c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STANDARD] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_STANDARD),
        (u[c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STRICT] =
          c.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.AN_STRICT),
        u),
      _ = r("flipObject")(m);
    function f(e) {
      return d[e];
    }
    var g = r("flipObject")(d);
    function h(e) {
      return g[e];
    }
    function y(e) {
      return m[e];
    }
    function C(e) {
      return p[e];
    }
    function b(e) {
      return _[e];
    }
    function v() {
      return o("AdsBrandSafetyContentFilterLevelConstants")
        .ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL.FACEBOOK_RELAXED;
    }
    function S() {
      return o("AdsBrandSafetyContentFilterLevelConstants")
        .ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL.AN_RELAXED;
    }
    var R = [
        c.ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL.FACEBOOK_RELAXED,
        c.ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL.FACEBOOK_STANDARD,
        c.ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL.FACEBOOK_STRICT,
      ],
      L = [
        c.ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL.AN_RELAXED,
        c.ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL.AN_STANDARD,
        c.ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL.AN_STRICT,
      ],
      E = [
        c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_RELAXED,
        c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STANDARD,
        c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_STRICT,
      ];
    ((l.getFBEquivalentOfANContentFilterLevel = f),
      (l.getANEquivalentOfFBContentFilterLevel = h),
      (l.getFBEquivalentOfFeedContentFilterLevel = y),
      (l.getANEquivalentOfFeedContentFilterLevel = C),
      (l.getFeedEquivalentOfFBContentFilterLevel = b),
      (l.getFBDefaultContextualContentFilterLevel = v),
      (l.getANDefaultContextualContentFilterLevel = S),
      (l.ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS = R),
      (l.ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVELS = L),
      (l.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVELS = E),
      (l.DEFAULT_ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL =
        c.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL.FEED_RELAXED));
  },
  98,
);
