__d(
  "AdsAccountLevelPlacementExclusionsUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return Array.isArray(e) ? [].concat(e) : e.toArray();
    }
    function s(t, n) {
      var r = e(t);
      return r.filter(function (e) {
        return !n.includes(e);
      });
    }
    function u(e) {
      var t,
        n,
        r =
          ((t = {}),
          (t.audience_network_classic = "classic"),
          (t.audience_network_rewarded_video = "rewarded_video"),
          t);
      return (n =
        e == null
          ? void 0
          : e
              .map(function (e) {
                return r[e] || null;
              })
              .filter(function (e) {
                return e != null;
              })) != null
        ? n
        : [];
    }
    function c(e) {
      var t,
        n,
        r =
          ((t = {}),
          (t.facebook_marketplace = "marketplace"),
          (t.facebook_right_hand_column = "right_hand_column"),
          t);
      return (n =
        e == null
          ? void 0
          : e
              .map(function (e) {
                return r[e];
              })
              .filter(function (e) {
                return e != null;
              })) != null
        ? n
        : [];
    }
    function d(e) {
      var t = new Map(),
        n = c(e);
      t.set("facebook", {
        excludedPositions: n,
        getPositions: function (t) {
          return t.facebook_positions;
        },
        positionsPath: "facebook_positions",
      });
      var r = u(e);
      return (
        t.set("audience_network", {
          excludedPositions: r,
          getPositions: function (t) {
            return t.audience_network_positions;
          },
          positionsPath: "audience_network_positions",
        }),
        t
      );
    }
    ((l.filterPositions = s),
      (l.getAudienceNetworkExclusions = u),
      (l.getFacebookExclusions = c),
      (l.getAccountLevelPlacementExclusionsPerPlatform = d));
  },
  98,
);
