__d(
  "WAWebLabyrinthShadowBaseline",
  ["WAWebDBMessageSerialization", "WAWebDBMessageUtils", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            o("WAWebDBMessageUtils").beginningOfChat(e),
            o("WAWebDBMessageUtils").endOfChat(e),
            { lowerInclusive: !1, upperInclusive: !1 },
          ),
        r = n.map(function (e) {
          return o("WAWebDBMessageSerialization").messageFromDbRow(e);
        });
      return { messages: r, oldestSec: (t = r[0]) == null ? void 0 : t.t };
    }
    l.readLabyrinthShadowBaseline = e;
  },
  98,
);
