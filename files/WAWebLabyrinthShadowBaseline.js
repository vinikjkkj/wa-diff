__d(
  "WAWebLabyrinthShadowBaseline",
  [
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebSchemaMessage")
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
        })),
        s.apply(this, arguments)
      );
    }
    l.readLabyrinthShadowBaseline = e;
  },
  98,
);
