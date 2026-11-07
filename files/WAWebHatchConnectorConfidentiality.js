__d(
  "WAWebHatchConnectorConfidentiality",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n;
      return (
        ((t =
          (n = e.consent) == null || (n = n.calloutParagraphs) == null
            ? void 0
            : n.length) != null
          ? t
          : 0) > 0
      );
    }
    i.isHatchConnectorNonConfidential = e;
  },
  66,
);
