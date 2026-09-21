__d(
  "WAWebHandleCoexV2Receipt",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return !e.from.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()
        ? null
        : m(e);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ack,
            i = t.ackString,
            l = t.externalIds,
            d = t.participant,
            m = t.recipient,
            p = t.ts;
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
            var f = _(i, d, m);
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
                  ts: p,
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
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
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
    l.maybeHandleCoexV2Receipt = d;
  },
  98,
);
