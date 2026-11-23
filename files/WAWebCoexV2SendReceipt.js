__d(
  "WAWebCoexV2SendReceipt",
  ["WAWebCoexV2BotWid", "WAWebSendReceiptJobCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
        to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER,
        recipient: t,
        groupedReceipt: new Map([[t, [e]]]),
      });
    }
    async function s(e, t) {
      return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
        to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
        recipient: t,
        groupedReceipt: new Map([[t, [e]]]),
      });
    }
    async function u(e) {
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
    }
    ((l.sendCoexV2SenderReceipt = e),
      (l.sendCoexV2DeliveryReceipt = s),
      (l.sendCoexV2ReadReceipt = u));
  },
  98,
);
