__d(
  "WAWebDBGetStarredMessagesForChat",
  [
    "Promise",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r, a) {
      return (e || (e = n("Promise")))
        .resolve()
        .then(function () {
          if (a != null)
            return o("WAWebSchemaMessage").getMessageTable().get(a.toString());
        })
        .then(function (e) {
          var n =
              e == null
                ? [o("WAWebDBMessageUtils").endOfChat(t), 1 / 0]
                : [e.internalId, e.isStarred],
            a = [o("WAWebDBMessageUtils").beginningOfChat(t), 0];
          return o("WAWebSchemaMessage")
            .getMessageTable()
            .between(["internalId", "isStarred"], a, n, {
              lowerInclusive: !1,
              upperInclusive: !1,
              reverse: !0,
              limit: r,
            })
            .then(function (e) {
              return e.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              });
            });
        });
    }
    l.getStarredMessagesForChat = s;
  },
  98,
);
