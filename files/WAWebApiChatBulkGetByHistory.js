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
          if (!o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat())
            return o("WAWebSchemaChat").getChatTable().bulkGet(t, !1);
          for (var i = [], l = [], s = new Map(), u = 0; u < t.length; u++)
            if (r("WAWebWid").isWid(t[u])) {
              var c = o("WAWebWidFactory").createWid(t[u]);
              c.isRegularUserPn()
                ? (i.push(u), s.set(u, c.toString()))
                : l.push(u);
            }
          var d = yield (e || (e = n("Promise"))).all([
              i.length > 0
                ? o("WAWebSchemaChat")
                    .getChatTable()
                    .anyOf(
                      ["historyChatId"],
                      i.map(function (e) {
                        var n;
                        return (n = s.get(e)) != null ? n : t[e];
                      }),
                      { shouldDecrypt: !1 },
                    )
                : (e || (e = n("Promise"))).resolve([]),
              l.length > 0
                ? o("WAWebSchemaChat")
                    .getChatTable()
                    .bulkGet(
                      l.map(function (e) {
                        return t[e];
                      }),
                      !1,
                    )
                : (e || (e = n("Promise"))).resolve([]),
            ]),
            m = d[0],
            p = d[1],
            _ = new Map();
          for (var f of m) f.historyChatId != null && _.set(f.historyChatId, f);
          for (var g of i) {
            var h, y;
            a[g] =
              (h = _.get((y = s.get(g)) != null ? y : t[g])) != null ? h : null;
          }
          for (var C = 0; C < l.length; C++) a[l[C]] = p[C];
          return a;
        })),
        u.apply(this, arguments)
      );
    }
    l.bulkGetChatsMaybeByHistory = s;
  },
  98,
);
