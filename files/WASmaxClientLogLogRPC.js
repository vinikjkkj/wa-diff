__d(
  "WASmaxClientLogLogRPC",
  [
    "WASmaxInClientLogLogRequest",
    "WASmaxOutClientLogLogResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInClientLogLogRequest").parseLogRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Log", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeLogResponseAck: function () {
          return o("WASmaxOutClientLogLogResponseAck").makeLogResponseAck(e);
        },
      };
    }
    l.receiveLogRPC = e;
  },
  98,
);
