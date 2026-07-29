__d(
  "WAWebApiCoexV2RelayReceiptStore",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCoexV2BotWid",
    "WAWebSchemaCoexV2RelayReceipt",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 60 * o("WATimeUtils").DAY_SECONDS;
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = o(
                "WAWebSchemaCoexV2RelayReceipt",
              ).getCoexV2RelayReceiptTable(),
              l = [e, t],
              s = r == null ? yield i.get(l) : null;
            yield i.createOrMerge(
              l,
              babelHelpers.extends(
                {
                  msgId: e,
                  representedLid: t,
                  createdAt:
                    (a = r != null ? r : s == null ? void 0 : s.createdAt) !=
                    null
                      ? a
                      : o("WATimeUtils").unixTime(),
                  botJid:
                    o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID.toString(),
                },
                n,
              ),
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (r === void 0 && (r = o("WATimeUtils").unixTime()),
            t.length !== 0 &&
              (yield (s || (s = n("Promise"))).all(
                t.map(function (t) {
                  var n = t.toString();
                  return c(e, n, {}, r);
                }),
              )));
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, r, a, i) {
      var l = r.toString(),
        u =
          a === o("WAWebAck").ACK.RECEIVED
            ? { delivered: i }
            : a === o("WAWebAck").ACK.READ
              ? { read: i }
              : a === o("WAWebAck").ACK.PLAYED
                ? { played: i }
                : null;
      return u == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] receipt store: unsupported ack ",
                  "",
                ])),
              a,
            )
            .sendLogs("coexv2-relay-receipt-unsupported-ack"),
          (s || (s = n("Promise"))).resolve())
        : c(t, l, u);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield h(o("WATimeUtils").unixTime() - u);
          var t = yield o("WAWebSchemaCoexV2RelayReceipt")
            .getCoexV2RelayReceiptTable()
            .equals(["msgId"], e);
          return t
            .filter(function (e) {
              return e.delivered == null && e.read == null && e.played == null;
            })
            .map(function (e) {
              return e.representedLid;
            });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaCoexV2RelayReceipt")
            .getCoexV2RelayReceiptTable()
            .bulkDeleteRange(["createdAt"], 0, e);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.COEX_V2_RELAY_RECEIPT_RETENTION_SECONDS = u),
      (l.createOrMergeCoexV2RelayReceipts = m),
      (l.addOrUpdateCoexV2RelayReceipt = _),
      (l.getUndeliveredCoexV2Lids = f),
      (l.purgeCoexV2RelayReceiptsBefore = h));
  },
  98,
);
