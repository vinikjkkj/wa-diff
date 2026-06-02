__d(
  "WAWebHandleMessageRetryRequest",
  [
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebHandleRetryRequest",
    "WAWebRetryRequestParser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = r("WAWebRetryRequestParser").parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          Promise.reject(n.error)
        );
      var a = n.success,
        i = a.from,
        l = a.participant,
        u = a.stanzaId;
      if (u == null)
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
      var c = o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(u),
        to: o("WAWebCommsWapMd").JID(i),
        participant: l
          ? o("WAWebCommsWapMd").DEVICE_JID(l)
          : o("WAWap").DROP_ATTR,
        class: "receipt",
        type: "retry",
      });
      return (await o("WAWebHandleRetryRequest").handleRetryRequest(a), c);
    }
    l.handleMessageRetryRequest = u;
  },
  98,
);
