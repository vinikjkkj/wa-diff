__d(
  "WAWebHandleCoexV2Receipt",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ack,
            i = t.ackString,
            l = t.externalIds,
            d = t.participant,
            m = t.recipient,
            _ = t.ts;
          if (m == null) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] receipt: missing recipient",
                  ])),
              )
              .sendLogs("coexv2-relay-receipt-missing-recipient");
            return;
          }
          try {
            var f = p(i, d, m);
            if (f == null) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] receipt: unresolved represented LID for type ",
                      "",
                    ])),
                  String(i),
                )
                .sendLogs("coexv2-relay-receipt-unresolved-lid");
              return;
            }
            yield (c || (c = n("Promise"))).all(
              l.map(function (e) {
                return o(
                  "WAWebApiCoexV2RelayReceiptStore",
                ).addOrUpdateCoexV2RelayReceipt({
                  ack: a,
                  msgId: e,
                  representedLid: f,
                  ts: _,
                });
              }),
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] receipt: failed to process for type ",
                    "",
                  ])),
                String(i),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coexv2-relay-receipt-process-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return e === o("WAWebAck").ACK_STRING.SENDER ||
        e === o("WAWebAck").ACK_STRING.READ_SELF ||
        e === o("WAWebAck").ACK_STRING.PLAYED_SELF
        ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
        : e === o("WAWebAck").ACK_STRING.READ ||
            e === o("WAWebAck").ACK_STRING.PLAYED
          ? t != null
            ? o("WAWebLidMigrationUtils").toUserLid(
                o("WAWebWidFactory").asUserWidOrThrow(t),
              )
            : null
          : e === null || e === o("WAWebAck").ACK_STRING.DELIVERY
            ? o("WAWebLidMigrationUtils").toUserLid(
                o("WAWebWidFactory").asUserWidOrThrow(n),
              )
            : null;
    }
    l.handleCoexV2Receipt = d;
  },
  98,
);
