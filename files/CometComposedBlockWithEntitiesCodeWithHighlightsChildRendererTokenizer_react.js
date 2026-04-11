__d(
  "CometComposedBlockWithEntitiesCodeWithHighlightsChildRendererTokenizer.react",
  ["prismThemeUtils", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.language,
        i = t.parentToken,
        l = t.theme,
        s = t.tokens,
        d;
      if (n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== s) {
        d = [];
        for (var m = 0; m < s.length; m++) {
          var p = s[m];
          if (typeof p == "string")
            i == null
              ? d.push(p)
              : d.push(u.jsx(u.Fragment, { children: p }, m));
          else {
            var _ = p.content;
            (Array.isArray(_) || (_ = [_]),
              d.push(
                u.createElement(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("prismThemeUtils").getXStyleForPrismTheme(
                        l,
                        a,
                        p.type,
                        i == null ? void 0 : i.type,
                      ),
                    ),
                    { key: m },
                  ),
                  u.jsx(c, {
                    language: a,
                    parentToken: p,
                    theme: l,
                    tokens: _,
                  }),
                ),
              ));
          }
        }
        ((n[0] = a), (n[1] = i), (n[2] = l), (n[3] = s), (n[4] = d));
      } else d = n[4];
      return d;
    }
    l.default = c;
  },
  98,
);
