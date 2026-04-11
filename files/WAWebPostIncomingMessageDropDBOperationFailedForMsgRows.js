__d(
  "WAWebPostIncomingMessageDropDBOperationFailedForMsgRows",
  [
    "WAWebDBMessageSerialization",
    "WAWebGetMetricE2eDestination",
    "WAWebIncomingMessageDropWamEvent",
    "WAWebMsgGetters",
    "WAWebWamEnumMessageDropReasonType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      for (var t of e) {
        var n = o("WAWebDBMessageSerialization").messageFromDbRow(t),
          r = new (o(
            "WAWebIncomingMessageDropWamEvent",
          ).IncomingMessageDropWamEvent)({
            messageDropReason: o("WAWebWamEnumMessageDropReasonType")
              .MESSAGE_DROP_REASON_TYPE.DB_OPERATION_FAILED,
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(n),
          }),
          a = o("WAWebMsgGetters").getFrom(n),
          i = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(a);
        (i != null && (r.e2eDestination = i), r.commit());
      }
    }
    l.postIncomingMessageDropDBOperationFailedForMsgRows = e;
  },
  98,
);
