__d(
  "AdsCampaignPlacementsFieldsValueHelper",
  [
    "AdsAPITargetFields",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementRawSpecUtils",
    "enumObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = r("AdsAPITargetFields")).PUBLISHER_PLATFORMS] =
          s.EFFECTIVE_PUBLISHER_PLATFORMS),
        (e[s.FACEBOOK_POSITIONS] = s.EFFECTIVE_FACEBOOK_POSITIONS),
        (e[s.INSTAGRAM_POSITIONS] = s.EFFECTIVE_INSTAGRAM_POSITIONS),
        (e[s.MESSENGER_POSITIONS] = s.EFFECTIVE_MESSENGER_POSITIONS),
        (e[s.DEVICE_PLATFORMS] = s.EFFECTIVE_DEVICE_PLATFORMS),
        (e[s.AUDIENCE_NETWORK_POSITIONS] =
          s.EFFECTIVE_AUDIENCE_NETWORK_POSITIONS),
        (e[s.WHATSAPP_POSITIONS] = s.EFFECTIVE_WHATSAPP_POSITIONS),
        (e[s.OCULUS_POSITIONS] = s.EFFECTIVE_OCULUS_POSITIONS),
        (e[s.THREADS_POSITIONS] = s.EFFECTIVE_THREADS_POSITIONS),
        e),
      c = r("enumObjectKeys")(u);
    function d(e) {
      if (!(!e || !e.targeting)) {
        var t = e.targeting,
          n = o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(
            o(
              "AdsPlacementAPISpecReaderUtils",
            ).convertTargetingSpecToPlacementSpec(t),
          );
        c.forEach(function (e) {
          var r = u[e];
          (t[r] && !n && (t[e] = t[r]), delete t[r]);
        });
      }
    }
    function m(e) {
      if (!e || !e.targeting) return e;
      var t = e.targeting,
        n = o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(
          o(
            "AdsPlacementAPISpecReaderUtils",
          ).convertTargetingSpecToPlacementSpec(t),
        ),
        r = babelHelpers.extends({}, t);
      return (
        c.forEach(function (e) {
          var t = u[e];
          (r[t] && !n && (r[e] = r[t]), delete r[t]);
        }),
        babelHelpers.extends({}, e, { targeting: r })
      );
    }
    ((l.effectivePlacementsFieldMap = u),
      (l.placementMapperKeys = c),
      (l.fixPlacementsDestructive = d),
      (l.fixPlacementsDestructiveCopy = m));
  },
  98,
);
