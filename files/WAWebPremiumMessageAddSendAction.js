__d(
  "WAWebPremiumMessageAddSendAction",
  ["WAWebPremiumMessageCollection", "WAWebPremiumMessageSchema"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = [];
      for (var n of e) {
        var r = o("WAWebPremiumMessageCollection").PremiumMessageCollection.get(
          n.premiumMessageId,
        );
        if (r) {
          var a = new Set(r.sentMessageIds);
          (a.add(n.messageId), t.push(r), r.set("sentMessageIds", a));
        }
      }
      await o("WAWebPremiumMessageSchema")
        .getPremiumMessageTable()
        .bulkCreateOrMerge(
          t.map(function (e) {
            return {
              id: e.id,
              name: e.name,
              type: e.type,
              isDeleted: e.isDeleted,
              mediaId: e.mediaId,
              sentMessageIds: e.sentMessageIds,
            };
          }),
        );
    }
    l.default = e;
  },
  98,
);
