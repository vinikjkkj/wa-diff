__d(
  "AdsBrandSafetyContentFilterLevelConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "FACEBOOK_RELAXED",
        "FACEBOOK_STANDARD",
        "FACEBOOK_STRICT",
      ]),
      l = n("$InternalEnum").Mirrored([
        "AN_RELAXED",
        "AN_STANDARD",
        "AN_STRICT",
      ]),
      s = n("$InternalEnum").Mirrored([
        "FEED_RELAXED",
        "FEED_STANDARD",
        "FEED_STRICT",
      ]),
      u = {
        FACEBOOK_RELAXED: "FACEBOOK_RELAXED",
        FACEBOOK_STANDARD: "FACEBOOK_STANDARD",
        FACEBOOK_STRICT: "FACEBOOK_STRICT",
      },
      c = {
        AN_RELAXED: "AN_RELAXED",
        AN_STANDARD: "AN_STANDARD",
        AN_STRICT: "AN_STRICT",
      },
      d = {
        FEED_RELAXED: "FEED_RELAXED",
        FEED_STANDARD: "FEED_STANDARD",
        FEED_STRICT: "FEED_STRICT",
      },
      m = babelHelpers.extends(
        {
          UNKNOWN: "UNKNOWN",
          UNINITIALIZED: "UNINITIALIZED",
          FEED_SELECT: "FEED_SELECT",
        },
        u,
        c,
        d,
        { FEED_NESTED_DNM: "FEED_NESTED_DNM", FEED_DNM: "FEED_DNM" },
      );
    ((i.AdsBrandSafetyContentFilterFacebookLevel = e),
      (i.AdsBrandSafetyContentFilterANLevel = l),
      (i.AdsBrandSafetyInventoryFilterFeedLevel = s),
      (i.ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL = u),
      (i.ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL = c),
      (i.ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL = d),
      (i.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL = m));
  },
  66,
);
