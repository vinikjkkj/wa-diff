__d(
  "WAWebCoexV2SendReceipt",
  ["WAWebCoexV2BotWid", "WAWebSendReceiptJobCommon", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER,
            recipient: t,
            groupedReceipt: new Map([[t, [e]]]),
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
            recipient: t,
            groupedReceipt: new Map([[t, [e]]]),
          });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.externalIds,
            n = e.isReadSelf,
            r = e.maxSts,
            a = e.recipient,
            i = e.t;
          return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
            type: n
              ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
              : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ,
            recipient: a,
            t: i,
            groupedReceipt: new Map([[a, [].concat(t)]]),
            maxStsByAuthor: r != null ? new Map([[a, r]]) : null,
          });
        })),
        m.apply(this, arguments)
      );
    }
    ((l.sendCoexV2SenderReceipt = e),
      (l.sendCoexV2DeliveryReceipt = u),
      (l.sendCoexV2ReadReceipt = d));
  },
  98,
);
