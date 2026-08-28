__d(
  "TokenizeUtil",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = /[ ]+/g,
      s = /[^ ]+/g,
      u = new RegExp("[^ " + m() + "]+|" + p(), "g"),
      c = new RegExp(p(), "g"),
      d = 1e3;
    function m() {
      return ".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30FB\u3001\u3002\u3008-\u3011\u3014-\u301F\uFF1A-\uFF1F\uFF01-\uFF0F\uFF3B-\uFF40\uFF5B-\uFF65\u2E2E\u061F\u066A-\u066C\u061B\u060C\u060D\uFD3E\uFD3F\u1801\u0964\u104A\u104B\u2010-\u2027\u2030-\u205E\xA1-\xB1\xB4-\xB8\xBA\xBB\xBF";
    }
    function p() {
      return "[" + m() + "]";
    }
    var _ = {},
      f = {
        a: "\u0430 \xE0 \xE1 \xE2 \xE3 \xE4 \xE5 \u0101",
        b: "\u0431",
        c: "\u0446 \xE7 \u010D",
        d: "\u0434 \xF0 \u010F \u0111",
        e: "\u044D \u0435 \xE8 \xE9 \xEA \xEB \u011B \u0113",
        f: "\u0444",
        g: "\u0433 \u011F \u0123",
        h: "\u0445 \u0127",
        i: "\u0438 \xEC \xED \xEE \xEF \u0131 \u012B",
        j: "\u0439",
        k: "\u043A \u0138 \u0137",
        l: "\u043B \u013E \u013A \u0140 \u0142 \u013C",
        m: "\u043C",
        n: "\u043D \xF1 \u0148 \u0149 \u014B \u0146",
        o: "\u043E \xF8 \xF6 \xF5 \xF4 \xF3 \xF2",
        p: "\u043F",
        r: "\u0440 \u0159 \u0155",
        s: "\u0441 \u015F \u0161 \u017F",
        t: "\u0442 \u0165 \u0167 \xFE",
        u: "\u0443 \u044E \xFC \xFB \xFA \xF9 \u016F \u016B",
        v: "\u0432",
        y: "\u044B \xFF \xFD",
        z: "\u0437 \u017E",
        ae: "\xE6",
        oe: "\u0153",
        ts: "\u0446",
        ch: "\u0447",
        ij: "\u0133",
        sh: "\u0448",
        ss: "\xDF",
        ya: "\u044F",
      };
    for (var g in f)
      for (var h = f[g].split(" "), y = 0; y < h.length; y++) _[h[y]] = g;
    function C(e) {
      return e.replace(c, " ");
    }
    function b(t) {
      return t.replace(e, " ");
    }
    function v(e) {
      for (var t = e.toLowerCase(), n = "", r = "", o = t.length; o--; )
        ((r = t.charAt(o)), (n = (_[r] || r) + n));
      return b(n);
    }
    function S(e, t) {
      t === void 0 && (t = s);
      for (var n = [], r = t.exec(e); r; ) {
        var o = r[0];
        (n.push(o), (r = t.exec(e)));
      }
      return n;
    }
    function R(e, t) {
      t === void 0 && (t = s);
      var n = {},
        r = 0;
      return function (a, i) {
        if (!Object.prototype.hasOwnProperty.call(n, a)) {
          r >= d && ((n = {}), (r = 0));
          var o = v(a),
            l = e(o);
          ((n[a] = {
            value: a,
            flatValue: o,
            tokens: S(l, t),
            isPrefixQuery: !!l && l[l.length - 1] !== " ",
          }),
            r++);
        }
        return (
          i != null &&
            i !== !1 &&
            n[a].sortedTokens === void 0 &&
            ((n[a].sortedTokens = n[a].tokens.slice()),
            n[a].sortedTokens.sort(function (e, t) {
              return t.length - e.length;
            })),
          n[a]
        );
      };
    }
    var L = R(C),
      E = R(function (e) {
        return e;
      }, u);
    function k(e, t, n) {
      var o = e === "query" || e === "query_punc",
        a = e === "aligned",
        i = e === "query_punc" ? E : L,
        l = i(t, e === "prefix"),
        s = e === "prefix" ? r("nullthrows")(l.sortedTokens) : l.tokens,
        u = i(n).tokens,
        c = {},
        d = l.isPrefixQuery && (o || a) ? s.length - 1 : null,
        m = function (n, r) {
          for (var t = 0; t < u.length; ++t) {
            var i = u[t];
            if (
              !c[t] &&
              (i === n ||
                ((((o || a) && r === d) || e === "prefix") &&
                  i.indexOf(n) === 0))
            )
              return (c[t] = !0);
            if (a && !c[t]) return !1;
          }
          return !1;
        };
      return !!(s.length && s.every(m));
    }
    function I(e, t) {
      return k("exact", e, t);
    }
    function T(e, t) {
      return k("prefix", e, t);
    }
    function D(e, t) {
      return k("query", e, t);
    }
    function x(e, t) {
      return k("query_punc", e, t);
    }
    function $(e, t) {
      return k("aligned", e, t);
    }
    var P = {
        collapse: b,
        flatten: v,
        parse: L,
        parseIncludingPunctuations: E,
        getPunctuation: p,
        makeParse: R,
        isExactMatch: I,
        isQueryMatch: D,
        isQueryMatchIncludingPunctuations: x,
        isAlignedMatch: $,
        isPrefixMatch: T,
        tokenize: S,
      },
      N = P;
    l.default = N;
  },
  98,
);
