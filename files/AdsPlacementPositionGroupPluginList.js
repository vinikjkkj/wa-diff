__d(
  "AdsPlacementPositionGroupPluginList",
  [
    "AdsPlacementChannelPositionGroupPlugin",
    "AdsPlacementConnectedTVPositionGroupPlugin",
    "AdsPlacementExternalDisplayPositionGroupPlugin",
    "AdsPlacementFeedPositionGroupPlugin",
    "AdsPlacementInContextPositionGroupPlugin",
    "AdsPlacementInStreamPositionGroupPlugin",
    "AdsPlacementMessagingPositionGroupPlugin",
    "AdsPlacementOculusPositionGroupPlugin",
    "AdsPlacementReelsOverlayPositionGroupPlugin",
    "AdsPlacementSearchPositionGroupPlugin",
    "AdsPlacementStoryPositionGroupPlugin",
    "immutable",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
      return r("immutable").OrderedSet([
        r("AdsPlacementFeedPositionGroupPlugin"),
        r("AdsPlacementStoryPositionGroupPlugin"),
        r("AdsPlacementInStreamPositionGroupPlugin"),
        r("AdsPlacementReelsOverlayPositionGroupPlugin"),
        r("AdsPlacementSearchPositionGroupPlugin"),
        r("AdsPlacementMessagingPositionGroupPlugin"),
        r("AdsPlacementChannelPositionGroupPlugin"),
        r("AdsPlacementInContextPositionGroupPlugin"),
        r("AdsPlacementExternalDisplayPositionGroupPlugin"),
        r("AdsPlacementOculusPositionGroupPlugin"),
        r("AdsPlacementConnectedTVPositionGroupPlugin"),
      ]);
    });
    function s(t) {
      var n = e();
      return t
        ? n.filter(function (e) {
            return e.isEnabled(t.capabilities);
          })
        : n;
    }
    function u(e, t) {
      var n = s(t).find(function (t) {
        return t.key === e;
      });
      return n.positions.filter(function (e) {
        return (
          e.isEnabled(t.capabilities, t.account) && !e.getIneligibilityReason(t)
        );
      });
    }
    function c(e, t) {
      return u(e, t).map(function (e) {
        return e.key;
      });
    }
    ((l._getPositionGroups = e),
      (l.getOrderedPositionGroups = s),
      (l.getEligiblePositionsFromPositionGroup = u),
      (l.getEligiblePositionKeysFromPositionGroup = c));
  },
  98,
);
