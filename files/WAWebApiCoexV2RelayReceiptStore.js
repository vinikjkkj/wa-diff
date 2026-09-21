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
        i = t.projectedAck,
        l = t.representedLid,
        u = t.ts,
        d = l.toString(),
        m =
          r === o("WAWebAck").ACK.RECEIVED
            ? { delivered: u }
            : r === o("WAWebAck").ACK.READ
              ? { read: u }
              : r === o("WAWebAck").ACK.PLAYED
                ? { played: u }
                : null;
      if (m == null)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] receipt store: unsupported ack ",
                  "",
                ])),
              r,
            )
            .sendLogs("coexv2-relay-receipt-unsupported-ack"),
          (s || (s = n("Promise"))).resolve()
        );
      var p = f(r, i, u);
      return c({
        msgId: a,
        props: babelHelpers.extends({}, m, p),
        representedLid: d,
      });
    }
    function f(e, t, n) {
      return e !== o("WAWebAck").ACK.READ
        ? {}
        : t === o("WAWebAck").ACK.RECEIVED
          ? { projectedDelivered: n }
          : t === o("WAWebAck").ACK.READ
            ? { projectedRead: n }
            : {};
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaCoexV2RelayReceipt")
            .getCoexV2RelayReceiptTable()
            .get([e, t.toString()]);
          return (n == null ? void 0 : n.projectedRead) != null
            ? o("WAWebAck").ACK.READ
            : (n == null ? void 0 : n.projectedDelivered) != null
              ? o("WAWebAck").ACK.RECEIVED
              : null;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaCoexV2RelayReceipt")
            .getCoexV2RelayReceiptTable()
            .equals(["msgId"], e, { limit: 1 });
          return t.length > 0;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield S(o("WATimeUtils").unixTime() - u);
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaCoexV2RelayReceipt")
            .getCoexV2RelayReceiptTable()
            .bulkDeleteRange(["createdAt"], 0, e);
        })),
        R.apply(this, arguments)
      );
    }
    ((l.COEX_V2_RELAY_RECEIPT_RETENTION_SECONDS = u),
      (l.createOrMergeCoexV2RelayReceipts = m),
      (l.addOrUpdateCoexV2RelayReceipt = _),
      (l.getCoexV2RelayMessageAck = g),
      (l.hasCoexV2RelayReceipt = y),
      (l.getUndeliveredCoexV2Lids = b),
      (l.purgeCoexV2RelayReceiptsBefore = S));
  },
  98,
);
