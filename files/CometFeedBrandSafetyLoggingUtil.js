__d(
  "CometFeedBrandSafetyLoggingUtil",
  ["CometFeedUnitStatusTrackingUtils", "FBLogger", "NetworkStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (e == null || t == null)
        return (
          a &&
            r("FBLogger")("comet_feed_impression_null_brs_field").warn(
              "Unable to get brs data for position %s. Debug: isAd: %s, feedUnitStatusList: %s, brsRegistry: %s",
              n,
              a,
              JSON.stringify(e ? e() : null),
              JSON.stringify(t ? t() : null),
            ),
          null
        );
      var i = e(),
        l = o(
          "CometFeedUnitStatusTrackingUtils",
        ).getFeedUnitsWithOriginalPosition(
          i,
          o("CometFeedUnitStatusTrackingUtils").isPossiblyVisible,
        ),
        d = l.findIndex(function (e) {
          return e.position === n;
        });
      if (!s(l, d))
        return (
          a &&
            r("FBLogger")(
              "comet_feed_impression_null_brs_field_unsponsored",
            ).warn(
              "Impression at nonErrorFeedUnit index %s was determined to be non sponsored. Debug: storyPosition: %s, isAd: %s, nonErrorFeedUnits: %s, feedUnitStatusList: %s, brsRegistry: %s",
              d,
              n,
              a,
              JSON.stringify(l),
              JSON.stringify(e()),
              JSON.stringify(t()),
            ),
          null
        );
      var p = t(),
        _ = u(l, p, d - 1),
        f = u(l, p, d + 1),
        g = c(l, p, d);
      return {
        brs_filter_setting: g,
        feed_size: l.length.toString(),
        feed_state: m(p),
        unit_after: f,
        unit_before: _,
      };
    }
    function s(e, t) {
      var n;
      return ((n = e[t]) == null ? void 0 : n.category) === "SPONSORED";
    }
    function u(e, t, n) {
      var r,
        o = d(e, t, n);
      return (
        o && {
          brs_content_label:
            (r = o.brsContentLabel) == null ? void 0 : r.toString(),
          organic_tracking: o.tracking,
          unit_type: o.unitType,
        }
      );
    }
    function c(e, t, n) {
      var r,
        o = d(e, t, n);
      return o == null || (r = o.brsFilterSetting) == null
        ? void 0
        : r.toString();
    }
    function d(e, t, n) {
      var o = e[n];
      if (o == null) return null;
      var a = o.key,
        i = t.feedUnitRegistry[a];
      return (
        i == null && o.status === "rendered"
          ? r("FBLogger")("comet_feed_unit_brand_safety_null_brs_info").warn(
              "Unable to find a CometFeedUnitBrandSafetyInfo for position %s and deduplicationKey %s. feedUnitStatusList: %s. brsRegistry: %s",
              n,
              o.key,
              JSON.stringify(e),
              JSON.stringify(Object.keys(t.feedUnitRegistry)),
            )
          : o.status === "error" &&
            r("FBLogger")("comet_feed_unit_brand_safety_error_status").mustfix(
              "CometFeedUnitStatus is error for position %s and deduplicationKey %s. feedUnitStatusList: %s. brsRegistry: %s",
              n,
              o.key,
              JSON.stringify(e),
              JSON.stringify(Object.keys(t.feedUnitRegistry)),
            ),
        i
      );
    }
    function m(e) {
      var t = e.feedStateInfoRef.current;
      if (t == null)
        return (
          r("FBLogger")("comet_feed_unit_brand_safety_feed_state").mustfix(
            "feedStateInfo was not initialized correctly",
          ),
          "feed_uninitialized_state_info"
        );
      var n = t.hasMore,
        o = t.isEOFError,
        a = t.isLoading,
        i = t.showEOFMessageAfterFeedStoppedLoading,
        l = r("NetworkStatus").isOnline();
      return o
        ? l
          ? "feed_eof_error_while_online"
          : "feed_eof_error_while_offline"
        : i
          ? l
            ? "feed_eof_no_more_stories_while_online"
            : "feed_eof_no_more_stories_while_offline"
          : n && a
            ? "feed_has_more_and_is_loading"
            : n
              ? "feed_has_more"
              : a
                ? "feed_is_loading"
                : "feed_unknown";
    }
    l.getBrandSafetyFieldForAdImpression = e;
  },
  98,
);
