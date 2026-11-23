__d(
  "WAWebEmojiSearch",
  [
    "WATrie",
    "WAWebEmoji",
    "WAWebRecentEmojiCollection",
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
    async function L(t) {
      if (t.length === 0) return E([], "shortKeyword");
      var n = t[0];
      t.length > 1 && (n = babelHelpers.extends({}, n, t[1]));
      var o = await e.load(),
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
        E(i, "shortKeyword")
      );
    }
    function E(e, t) {
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
