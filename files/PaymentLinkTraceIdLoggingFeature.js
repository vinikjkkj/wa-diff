__d(
  "PaymentLinkTraceIdLoggingFeature",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebPonyfillsCryptoRandomUUID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n;
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        )
      )
        return t;
      var a = t == null || (n = t.provider) == null ? void 0 : n.paramsJson;
      try {
        if (a == null) return t;
        var i = JSON.parse(a);
        return (
          (i = babelHelpers.extends({}, i, {
            payment_link_trace_id: r(
              "WAWebPonyfillsCryptoRandomUUID",
            )().toLowerCase(),
          })),
          babelHelpers.extends({}, t, {
            provider: { paramsJson: JSON.stringify(i) },
          })
        );
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[PAYMENT LINK TRACE ID LOGGING] error while parsing paramsJson from payment link metadata: ",
                  "",
                ])),
              n,
            )
            .sendLogs(
              "[PAYMENT LINK TRACE ID LOGGING] error while parsing paramsJson from payment link metadata",
            ),
          t
        );
      }
    }
    l.setTraceId = s;
  },
  98,
);
