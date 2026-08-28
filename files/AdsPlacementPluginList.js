__d(
  "AdsPlacementPluginList",
  [
    "AdsPlacementsAudienceNetworkPlatformPlugin",
    "AdsPlacementsFacebookPlatformPlugin",
    "AdsPlacementsInstagramPlatformPlugin",
    "AdsPlacementsMessengerPlatformPlugin",
    "AdsPlacementsOculusPlatformPlugin",
    "AdsPlacementsStreamingServicesPlatformPlugin",
    "AdsPlacementsThreadsPlatformPlugin",
    "AdsPlacementsWhatsAppPlatformPlugin",
    "immutable",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
      return r("immutable").OrderedSet([
        n("AdsPlacementsFacebookPlatformPlugin"),
        n("AdsPlacementsInstagramPlatformPlugin"),
        n("AdsPlacementsAudienceNetworkPlatformPlugin"),
        n("AdsPlacementsMessengerPlatformPlugin"),
        n("AdsPlacementsWhatsAppPlatformPlugin"),
        n("AdsPlacementsOculusPlatformPlugin"),
        n("AdsPlacementsThreadsPlatformPlugin"),
        n("AdsPlacementsStreamingServicesPlatformPlugin"),
      ]);
    });
    function s(t) {
      return e().filter(function (e) {
        return e.isEnabled(t == null ? void 0 : t.capabilities);
      });
    }
    function u(e) {
      return s(e)
        .flatMap(function (e) {
          return e.positions;
        })
        .filter(function (t) {
          return t.isEnabled(e.capabilities, e.account);
        })
        .toSet();
    }
    function c() {
      return e().toSet();
    }
    function d() {
      return e().flatMap(function (e) {
        return r("immutable").Set(e.positions);
      });
    }
    ((l.getOrderedPlatforms = s),
      (l.getPositions = u),
      (l.getAllPlatforms = c),
      (l.getAllPositions = d));
  },
  98,
);
