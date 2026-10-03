__d(
  "WAWebEmojiSearch",
  [
    "WATrie",
    "WAWebEmoji",
    "WAWebRecentEmojiCollection",
    "asyncToGeneratorRuntime",
    "compactMap",
    "justknobx",
    "once",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("WAFtsMultiLangTokenizer").__setRef(
        "WAWebEmojiSearch",
      ),
      s = [
        "\uD83D\uDE02",
        "\uD83E\uDD23",
        "\u2764",
        "\uD83E\uDD7A",
        "\uD83E\uDD70",
        "\uD83D\uDE18",
        "\uD83D\uDE2D",
        "\uD83D\uDE0D",
        "\uD83D\uDE01",
        "\uD83D\uDE4F",
        "\uD83D\uDE05",
        "\uD83D\uDE06",
        "\uD83D\uDE0A",
        "\uD83D\uDE42",
        "\uD83D\uDE14",
        "\uD83E\uDD73",
        "\uD83D\uDE12",
        "\u263A",
        "\uD83C\uDF82",
        "\uD83D\uDC4D",
        "\uD83D\uDC96",
        "\uD83D\uDE22",
        "\uD83D\uDE44",
        "\uD83D\uDE0F",
        "\uD83D\uDE0E",
        "\uD83D\uDC8B",
        "\uD83D\uDE1E",
        "\uD83D\uDE09",
        "\uD83D\uDC4F",
        "\uD83D\uDE43",
        "\uD83D\uDE21",
        "\uD83D\uDE00",
        "\uD83D\uDE04",
        "\uD83D\uDE07",
        "\uD83E\uDD29",
        "\uD83D\uDE0C",
        "\uD83E\uDD14",
        "\uD83C\uDF39",
        "\uD83D\uDE0B",
        "\uD83D\uDC97",
        "\uD83E\uDD17",
        "\uD83D\uDC95",
        "\uD83D\uDC94",
        "\uD83D\uDE1A",
        "\u2639",
        "\uD83D\uDE03",
        "\uD83C\uDF89",
        "\uD83D\uDD25",
        "\uD83E\uDD74",
        "\uD83D\uDE33",
      ],
      u = [
        "SMILEYS_PEOPLE",
        "ANIMALS_NATURE",
        "FOOD_DRINK",
        "ACTIVITY",
        "TRAVEL_PLACES",
        "OBJECTS",
        "SYMBOLS",
        "FLAGS",
        "VARIATION",
      ],
      c = 36,
      d = 50,
      m = 1841,
      p = 1e8,
      _ = 1e6,
      f = 1e4;
    function g(e, t) {
      var n = [];
      if (e) {
        var r = S(e.toLowerCase(), t);
        n = Array.from(new Set(r));
      }
      return n;
    }
    function h(e, t) {
      if (!t) return [];
      if (e.length <= 5) return t.getMatches(e);
      var n = e.substring(0, 5).trim(),
        r = t.getMatches(n);
      return (
        (r = r.filter(function (t) {
          return t.keyword.startsWith(e);
        })),
        r
      );
    }
    function y(e) {
      return r("compactMap")(e, o("WAWebEmoji").EmojiUtil.normalizeEmoji);
    }
    function C(e) {
      var t,
        n,
        r,
        o = e.emoji,
        a = e.emojiToPickerPosition,
        i = e.recentEmojiToRank,
        l = e.top50EmojiToRank,
        s = e.wordMatchCount,
        u = Math.min(Math.max(s, 0), 99),
        c = (t = i.get(o)) != null ? t : 0,
        d = Math.min(Math.max(c, 0), 99),
        g = (n = l.get(o)) != null ? n : 0,
        h = Math.min(Math.max(g, 0), 99),
        y = (r = a.get(o)) != null ? r : m,
        C = Math.min(Math.max(m - y, 1), 9999);
      return u * p + d * _ + h * f + C;
    }
    function b() {
      var e = new Map(),
        t = y(
          o("WAWebRecentEmojiCollection").RecentEmojiCollection.map(
            function (e) {
              return e.id;
            },
          ),
        );
      return (
        t.forEach(function (t, n) {
          e.set(t, c - n);
        }),
        e
      );
    }
    var v = r("once")(function () {
      var e = new Map(),
        t = y(s);
      return (
        t.forEach(function (t, n) {
          e.set(t, d - n);
        }),
        e
      );
    });
    function S(e, t) {
      var n = e.split(" ").filter(function (e) {
        return e.length > 0;
      });
      if (n.length === 0) return [];
      var r = new Map();
      for (var o of n) {
        var a = h(o, t),
          i = y(
            a.flatMap(function (e) {
              return e.value;
            }),
          ),
          l = new Set(i);
        for (var s of l) {
          var u,
            c = (u = r.get(s)) != null ? u : 0;
          r.set(s, c + 1);
        }
      }
      var d = b(),
        m = v(),
        p = R(),
        _ = [];
      for (var f of r) {
        var g = f[0],
          S = f[1],
          L = C({
            emoji: g,
            emojiToPickerPosition: p,
            recentEmojiToRank: d,
            top50EmojiToRank: m,
            wordMatchCount: S,
          });
        _.push({ emoji: g, rank: L });
      }
      return (
        _.sort(function (e, t) {
          return t.rank - e.rank;
        }),
        _.map(function (e) {
          return e.emoji;
        })
      );
    }
    var R = r("once")(function () {
      var e = new Map(),
        t = 0;
      for (var n of u) {
        var r = o("WAWebEmoji").EmojiUtil.getEmojisInCategory(n);
        for (var a of r) (e.set(a, t), t++);
      }
      return e;
    });
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return k([], "shortKeyword");
          var n = t[0];
          t.length > 1 && (n = babelHelpers.extends({}, n, t[1]));
          var o = yield e.load(),
            a = new o(),
            i;
          return (
            r("justknobx")._("2148")
              ? (i = Object.entries(n).flatMap(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = t.toLowerCase(),
                    o = Array.from(a.tokenize(r));
                  return o.map(function (e) {
                    return {
                      value: n,
                      keyword: e,
                      shortKeyword: e.substring(0, 5),
                    };
                  });
                }))
              : (i = Object.entries(n).flatMap(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = t.toLowerCase(),
                    o = r.substring(0, 5);
                  return { value: n, keyword: r, shortKeyword: o };
                })),
            k(i, "shortKeyword")
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      var n = r("WATrie").fromForwardsStrings(
        e.map(function (e) {
          return e[t];
        }),
        e,
      );
      return {
        getMatches: function (t) {
          return n.search(t);
        },
      };
    }
    ((l.emojiSearch = g), (l.emojiLocaleDictsToTrie = L));
  },
  98,
);
