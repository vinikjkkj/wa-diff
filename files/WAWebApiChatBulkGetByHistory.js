__d(
  "WAWebApiChatBulkGetByHistory",
  [
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new Array(e.length).fill(null);
      if (!o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
        var n = e.map(function (e) {
          return r("WAWebWid").isWid(e)
            ? o("WAWebWidFactory").createWid(e).toString()
            : e;
        });
        return o("WAWebSchemaChat").getChatTable().bulkGet(n, !1);
      }
      for (var a = [], i = [], l = new Map(), s = 0; s < e.length; s++)
        if (r("WAWebWid").isWid(e[s])) {
          var u = o("WAWebWidFactory").createWid(e[s]);
          u.isRegularUserPn() ? (a.push(s), l.set(s, u.toString())) : i.push(s);
        }
      var c = await Promise.all([
          a.length > 0
            ? o("WAWebSchemaChat")
                .getChatTable()
                .anyOf(
                  ["historyChatId"],
                  a.map(function (t) {
                    var n;
                    return (n = l.get(t)) != null ? n : e[t];
                  }),
                  { shouldDecrypt: !1 },
                )
            : Promise.resolve([]),
          i.length > 0
            ? o("WAWebSchemaChat")
                .getChatTable()
                .bulkGet(
                  i.map(function (t) {
                    return e[t];
                  }),
                  !1,
                )
            : Promise.resolve([]),
        ]),
        d = c[0],
        m = c[1],
        p = new Map();
      for (var _ of d) _.historyChatId != null && p.set(_.historyChatId, _);
      for (var f of a) {
        var g, h;
        t[f] =
          (g = p.get((h = l.get(f)) != null ? h : e[f])) != null ? g : null;
      }
      for (var y = 0; y < i.length; y++) t[i[y]] = m[y];
      return t;
    }
    l.bulkGetChatsMaybeByHistory = e;
  },
  98,
);
