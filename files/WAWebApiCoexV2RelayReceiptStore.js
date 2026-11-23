__d(
  "WAWebApiCoexV2RelayReceiptStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCoexV2BotWid",
    "WAWebSchemaCoexV2RelayReceipt",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 60 * o("WATimeUtils").DAY_SECONDS;
    async function u(e) {
      var t,
        n = e.createdAt,
        r = e.msgId,
        a = e.props,
        i = e.representedLid,
        l = o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable(),
        s = [r, i],
        u = n == null ? await l.get(s) : null;
      await l.createOrMerge(
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
    }
    async function c(e, t, n) {
      (n === void 0 && (n = o("WATimeUtils").unixTime()),
        t.length !== 0 &&
          (await Promise.all(
            t.map(function (t) {
              var r = t.toString();
              return u({
                createdAt: n,
                msgId: e,
                props: {},
                representedLid: r,
              });
            }),
          )));
    }
    function d(t) {
      var n = t.ack,
        r = t.msgId,
        a = t.projectedAck,
        i = t.representedLid,
        l = t.ts,
        s = i.toString(),
        c =
          n === o("WAWebAck").ACK.RECEIVED
            ? { delivered: l }
            : n === o("WAWebAck").ACK.READ
              ? { read: l }
              : n === o("WAWebAck").ACK.PLAYED
                ? { played: l }
                : null;
      if (c == null)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] receipt store: unsupported ack ",
                  "",
                ])),
              n,
            )
            .sendLogs("coexv2-relay-receipt-unsupported-ack"),
          Promise.resolve()
        );
      var d = m(n, a, l);
      return u({
        msgId: r,
        props: babelHelpers.extends({}, c, d),
        representedLid: s,
      });
    }
    function m(e, t, n) {
      return e !== o("WAWebAck").ACK.READ
        ? {}
        : t === o("WAWebAck").ACK.RECEIVED
          ? { projectedDelivered: n }
          : t === o("WAWebAck").ACK.READ
            ? { projectedRead: n }
            : {};
    }
    async function p(e, t) {
      var n = await o("WAWebSchemaCoexV2RelayReceipt")
        .getCoexV2RelayReceiptTable()
        .get([e, t.toString()]);
      return (n == null ? void 0 : n.projectedRead) != null
        ? o("WAWebAck").ACK.READ
        : (n == null ? void 0 : n.projectedDelivered) != null
          ? o("WAWebAck").ACK.RECEIVED
          : null;
    }
    async function _(e) {
      var t = await o("WAWebSchemaCoexV2RelayReceipt")
        .getCoexV2RelayReceiptTable()
        .equals(["msgId"], e, { limit: 1 });
      return t.length > 0;
    }
    async function f(e) {
      await g(o("WATimeUtils").unixTime() - s);
      var t = await o("WAWebSchemaCoexV2RelayReceipt")
        .getCoexV2RelayReceiptTable()
        .equals(["msgId"], e);
      return t
        .filter(function (e) {
          return e.delivered == null && e.read == null && e.played == null;
        })
        .map(function (e) {
          return e.representedLid;
        });
    }
    async function g(e) {
      await o("WAWebSchemaCoexV2RelayReceipt")
        .getCoexV2RelayReceiptTable()
        .bulkDeleteRange(["createdAt"], 0, e);
    }
    ((l.COEX_V2_RELAY_RECEIPT_RETENTION_SECONDS = s),
      (l.createOrMergeCoexV2RelayReceipts = c),
      (l.addOrUpdateCoexV2RelayReceipt = d),
      (l.getCoexV2RelayMessageAck = p),
      (l.hasCoexV2RelayReceipt = _),
      (l.getUndeliveredCoexV2Lids = f),
      (l.purgeCoexV2RelayReceiptsBefore = g));
  },
  98,
);
