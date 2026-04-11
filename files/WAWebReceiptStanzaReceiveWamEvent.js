__d(
  "WAWebReceiptStanzaReceiveWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReceiptAggregationType",
    "WAWebWamEnumReceiptStanzaStage",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ReceiptStanzaReceive: [
            2496,
            {
              dbReadsCount: [12, e.TYPES.INTEGER],
              dbWritesCount: [13, e.TYPES.INTEGER],
              mediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [10, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              processingDeferred: [14, e.TYPES.BOOLEAN],
              receiptAggregation: [
                11,
                o("WAWebWamEnumReceiptAggregationType")
                  .RECEIPT_AGGREGATION_TYPE,
              ],
              receiptStanzaDuration: [1, e.TYPES.TIMER],
              receiptStanzaHasOrphaned: [6, e.TYPES.BOOLEAN],
              receiptStanzaOfflineCount: [3, e.TYPES.INTEGER],
              receiptStanzaProcessedCount: [8, e.TYPES.INTEGER],
              receiptStanzaRetryVer: [5, e.TYPES.INTEGER],
              receiptStanzaStage: [
                9,
                o("WAWebWamEnumReceiptStanzaStage").RECEIPT_STANZA_STAGE,
              ],
              receiptStanzaTotalCount: [7, e.TYPES.INTEGER],
              receiptStanzaType: [4, e.TYPES.STRING],
              stanzaBatchSize: [15, e.TYPES.INTEGER],
              stanzaProcessCount: [16, e.TYPES.INTEGER],
            },
            [1, 1e3, 2e3],
            "regular",
          ],
        },
        { ReceiptStanzaReceive: [] },
      );
    l.ReceiptStanzaReceiveWamEvent = s;
  },
  98,
);
