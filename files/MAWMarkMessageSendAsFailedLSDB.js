__d(
  "MAWMarkMessageSendAsFailedLSDB",
  ["LSFactory", "LSMarkOptimisticMessageFailedStoredProcedure"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var l;
      return (l =
        o == null
          ? void 0
          : o.runInTransaction(
              async function (t) {
                await r("LSMarkOptimisticMessageFailedStoredProcedure")(
                  r("LSFactory")(t),
                  { errorMessage: n, isRetryable: a, optimisticMid: e },
                );
              },
              "readwrite",
              void 0,
              void 0,
              i.id + ":29",
            )) != null
        ? l
        : Promise.resolve();
    }
    l.markMessageSendAsFailed = e;
  },
  98,
);
