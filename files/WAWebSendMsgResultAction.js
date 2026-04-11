__d(
  "WAWebSendMsgResultAction",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
      "OK",
      "ERROR_NETWORK",
      "ERROR_EXPIRED",
      "ERROR_CANCELLED",
      "ERROR_UPLOAD",
      "ERROR_UNKNOWN",
      "ERROR_RATE_LIMIT",
    ]);
    i.SendMsgResult = e;
  },
  66,
);
