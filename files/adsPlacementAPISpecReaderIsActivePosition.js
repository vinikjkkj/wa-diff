__d(
  "adsPlacementAPISpecReaderIsActivePosition",
  [
    "invariant",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIOculusPosition",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "AdsPlacementAPISpecReaderUtilsShared",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActiveInstagramPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "objectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "audience_network",
        ) &&
        !!e.audience_network_positions &&
        e.audience_network_positions.includes(t)
      );
    }
    function u(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, "oculus") &&
        !!e.oculus_positions &&
        e.oculus_positions.includes(t)
      );
    }
    function c(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, "threads") &&
        !!e.threads_positions &&
        e.threads_positions.includes(t)
      );
    }
    function d(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "whatsapp",
        ) &&
        !!e.whatsapp_positions &&
        e.whatsapp_positions.includes(t)
      );
    }
    function m(e, t, n) {}
    function p(e, t) {
      return r("objectKeys")(e).find(function (n) {
        return e[n] === t;
      });
    }
    function _(t, n, a) {
      if (!r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(t, n))
        return !1;
      var i, l, s;
      switch (n) {
        case "audience_network":
          return (
            (i = e),
            (l = r("AdsAPIAudienceNetworkPosition")),
            (s = p(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "facebook":
          return (
            (i = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")),
            (l = r("AdsAPIFacebookPosition")),
            (s = p(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "instagram":
          return (
            (i = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")),
            (l = r("AdsAPIInstagramPosition")),
            (s = p(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "messenger":
          return (
            (i = o(
              "AdsPlacementAPISpecReaderUtilsShared",
            ).isActiveMessengerPosition),
            (l = r("AdsAPIMessengerPosition")),
            (s = p(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "whatsapp":
          return (
            (i = d),
            (l = r("AdsAPIWhatsAppPosition")),
            (s = p(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "oculus":
          return (
            (i = u),
            (l = r("AdsAPIOculusPosition")),
            (s = p(l, a)),
            s != null && i(t, l[s])
          );
        case "threads":
          return (
            (i = c),
            (l = r("AdsAPIThreadsPosition")),
            (s = p(l, a)),
            s != null && i(t, l[s])
          );
      }
      return !1;
    }
    l.default = _;
  },
  98,
);
