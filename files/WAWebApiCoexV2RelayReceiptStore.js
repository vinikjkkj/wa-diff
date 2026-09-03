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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.createdAt,
            r = e.msgId,
            a = e.props,
            i = e.representedLid,
            l = o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable(),
            s = [r, i],
            u = n == null ? yield l.get(s) : null;
          yield l.createOrMerge(
            s,
            babelHelpers.extends(
              {
                msgId: r,
                representedLid: i,
                createdAt:
                  (t = n != null ? n : u == null ? void 0 : u.createdAt) != null
                    ? t
                    : o("WATimeUtils").unixTime(),
                botJid: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID.toString(),
              },
              a,
            ),
          );
        })),
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
                  return c({
                    createdAt: r,
                    msgId: e,
                    props: {},
                    representedLid: n,
                  });
                }),
              )));
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      var r = t.ack,
        a = t.msgId,
        i = t.representedLid,
        l = t.ts,
        u = i.toString(),
        d =
          r === o("WAWebAck").ACK.RECEIVED
            ? { delivered: l }
            : r === o("WAWebAck").ACK.READ
              ? { read: l }
              : r === o("WAWebAck").ACK.PLAYED
                ? { played: l }
                : null;
      return d == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] receipt store: unsupported ack ",
                  "",
                ])),
              r,
            )
            .sendLogs("coexv2-relay-receipt-unsupported-ack"),
          (s || (s = n("Promise"))).resolve())
        : c({ msgId: a, props: d, representedLid: u });
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
