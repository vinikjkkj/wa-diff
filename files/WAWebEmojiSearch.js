__d(
  "WAWebEmojiSearch",
  [
    "WALogger",
    "WATrie",
    "WAWebABProps",
    "WAWebEmoji",
    "WAWebRecentEmojiCollection",
    "asyncToGeneratorRuntime",
    "compactMap",
    "justknobx",
    "once",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAFtsMultiLangTokenizer").__setRef(
        "WAWebEmojiSearch",
      ),
      u = [
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
      c = [
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
      d = 36,
      m = 50,
      p = 1841,
      _ = 1e8,
      f = 1e6,
      g = 1e4;
    function h(e, t) {
      var n = [];
      if (e) {
        var r = L(e.toLowerCase(), t);
        n = Array.from(new Set(r));
      }
      return n;
    }
    function y(e, t) {
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
    function C(e) {
      return r("compactMap")(e, o("WAWebEmoji").EmojiUtil.normalizeEmoji);
    }
    function b(e, t, n, r, o) {
      var a,
        i,
        l,
        s = Math.min(Math.max(t, 0), 99),
        u = (a = n.get(e)) != null ? a : 0,
        c = Math.min(Math.max(u, 0), 99),
        d = (i = r.get(e)) != null ? i : 0,
        m = Math.min(Math.max(d, 0), 99),
        h = (l = o.get(e)) != null ? l : p,
        y = Math.min(Math.max(p - h, 1), 9999);
      return s * _ + c * f + m * g + y;
    }
    function v() {
      var e = new Map(),
        t = C(
          o("WAWebRecentEmojiCollection").RecentEmojiCollection.map(
            function (e) {
              return e.id;
            },
          ),
        );
      return (
        t.forEach(function (t, n) {
          e.set(t, d - n);
        }),
        e
      );
    }
    var S = r("once")(function () {
      var e = new Map(),
        t = C(u);
      return (
        t.forEach(function (t, n) {
          e.set(t, m - n);
        }),
        e
      );
    });
    function R(e, t) {
      var n = e.split(" ").filter(function (e) {
        return e.length > 0;
      });
      if (n.length === 0) return [];
      var r = new Map();
      for (var o of n) {
        var a = y(o, t),
          i = C(
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
      var d = v(),
        m = S(),
        p = E(),
        _ = [];
      for (var f of r) {
        var g = f[0],
          h = f[1],
          R = b(g, h, d, m, p);
        _.push({ emoji: g, rank: R });
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
    function L(t, n) {
      if (o("WAWebABProps").getABPropConfigValue("emoji_search_cldr"))
        return R(t, n);
      var a,
        i = s.getModuleIfRequireable();
      i
        ? (a = new i())
        : o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WAFtsMultiLangTokenizer not loaded",
                ])),
            )
            .sendLogs("WAFtsMultiLangTokenizer not loaded");
      var l;
      if (a && r("justknobx")._("2148")) {
        var c = Array.from(a.tokenize(t)),
          d = c.map(function (e) {
            return y(e, n);
          });
        d.length === 0
          ? (l = [])
          : d.length === 1
            ? (l = d[0])
            : (l = d.reduce(function (e, t) {
                return e.filter(function (e) {
                  return t
                    .map(function (e) {
                      return e.value;
                    })
                    .includes(e.value);
                });
              }, d[0]));
      } else l = y(t, n);
      var m = C(
          l.flatMap(function (e) {
            return e.value;
          }),
        ),
        p = C(
          l
            .filter(function (e) {
              return e.keyword === t;
            })
            .flatMap(function (e) {
              return e.value;
            }),
        ),
        _ = x(
          C(
            o("WAWebRecentEmojiCollection").RecentEmojiCollection.map(
              function (e) {
                return e.id;
              },
            ),
          ),
          m,
        ),
        f = x(C(u), m),
        g = x($(_, f), p);
      return $(g, k(p), _, f, k(m));
    }
    var E = r("once")(function () {
      var e = new Map(),
        t = 0;
      for (var n of c) {
        var r = o("WAWebEmoji").EmojiUtil.getEmojisInCategory(n);
        for (var a of r) (e.set(a, t), t++);
      }
      return e;
    });
    function k(e) {
      var t = E();
      return e.toSorted(function (e, n) {
        var r,
          o,
          a = (r = t.get(e)) != null ? r : Number.MAX_SAFE_INTEGER,
          i = (o = t.get(n)) != null ? o : Number.MAX_SAFE_INTEGER;
        return a - i;
      });
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return D([], "shortKeyword");
          var t = e[0];
          e.length > 1 && (t = babelHelpers.extends({}, t, e[1]));
          var n = yield s.load(),
            o = new n(),
            a;
          return (
            r("justknobx")._("2148")
              ? (a = Object.entries(t).flatMap(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = t.toLowerCase(),
                    a = Array.from(o.tokenize(r));
                  return a.map(function (e) {
                    return {
                      value: n,
                      keyword: e,
                      shortKeyword: e.substring(0, 5),
                    };
                  });
                }))
              : (a = Object.entries(t).flatMap(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = t.toLowerCase(),
                    o = r.substring(0, 5);
                  return { value: n, keyword: r, shortKeyword: o };
                })),
            D(a, "shortKeyword")
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
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
    function x() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.length === 0
        ? []
        : t.length === 1
          ? t[0]
          : t.reduce(function (e, t) {
              return e.filter(function (e) {
                return t.includes(e);
              });
            }, t[0]);
    }
    function $() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return Array.from(new Set(t.flat(1)));
    }
    ((l.emojiSearch = h), (l.emojiLocaleDictsToTrie = I));
  },
  98,
);
