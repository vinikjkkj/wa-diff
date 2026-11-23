__d(
  "WAWebBizBroadcastProAudienceActivityQuery",
  [
    "WAWebBizBroadcastProAudienceChatQuery",
    "WAWebDBMessageRangeBounds",
    "WAWebRunInBatches",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32;
    async function s(t) {
      var n = Array.from(new Set(t)),
        r = new Set(),
        a = await o(
          "WAWebBizBroadcastProAudienceChatQuery",
        ).resolveProAudienceChats(n, function (e) {
          r.add(e);
        }),
        i = new Map();
      return (
        await o("WAWebRunInBatches").runInBatches(
          a,
          async function (e) {
            var t = await Promise.all(
              e.map(async function (e) {
                var t = e.accountLid,
                  n = e.chatWid;
                return {
                  accountLid: t,
                  timestamp: await o(
                    "WAWebDBMessageRangeBounds",
                  ).getLastMessageTimestamp(n),
                };
              }),
            );
            for (var n of t) {
              var r = n.accountLid,
                a = n.timestamp;
              i.set(r, a);
            }
          },
          { batchSize: e },
        ),
        n.map(function (e) {
          var t,
            n = i.has(e);
          return !n && r.has(e)
            ? {
                accountLid: e,
                hasChat: null,
                lastIncomingTs: null,
                unavailableReason: "chat_association_unavailable",
              }
            : {
                accountLid: e,
                hasChat: n,
                lastIncomingTs: (t = i.get(e)) != null ? t : null,
              };
        })
      );
    }
    l.queryProAudienceActivity = s;
  },
  98,
);
