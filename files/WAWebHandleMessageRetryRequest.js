__d(
  "WAWebHandleMessageRetryRequest",
  [
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsWapMd",
    "WAWebCreateReceiptStanzaReceiveMetric",
    "WAWebHandleRetryRequest",
    "WAWebRetryRequestParser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = o(
          "WAWebCreateReceiptStanzaReceiveMetric",
        ).createRetryReceiptStanzaReceiveMetric(),
        a = r("WAWebRetryRequestParser").parse(t);
      if (a.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            a.error.toString(),
          ),
          Promise.reject(a.error)
        );
      var i = a.success,
        l = i.from,
        u = i.participant,
        c = i.stanzaId,
        d = i.type;
      if (c == null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Received null stanzaID when handling message retry request",
              ])),
          ),
          Promise.reject(
            r("err")(
              "Received null stanzaID when handling message retry request",
            ),
          )
        );
      var m = o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(c),
        to: o("WAWebCommsWapMd").JID(l),
        participant: u
          ? o("WAWebCommsWapMd").DEVICE_JID(u)
          : o("WAWap").DROP_ATTR,
        class: "receipt",
        type: "retry",
      });
      try {
        await o("WAWebHandleRetryRequest").handleRetryRequest(i);
      } finally {
        o("WAWebABProps").getABPropConfigValue(
          "web_retry_receipt_logging_enabled",
        ) && n({ from: l, type: d });
      }
      return m;
    }
    l.handleMessageRetryRequest = u;
  },
  98,
);
