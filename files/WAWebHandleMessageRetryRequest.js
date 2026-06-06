__d(
  "WAWebHandleMessageRetryRequest",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
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
          var a = r("WAWebRetryRequestParser").parse(t);
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
              (u || (u = n("Promise"))).reject(a.error)
            );
          var i = a.success,
            l = i.from,
            c = i.participant,
            d = i.stanzaId;
          if (d == null)
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
          var m = o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(d),
            to: o("WAWebCommsWapMd").JID(l),
            participant: c
              ? o("WAWebCommsWapMd").DEVICE_JID(c)
              : o("WAWap").DROP_ATTR,
            class: "receipt",
            type: "retry",
          });
          return (yield o("WAWebHandleRetryRequest").handleRetryRequest(i), m);
        })),
        d.apply(this, arguments)
      );
    }
    l.handleMessageRetryRequest = c;
  },
  98,
);
