__d(
  "AdsPlacementSoftOptOutValidatorsUtils",
  [
    "AdsPlacementSOOBundleGatingUtils",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActiveInstagramPosition",
    "adsPlacementAPISpecReaderIsActiveThreadsPosition",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, t);
      return i
        ? !0
        : n == null
          ? !1
          : !!n.facebook_positions &&
            n.facebook_positions.includes(t) &&
            o(
              "AdsPlacementSOOBundleGatingUtils",
            ).isAccountEligibleForSOOExpansionBundle(a);
    }
    function s(e, t, n, a) {
      var i = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(e, t);
      return i
        ? !0
        : n == null
          ? !1
          : !!n.instagram_positions &&
            n.instagram_positions.includes(t) &&
            o(
              "AdsPlacementSOOBundleGatingUtils",
            ).isAccountEligibleForSOOExpansionBundle(a);
    }
    function u(e, t, n, a) {
      var i = r("adsPlacementAPISpecReaderIsActiveThreadsPosition")(e, t);
      return i
        ? !0
        : n == null
          ? !1
          : !!n.threads_positions &&
            n.threads_positions.includes(t) &&
            o(
              "AdsPlacementSOOBundleGatingUtils",
            ).isAccountEligibleForSOOExpansionBundle(a);
    }
    ((l.isFacebookPositionActiveInSpecOrSoftOptOut = e),
      (l.isInstagramPositionActiveInSpecOrSoftOptOut = s),
      (l.isThreadsPositionActiveInSpecOrSoftOptOut = u));
  },
  98,
);
