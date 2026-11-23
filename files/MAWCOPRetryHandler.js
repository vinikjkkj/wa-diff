__d(
  "MAWCOPRetryHandler",
  [
    "MAWIsQuotaExceededError",
    "MAWSharedCOPLogger",
    "MAWSharedHandleRetryRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return u(t).catch(function (t) {
        var n = r("getErrorSafe")(t);
        if (o("MAWIsQuotaExceededError").isQuotaExceededError(n)) throw n;
        return (
          r("MAWSharedCOPLogger")
            .catching(n)
            .MUSTFIX(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Retry consumer error",
                ])),
            ),
          []
        );
      });
    }
    async function u(e) {
      return e.length === 0
        ? []
        : (await o("MAWSharedHandleRetryRequest").bulkHandleRetryRequest(
            e.map(function (e) {
              return e.retry;
            }),
          ),
          e.map(function (e) {
            return e.stanzaQueueId;
          }));
    }
    l.copIncomingRetryHandler = s;
  },
  98,
);
