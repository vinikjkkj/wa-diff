__d(
  "MAWCOPReceiptsHandler",
  [
    "MAWIsQuotaExceededError",
    "MAWProtocolQueueReceipt",
    "MAWSharedCOPLogger",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return c(t).catch(function (t) {
        var n = r("getErrorSafe")(t);
        if (o("MAWIsQuotaExceededError").isQuotaExceededError(n)) throw n;
        return (
          r("MAWSharedCOPLogger")
            .catching(n)
            .MUSTFIX(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Receipt consumer error",
                ])),
            ),
          []
        );
      });
    }
    async function c(e) {
      if (e.length === 0) return [];
      var t = await o("MAWProtocolQueueReceipt").handleIncomingReceiptStanza(e);
      return (
        t.toAck.length !== e.length &&
          r("MAWSharedCOPLogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Errors occurred while processing receipts batch, see transactor error reports.",
              ])),
          ),
        t.toAck
      );
    }
    l.copIncomingReceiptsHandler = u;
  },
  98,
);
