__d(
  "WAWebBlockQuoteFormatMutator",
  [
    "WABidi",
    "WAWebABProps",
    "WAWebBlockQuoteFormatRegex",
    "WAWebBlockQuoteMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = new RegExp(
        ">" + o("WAWebBlockQuoteFormatRegex").QUOTE_SPACE_SOURCE,
        "y",
      ),
      c = new WeakMap(),
      d = r("WAWebCreateRegexMutator")(
        o("WAWebBlockQuoteFormatRegex").QUOTE_REGEX,
        1,
      ),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.match = function (n, r, a) {
            var t = e.match.call(this, n),
              i = null;
            for (var l of t) {
              var s = l[4],
                u =
                  i != null && i.nextLineStart === s.index
                    ? i.blockDirection
                    : f(s);
              ((i = {
                blockDirection: u,
                nextLineStart: s.index + s[0].length,
              }),
                c.set(
                  s,
                  babelHelpers.extends({}, p(s, a), {
                    direction: u != null ? u : o("WABidi").bidiDir(s[1]),
                  }),
                ));
            }
            return t;
          }),
          (t.jsx = function (t, n, o) {
            var e,
              a = o.inline,
              i = a === void 0 ? !1 : a,
              l = o.quoted,
              u = l === void 0 ? !1 : l,
              d = o.selectable,
              m = d === void 0 ? !1 : d,
              f =
                (e = c.get(n)) != null
                  ? e
                  : babelHelpers.extends({}, p(n), { direction: _(n) }),
              g = f.direction,
              h = f.joinsNextLine,
              y = f.joinsPreviousLine;
            return s.jsx(r("WAWebBlockQuoteMutatorComponent.react"), {
              selectable: m,
              inline: i,
              joinsNextLine: h,
              joinsPreviousLine: y,
              dir: g,
              quoted: u,
              children: t,
            });
          }),
          t
        );
      })(d);
    m.unformatDecorations = { pre: ">" };
    function p(e, t) {
      if (
        (t === void 0 && (t = 1 / 0),
        !o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_multiline_quotes",
        ))
      )
        return { joinsNextLine: !1, joinsPreviousLine: !1 };
      var n = e.index,
        r = e.input,
        a = n + e[0].length;
      return {
        joinsNextLine: a < Math.min(r.length, t) && C(r, a),
        joinsPreviousLine: n > 0 && C(r, y(r, n)),
      };
    }
    function _(e) {
      var t;
      return (t = f(e)) != null ? t : o("WABidi").bidiDir(e[1]);
    }
    function f(e) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_multiline_quotes",
        )
      )
        return null;
      var t = e.index,
        n = e.input;
      return h(n, g(n, t));
    }
    function g(e, t) {
      for (var n = t, r = y(e, n); n > 0 && C(e, r); ) ((n = r), (r = y(e, n)));
      return n;
    }
    function h(e, t) {
      for (var n = t; n < e.length && C(e, n); ) {
        var r = e.indexOf("\n", n),
          a = o("WABidi").bidiDir(e.slice(n + 1, r === -1 ? e.length : r));
        if (a != null) return a;
        if (r === -1) break;
        n = r + 1;
      }
      return null;
    }
    function y(e, t) {
      return t < 2 ? 0 : e.lastIndexOf("\n", t - 2) + 1;
    }
    function C(e, t) {
      return ((u.lastIndex = t), u.test(e));
    }
    var b = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(d);
    ((l.BlockQuote = m),
      (l.getAdjacentQuoteLines = p),
      (l.getQuoteDirection = _),
      (l.BlockQuoteWithEmpty = b));
  },
  98,
);
