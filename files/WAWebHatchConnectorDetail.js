__d(
  "WAWebHatchConnectorDetail",
  ["WAWebHatchConnectorsEligibility", "WAWebHatchFirstPartyConnectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        o("WAWebHatchConnectorsEligibility").isConnectedHatchCustomConnector(
          e,
          t,
        ) ||
        o("WAWebHatchFirstPartyConnectors").isHatchFirstPartyConnector(e.id) ||
        s(e.consent) ||
        e.description != null ||
        o("WAWebHatchConnectorsEligibility").isHatchPermissionsOnlyConnector(e)
      );
    }
    function s(e) {
      var t, n;
      return (
        e != null &&
        (e.bullets.length > 0 ||
          e.footerParagraphs.length > 0 ||
          ((t = (n = e.calloutParagraphs) == null ? void 0 : n.length) != null
            ? t
            : 0) > 0)
      );
    }
    ((l.hasHatchConnectorDetail = e), (l.hasHatchConsentCopy = s));
  },
  98,
);
