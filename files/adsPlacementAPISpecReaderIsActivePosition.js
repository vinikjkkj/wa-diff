__d(
  "adsPlacementAPISpecReaderIsActivePosition",
  [
    "invariant",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIOculusPosition",
    "AdsAPIStreamingServicesPosition",
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
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "streaming_services",
        ) &&
        !!e.streaming_services_positions &&
        e.streaming_services_positions.includes(t)
      );
    }
    function c(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, "oculus") &&
        !!e.oculus_positions &&
        e.oculus_positions.includes(t)
      );
    }
    function d(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, "threads") &&
        !!e.threads_positions &&
        e.threads_positions.includes(t)
      );
    }
    function m(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "whatsapp",
        ) &&
        !!e.whatsapp_positions &&
        e.whatsapp_positions.includes(t)
      );
    }
    function p(e, t, n) {}
    function _(e, t) {
      return r("objectKeys")(e).find(function (n) {
        return e[n] === t;
      });
    }
    function f(t, n, a) {
      if (!r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(t, n))
        return !1;
      var i, l, s;
      switch (n) {
        case "audience_network":
          return (
            (i = e),
            (l = r("AdsAPIAudienceNetworkPosition")),
            (s = _(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "facebook":
          return (
            (i = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")),
            (l = r("AdsAPIFacebookPosition")),
            (s = _(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "instagram":
          return (
            (i = r("adsPlacementAPISpecReaderIsActiveInstagramPosition")),
            (l = r("AdsAPIInstagramPosition")),
            (s = _(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "messenger":
          return (
            (i = o(
              "AdsPlacementAPISpecReaderUtilsShared",
            ).isActiveMessengerPosition),
            (l = r("AdsAPIMessengerPosition")),
            (s = _(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "whatsapp":
          return (
            (i = m),
            (l = r("AdsAPIWhatsAppPosition")),
            (s = _(l, a)),
            s != null && !!i && i(t, l[s])
          );
        case "oculus":
          return (
            (i = c),
            (l = r("AdsAPIOculusPosition")),
            (s = _(l, a)),
            s != null && i(t, l[s])
          );
        case "threads":
          return (
            (i = d),
            (l = r("AdsAPIThreadsPosition")),
            (s = _(l, a)),
            s != null && i(t, l[s])
          );
        case "streaming_services":
          return (
            (i = u),
            (l = r("AdsAPIStreamingServicesPosition")),
            (s = _(l, a)),
            s != null && i(t, l[s])
          );
      }
      return !1;
    }
    l.default = f;
  },
  98,
);
