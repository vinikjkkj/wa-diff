__d(
  "AdsTargetingAsSignalUtils",
  [
    "AdsRegulatedCategory",
    "LoadObjectMap",
    "SignalsCapabilityDataProvider",
    "emptyFunction",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null && (e & (1 << t)) !== 0;
    }
    function s(e, t) {
      return e | (1 << t);
    }
    function u(e, t) {
      return e & ~(1 << t);
    }
    function c(e) {
      return e == null
        ? !1
        : e.some(function (e) {
            return e !== r("AdsRegulatedCategory").NONE;
          });
    }
    function d(e, t) {
      var n,
        r = (n = e.get(t)) == null ? void 0 : n.special_ad_categories;
      return Array.isArray(r) ? r : r == null ? void 0 : r.toArray();
    }
    function m(e) {
      var t = [],
        n = [];
      return (
        e != null &&
          e.length > 0 &&
          e.forEach(function (e) {
            var o,
              a = (o = e.promoted_object) == null ? void 0 : o.pixel_id;
            a != null &&
              (t.push(
                r("promiseStoreGet")(
                  r("SignalsCapabilityDataProvider").toFluxStore(),
                  function () {
                    return r("SignalsCapabilityDataProvider")().get(a);
                  },
                ),
              ),
              n.push(a));
          }),
        [n, t]
      );
    }
    function p(e, t) {
      for (var n = new Map([]), o = 0; o < e.length; o++) n.set(e[o], t[o]);
      return r("LoadObjectMap")
        .create(r("emptyFunction"))
        .setMultipleValueOrError(n);
    }
    ((l.isTargetingAsSignalBitSetForType = e),
      (l.setTargetingAsSignalBitForType = s),
      (l.unsetTargetingAsSignalBitForType = u),
      (l.isCampaignGroupRegulated = c),
      (l.getSpecialCategories = d),
      (l.getPixelIDsAndCapabilityPromises = m),
      (l.getPixelIDToCapabilitiesMap = p));
  },
  98,
);
