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
      s = 691200;
    function u(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryFrequentlyContactedMsgCount",
          function (e) {
            return c(e.chatIds);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ chatIds: e });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Math.floor(Date.now() / 1e3),
            a = r - s,
            i = o("WAWebSchemaMessage").getMessageTable(),
            l = yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = o(
                          "WAWebDBMessageRangeIndex",
                        ).craftMessageRangeIndex(e, !1, !1, a),
                        n = o(
                          "WAWebDBMessageRangeIndex",
                        ).craftMessageRangeIndex(e, !1, !1, r),
                        l = yield i.betweenCount(["messageRangeIndex"], t, n, {
                          lowerInclusive: !0,
                          upperInclusive: !0,
                        });
                      return { chatId: e, count: l };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            u = new Map();
          for (var c of l) {
            var d = c.chatId,
              m = c.count;
            m > 0 && u.set(d, m);
          }
          return u;
        })),
        d.apply(this, arguments)
      );
    }
    l.queryFrequentlyContactedMsgCountJob = u;
  },
  98,
);
