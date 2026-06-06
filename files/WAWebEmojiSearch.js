__d(
  "WAWebEmojiSearch",
  [
    "WALogger",
    "WATrie",
    "WAWebABProps",
    "WAWebEmoji",
    "WAWebRecentEmojiCollection",
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
        "\u{1F602}",
        "\u{1F923}",
        "\u2764",
        "\u{1F97A}",
        "\u{1F970}",
        "\u{1F618}",
        "\u{1F62D}",
        "\u{1F60D}",
        "\u{1F601}",
        "\u{1F64F}",
        "\u{1F605}",
        "\u{1F606}",
        "\u{1F60A}",
        "\u{1F642}",
        "\u{1F614}",
        "\u{1F973}",
        "\u{1F612}",
        "\u263A",
        "\u{1F382}",
        "\u{1F44D}",
        "\u{1F496}",
        "\u{1F622}",
        "\u{1F644}",
        "\u{1F60F}",
        "\u{1F60E}",
        "\u{1F48B}",
        "\u{1F61E}",
        "\u{1F609}",
        "\u{1F44F}",
        "\u{1F643}",
        "\u{1F621}",
        "\u{1F600}",
        "\u{1F604}",
        "\u{1F607}",
        "\u{1F929}",
        "\u{1F60C}",
        "\u{1F914}",
        "\u{1F339}",
        "\u{1F60B}",
        "\u{1F497}",
        "\u{1F917}",
        "\u{1F495}",
        "\u{1F494}",
        "\u{1F61A}",
        "\u2639",
        "\u{1F603}",
        "\u{1F389}",
        "\u{1F525}",
        "\u{1F974}",
        "\u{1F633}",
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
        _ = D(
          C(
            o("WAWebRecentEmojiCollection").RecentEmojiCollection.map(
              function (e) {
                return e.id;
              },
            ),
          ),
          m,
        ),
        f = D(C(u), m),
        g = D(x(_, f), p);
      return x(g, k(p), _, f, k(m));
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
    async function I(e) {
      if (e.length === 0) return T([], "shortKeyword");
      var t = e[0];
      e.length > 1 && (t = babelHelpers.extends({}, t, e[1]));
      var n = await s.load(),
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
        T(a, "shortKeyword")
      );
    }
    function T(e, t) {
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
    function D() {
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
    function x() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return Array.from(new Set(t.flat(1)));
    }
    ((l.emojiSearch = h), (l.emojiLocaleDictsToTrie = I));
  },
  98,
);
