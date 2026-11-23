__d(
  "WAWebReadHatchCustomConnectLink",
  [
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchCustomOAuthConnectorRequest",
    "WAWebHatchEnabledConnectLinks",
    "WAWebHatchJsonReaders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o(
          "WAWebHatchEnabledConnectLinks",
        ).decodeEnabledHatchCustomConnectLink(e),
        r =
          n != null
            ? o(
                "WAWebHatchCustomConnectorRequest",
              ).decodeHatchCustomConnectorRequest(n)
            : null;
      if (r != null)
        return {
          displayName: r.name.slice(
            o("WAWebHatchCustomConnectorRequest")
              .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX.length,
          ),
          kind: "api_key",
          request: r,
        };
      var a =
        n != null
          ? o(
              "WAWebHatchCustomOAuthConnectorRequest",
            ).decodeHatchCustomOAuthConnectorRequest(n)
          : null;
      if (a != null)
        return { displayName: a.displayName, kind: "oauth", request: a };
      var i =
        (t = o("WAWebHatchJsonReaders").readString(
          o("WAWebHatchJsonReaders").readObject(
            n == null ? void 0 : n.spec,
            "connector",
          ),
          "name",
        )) != null
          ? t
          : o("WAWebHatchJsonReaders").readString(
              o("WAWebHatchJsonReaders").readObject(
                n == null ? void 0 : n.spec,
                "credential",
              ),
              "name",
            );
      return {
        displayName:
          i != null &&
          o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(i)
            ? i.slice(
                o("WAWebHatchCustomConnectorRequest")
                  .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX.length,
              )
            : null,
        kind: "invalid",
      };
    }
    l.readHatchCustomConnectLink = e;
  },
  98,
);
