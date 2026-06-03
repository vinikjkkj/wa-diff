__d(
  "WAWebPremiumMessageAddSendAction",
  [
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          for (var n of e) {
            var r = o(
              "WAWebPremiumMessageCollection",
            ).PremiumMessageCollection.get(n.premiumMessageId);
            if (r) {
              var a = new Set(r.sentMessageIds);
              (a.add(n.messageId), t.push(r), r.set("sentMessageIds", a));
            }
          }
          yield o("WAWebPremiumMessageSchema")
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
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
