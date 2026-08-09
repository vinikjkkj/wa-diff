__d(
  "MAWMarkMessageSendAsFailedLSDB",
  [
    "LSFactory",
    "LSMarkOptimisticMessageFailedStoredProcedure",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o, a, l, s) {
      var u;
      return (u =
        l == null
          ? void 0
          : l.runInTransaction(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    yield r("LSMarkOptimisticMessageFailedStoredProcedure")(
                      r("LSFactory")(e),
                      { errorMessage: a, isRetryable: s, optimisticMid: t },
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              "readwrite",
              void 0,
              void 0,
              i.id + ":29",
            )) != null
        ? u
        : (e || (e = n("Promise"))).resolve();
    }
    l.markMessageSendAsFailed = s;
  },
  98,
);
