__d(
  "WAWebLexicalWAWebMenu.react",
  [
    "WAWebMenu.react",
    "WAWebPerformantMenu.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalMenuController",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = o("useWAWebLexicalMenuController").useLexicalMenuController(),
        r;
      return (
        t[0] !== n || t[1] !== e
          ? ((r = s.jsx(
              o("WAWebMenu.react").WAWebMenu,
              babelHelpers.extends({}, e, {
                size: "medium",
                menuControllerRef: n,
              }),
            )),
            (t[0] = n),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = o("useWAWebLexicalMenuController").useLexicalMenuController(),
        r;
      return (
        t[0] !== n || t[1] !== e
          ? ((r = s.jsx(
              o("WAWebPerformantMenu.react").WDSPerformantMenu,
              babelHelpers.extends({}, e, { menuControllerRef: n }),
            )),
            (t[0] = n),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    ((l.LexicalWAWebMenu = u), (l.LexicalWAWebPerformantMenu = c));
  },
  98,
);
