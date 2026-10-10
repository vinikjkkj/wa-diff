__d(
  "WAWebHatchConnectorDetail",
  ["WAWebHatchConnectorsEligibility", "WAWebHatchFirstPartyConnectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("WAWebHatchFirstPartyConnectors").isHatchFirstPartyConnector(e.id) ||
        e.consent != null ||
        e.description != null ||
        o("WAWebHatchConnectorsEligibility").isHatchPermissionsOnlyConnector(e)
      );
    }
    l.hasHatchConnectorDetail = e;
  },
  98,
);
