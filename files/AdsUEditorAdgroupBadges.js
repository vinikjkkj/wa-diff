__d(
  "AdsUEditorAdgroupBadges",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsClientAdAssetFeedSpecFields",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null
        ? !1
        : ((n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.badge_sets) != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (t) {
              var n,
                o =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n[t];
              return t === "badge_sets"
                ? o
                : o instanceof Array
                  ? o.length === 0
                  : o instanceof Object && r("isEmptyObject")(o)
                    ? !0
                    : o == null;
            })
          : !1;
    }
    function s(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.badge_sets) != null
      );
    }
    function u(e) {
      return s(e)
        ? o("AdsAssetFeedUtils").removeFieldFromAssetFeedSpec(e, "badge_sets")
        : e;
    }
    function c(e, t) {
      if (!s(e)) return t;
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.badge_sets.get(e);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.badge_sets.set(n, t);
    }
    ((l.isAdgroupUsingOnlyBadgesAssetFeed = e),
      (l.removeBadgeSets = u),
      (l.restoreBadgeSets = c));
  },
  98,
);
