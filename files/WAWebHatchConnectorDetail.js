__d(
  "WAWebHatchConnectorDetail",
  ["WAWebHatchConnectorsEligibility"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.consent != null ||
        e.description != null ||
        o("WAWebHatchConnectorsEligibility").isHatchPermissionsOnlyConnector(e)
      );
    }
    l.hasHatchConnectorDetail = e;
  },
  98,
);
