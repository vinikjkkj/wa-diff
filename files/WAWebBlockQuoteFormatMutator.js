__d(
  "WAWebBlockQuoteFormatMutator",
  [
    "WABidi",
    "WAWebABProps",
    "WAWebBlockQuoteMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = String.raw(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(
            ["[^S\n](?! +)"],
            ["[^\\S\\n](?! +)"],
          )),
      ),
      m = new RegExp(
        String.raw(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose(
              ["^>(", "[^\n]*$(?:\n|$))"],
              ["^>(", "[^\\n]*$(?:\\n|$))"],
            )),
          d,
        ),
        "gm",
      ),
      p = new RegExp(">" + d, "y"),
      _ = new WeakMap(),
      f = r("WAWebCreateRegexMutator")(m, 1),
      g = (function (e) {
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
                    : C(s);
              ((i = {
                blockDirection: u,
                nextLineStart: s.index + s[0].length,
              }),
                _.set(
                  s,
                  babelHelpers.extends({}, h(s, a), {
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
              s = l === void 0 ? !1 : l,
              u = o.selectable,
              d = u === void 0 ? !1 : u,
              m =
                (e = _.get(n)) != null
                  ? e
                  : babelHelpers.extends({}, h(n), { direction: y(n) }),
              p = m.direction,
              f = m.joinsNextLine,
              g = m.joinsPreviousLine;
            return c.jsx(r("WAWebBlockQuoteMutatorComponent.react"), {
              selectable: d,
              inline: i,
              joinsNextLine: f,
              joinsPreviousLine: g,
              dir: p,
              quoted: s,
              children: t,
            });
          }),
          t
        );
      })(f);
    g.unformatDecorations = { pre: ">" };
    function h(e, t) {
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
        joinsNextLine: a < Math.min(r.length, t) && R(r, a),
        joinsPreviousLine: n > 0 && R(r, S(r, n)),
      };
    }
    function y(e) {
      var t;
      return (t = C(e)) != null ? t : o("WABidi").bidiDir(e[1]);
    }
    function C(e) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "expanded_formatting_multiline_quotes",
        )
      )
        return null;
      var t = e.index,
        n = e.input;
      return v(n, b(n, t));
    }
    function b(e, t) {
      for (var n = t, r = S(e, n); n > 0 && R(e, r); ) ((n = r), (r = S(e, n)));
      return n;
    }
    function v(e, t) {
      for (var n = t; n < e.length && R(e, n); ) {
        var r = e.indexOf("\n", n),
          a = o("WABidi").bidiDir(e.slice(n + 1, r === -1 ? e.length : r));
        if (a != null) return a;
        if (r === -1) break;
        n = r + 1;
      }
      return null;
    }
    function S(e, t) {
      return t < 2 ? 0 : e.lastIndexOf("\n", t - 2) + 1;
    }
    function R(e, t) {
      return ((p.lastIndex = t), p.test(e));
    }
    var L = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(f);
    ((l.BlockQuote = g),
      (l.getAdjacentQuoteLines = h),
      (l.getQuoteDirection = y),
      (l.BlockQuoteWithEmpty = L));
  },
  98,
);
