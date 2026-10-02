__d(
  "WASmaxAbPropsRefreshRPC",
  [
    "WASmaxInAbPropsRefreshRequest",
    "WASmaxOutAbPropsRefreshResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInAbPropsRefreshRequest").parseRefreshRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Refresh", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeRefreshResponseAck: function () {
          return o("WASmaxOutAbPropsRefreshResponseAck").makeRefreshResponseAck(
            e,
          );
        },
      };
    }
    l.receiveRefreshRPC = e;
  },
  98,
);
