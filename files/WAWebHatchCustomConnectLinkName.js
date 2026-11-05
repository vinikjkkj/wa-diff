__d(
  "WAWebHatchCustomConnectLinkName",
  [
    "WAWebHatchConnectLinks",
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchCustomOAuthConnectorRequest",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a = o("WAWebHatchConnectLinks").decodeHatchCustomConnectLink(e);
      return a == null
        ? null
        : (t =
              (n = o(
                "WAWebHatchCustomConnectorRequest",
              ).decodeHatchCustomConnectorRequest(a)) == null
                ? void 0
                : n.name) != null
          ? t
          : (r = o(
                "WAWebHatchCustomOAuthConnectorRequest",
              ).decodeHatchCustomOAuthConnectorRequest(a)) == null
            ? void 0
            : r.name;
    }
    l.getHatchCustomConnectLinkName = e;
  },
  98,
);
