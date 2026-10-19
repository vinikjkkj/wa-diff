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
        if (((e.messageType = u(r)), a != null)) {
          var l = parseInt(a, 10);
          Number.isNaN(l) || (e.receiptStanzaOfflineCount = l);
        }
        (n == null
          ? (e.receiptStanzaType = o("WAWebAck").ACK_STRING.DELIVERY)
          : n in o("WAWebHandleMsgReceiptParser").RECEIPT_TYPES_TO_ACK &&
            (e.receiptStanzaType = n),
          (i == null ? void 0 : i.length) != null &&
            (e.receiptStanzaTotalCount = i.length),
          e.markReceiptStanzaDuration(),
          e.commit());
      };
    }
    function s() {
      var e = new (o(
        "WAWebReceiptStanzaReceiveWamEvent",
      ).ReceiptStanzaReceiveWamEvent)({
        receiptStanzaStage: o("WAWebWamEnumReceiptStanzaStage")
          .RECEIPT_STANZA_STAGE.OVERALL,
        receiptStanzaTotalCount: 1,
      });
      return function (t) {
        var n = t.from,
          r = t.type;
        ((e.messageType = u(n)),
          (e.receiptStanzaType = r),
          e.markReceiptStanzaDuration(),
          e.commit());
      };
    }
    function u(e) {
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
    ((l.createReceiptStanzaReceiveMetric = e),
      (l.createRetryReceiptStanzaReceiveMetric = s));
  },
  98,
);
