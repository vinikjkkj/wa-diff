__d(
  "WAWebApiChatBulkGetByHistory",
  [
    "Promise",
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = new Array(t.length).fill(null);
          if (!o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
            var i = t.map(function (e) {
              return r("WAWebWid").isWid(e)
                ? o("WAWebWidFactory").createWid(e).toString()
                : e;
            });
            return o("WAWebSchemaChat").getChatTable().bulkGet(i, !1);
          }
          for (var l = [], s = [], u = new Map(), c = 0; c < t.length; c++)
            if (r("WAWebWid").isWid(t[c])) {
              var d = o("WAWebWidFactory").createWid(t[c]);
              d.isRegularUserPn()
                ? (l.push(c), u.set(c, d.toString()))
                : s.push(c);
            }
          var m = yield (e || (e = n("Promise"))).all([
              l.length > 0
                ? o("WAWebSchemaChat")
                    .getChatTable()
                    .anyOf(
                      ["historyChatId"],
                      l.map(function (e) {
                        var n;
                        return (n = u.get(e)) != null ? n : t[e];
                      }),
                      { shouldDecrypt: !1 },
                    )
                : (e || (e = n("Promise"))).resolve([]),
              s.length > 0
                ? o("WAWebSchemaChat")
                    .getChatTable()
                    .bulkGet(
                      s.map(function (e) {
                        return t[e];
                      }),
                      !1,
                    )
                : (e || (e = n("Promise"))).resolve([]),
            ]),
            p = m[0],
            _ = m[1],
            f = new Map();
          for (var g of p) g.historyChatId != null && f.set(g.historyChatId, g);
          for (var h of l) {
            var y, C;
            a[h] =
              (y = f.get((C = u.get(h)) != null ? C : t[h])) != null ? y : null;
          }
          for (var b = 0; b < s.length; b++) a[s[b]] = _[b];
          return a;
        })),
        u.apply(this, arguments)
      );
    }
    l.bulkGetChatsMaybeByHistory = s;
  },
  98,
);
