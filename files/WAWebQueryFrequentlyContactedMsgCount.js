__d(
  "WAWebQueryFrequentlyContactedMsgCount",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBMessageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 691200;
    function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryFrequentlyContactedMsgCount",
          function (e) {
            return u(e.chatIds);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP },
        )
        .waitUntilCompleted({ chatIds: e });
    }
    async function u(t) {
      var n = Math.floor(Date.now() / 1e3),
        r = n - e,
        a = o("WAWebSchemaMessage").getMessageTable(),
        i = await Promise.all(
          t.map(async function (e) {
            var t = o("WAWebDBMessageUtils").craftMessageRangeIndex(
                e,
                !1,
                !1,
                r,
              ),
              i = o("WAWebDBMessageUtils").craftMessageRangeIndex(e, !1, !1, n),
              l = await a.betweenCount(["messageRangeIndex"], t, i, {
                lowerInclusive: !0,
                upperInclusive: !0,
              });
            return { chatId: e, count: l };
          }),
        ),
        l = new Map();
      for (var s of i) {
        var u = s.chatId,
          c = s.count;
        c > 0 && l.set(u, c);
      }
      return l;
    }
    l.queryFrequentlyContactedMsgCountJob = s;
  },
  98,
);
