__d(
  "WAWebQueryFrequentlyContactedMsgCount",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBMessageRangeIndex",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "~";
    function s(e) {
      var t = e.chatIds,
        n = e.sinceTs;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryFrequentlyContactedMsgCount",
          function (e) {
            return u(e.chatIds, e.sinceTs);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.SKIP },
        )
        .waitUntilCompleted({ chatIds: t, sinceTs: n });
    }
    async function u(t, n) {
      var r = o("WAWebSchemaMessage").getMessageTable(),
        a = await Promise.all(
          t.map(async function (t) {
            var a = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex({
                chatId: t,
                isIncoming: !1,
                isSystemMessage: !1,
                timestamp: n,
              }),
              i =
                "" +
                o("WAWebDBMessageRangeIndex").craftMessageRangeIndex({
                  chatId: t,
                  isIncoming: !1,
                  isSystemMessage: !1,
                  timestamp: null,
                }) +
                e,
              l = await r.betweenCount(["messageRangeIndex"], a, i, {
                lowerInclusive: !0,
                upperInclusive: !0,
              });
            return { chatId: t, count: l };
          }),
        ),
        i = new Map();
      for (var l of a) {
        var s = l.chatId,
          u = l.count;
        u > 0 && i.set(s, u);
      }
      return i;
    }
    l.queryFrequentlyContactedMsgCountJob = s;
  },
  98,
);
