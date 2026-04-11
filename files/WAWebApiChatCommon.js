__d(
  "WAWebApiChatCommon",
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
      return o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .equals(["historyChatId"], e, { shouldDecrypt: !1, limit: 1 });
          return t[0];
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("WAWebWid").isWid(e)) return null;
          var t = o("WAWebWidFactory").createWid(e);
          return t.isRegularUserPn() &&
            o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
            ? u(t.toString())
            : s(t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        _.apply(this, arguments)
      );
    }
    ((l.getChatRecord = s),
      (l.getChatRecordByHistoryChatId = u),
      (l.getChatMaybeByHistory = d),
      (l.bulkGetChatsMaybeByHistory = p));
  },
  98,
);
