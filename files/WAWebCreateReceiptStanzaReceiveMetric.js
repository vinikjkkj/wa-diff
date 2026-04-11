__d(
  "WAWebCreateReceiptStanzaReceiveMetric",
  [
    "WAWebAck",
    "WAWebHandleMsgReceiptParser",
    "WAWebReceiptStanzaReceiveWamEvent",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReceiptStanzaStage",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = new (o(
        "WAWebReceiptStanzaReceiveWamEvent",
      ).ReceiptStanzaReceiveWamEvent)({
        receiptStanzaStage: o("WAWebWamEnumReceiptStanzaStage")
          .RECEIPT_STANZA_STAGE.OVERALL,
        receiptStanzaTotalCount: 1,
      });
      return function (t) {
        var n = t.ackString,
          r = t.from,
          a = t.offline,
          i = t.receipts;
        if (((e.messageType = s(r)), a != null)) {
          var l = parseInt(a, 10);
          Number.isNaN(l) || (e.receiptStanzaOfflineCount = l);
        }
        (n == null
          ? (e.receiptStanzaType = o("WAWebAck").ACK_STRING.DELIVERY)
          : o("WAWebHandleMsgReceiptParser").RECEIPT_TYPES_TO_ACK[n] != null &&
            (e.receiptStanzaType = n),
          (i == null ? void 0 : i.length) != null &&
            (e.receiptStanzaTotalCount = i.length),
          e.markReceiptStanzaDuration(),
          e.commit());
      };
    }
    function s(e) {
      return r("WAWebWid").isStatus(e)
        ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS
        : r("WAWebWid").isGroup(e)
          ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
          : r("WAWebWid").isBroadcast(e)
            ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST
            : r("WAWebWid").isNewsletter(e)
              ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL
              : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL;
    }
    l.createReceiptStanzaReceiveMetric = e;
  },
  98,
);
