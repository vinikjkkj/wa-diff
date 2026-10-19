__d(
  "WAWebHandleMessageRetryRequest",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsWapMd",
    "WAWebCreateReceiptStanzaReceiveMetric",
    "WAWebHandleRetryRequest",
    "WAWebRetryRequestParser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = o(
              "WAWebCreateReceiptStanzaReceiveMetric",
            ).createRetryReceiptStanzaReceiveMetric(),
            i = r("WAWebRetryRequestParser").parse(t);
          if (i.error)
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                i.error.toString(),
              ),
              (u || (u = n("Promise"))).reject(i.error)
            );
          var l = i.success,
            c = l.from,
            d = l.participant,
            m = l.stanzaId,
            p = l.type;
          if (m == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Received null stanzaID when handling message retry request",
                  ])),
              ),
              (u || (u = n("Promise"))).reject(
                r("err")(
                  "Received null stanzaID when handling message retry request",
                ),
              )
            );
          var _ = o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(m),
            to: o("WAWebCommsWapMd").JID(c),
            participant: d
              ? o("WAWebCommsWapMd").DEVICE_JID(d)
              : o("WAWap").DROP_ATTR,
            class: "receipt",
            type: "retry",
          });
          try {
            yield o("WAWebHandleRetryRequest").handleRetryRequest(l);
          } finally {
            o("WAWebABProps").getABPropConfigValue(
              "web_retry_receipt_logging_enabled",
            ) && a({ from: c, type: p });
          }
          return _;
        })),
        d.apply(this, arguments)
      );
    }
    l.handleMessageRetryRequest = c;
  },
  98,
);
