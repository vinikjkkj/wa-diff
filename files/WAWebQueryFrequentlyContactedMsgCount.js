__d(
  "WAWebQueryFrequentlyContactedMsgCount",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebDBMessageRangeIndex",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "~";
    function u(e) {
      var t = e.chatIds,
        n = e.sinceTs;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryFrequentlyContactedMsgCount",
          function (e) {
            return c(e.chatIds, e.sinceTs);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ chatIds: t, sinceTs: n });
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = o("WAWebSchemaMessage").getMessageTable(),
            i = yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = o(
                          "WAWebDBMessageRangeIndex",
                        ).craftMessageRangeIndex(e, !1, !1, r),
                        n =
                          "" +
                          o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(
                            e,
                            !1,
                            !1,
                            null,
                          ) +
                          s,
                        i = yield a.betweenCount(["messageRangeIndex"], t, n, {
                          lowerInclusive: !0,
                          upperInclusive: !0,
                        });
                      return { chatId: e, count: i };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            l = new Map();
          for (var u of i) {
            var c = u.chatId,
              d = u.count;
            d > 0 && l.set(c, d);
          }
          return l;
        })),
        d.apply(this, arguments)
      );
    }
    l.queryFrequentlyContactedMsgCountJob = u;
  },
  98,
);
