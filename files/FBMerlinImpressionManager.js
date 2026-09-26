__d(
  "FBMerlinImpressionManager",
  ["MerlinImpressionManager", "MerlinUnifiedProtocolEventFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "fb_unknown",
      s = {},
      u = new Set([78, 202, 203, 204]),
      c = new Map([
        [78, "fb_search"],
        [0, "fb_newsfeed"],
        [26, "fb_xar_comments"],
        [193, "fb_non_personalized_following_feed"],
        [202, "fb_gysj_group_card"],
        [203, "fb_pymk_profile_card"],
        [204, "fb_pyml_page_card"],
      ]);
    function d(e) {
      return !!(e === 0 || e === 193 || m(e));
    }
    function m(e) {
      return e == null ? !1 : u.has(e);
    }
    function p(t, n, a, i, l) {
      var u = function (n) {
        var t = c.get(i);
        r("MerlinUnifiedProtocolEventFalcoEvent").log(function () {
          var r;
          return {
            element_visibility_absolute_ts: {
              min_visible_px: n.map(function (e) {
                return {
                  enter_ts: e.enter.toString(),
                  exit_ts: e.exit.toString(),
                };
              }),
            },
            entity_id: a,
            origin: t != null ? t : e,
            payload: {
              placeholder_payload: (r = JSON.stringify(l)) != null ? r : "{}",
            },
          };
        });
      };
      o("MerlinImpressionManager").logVisibilityTimestamps(t, n, a, s, u);
    }
    var _ = {
      isMerlinVPVOnlySources: m,
      logWithEnterAndExitTimestamps: p,
      merlinShouldLog: d,
    };
    l.default = _;
  },
  98,
);
