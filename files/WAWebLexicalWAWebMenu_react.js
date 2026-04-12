__d(
  "WAWebLexicalWAWebMenu.react",
  [
    "WAWebMenu.react",
    "WAWebPerformantMenu.react",
    "react",
    "useWAWebLexicalMenuController",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("useWAWebLexicalMenuController").useLexicalMenuController();
      return s.jsx(
        o("WAWebMenu.react").WAWebMenu,
        babelHelpers.extends({}, e, { size: "medium", menuControllerRef: t }),
      );
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = o("useWAWebLexicalMenuController").useLexicalMenuController();
      return s.jsx(
        o("WAWebPerformantMenu.react").WDSPerformantMenu,
        babelHelpers.extends({}, e, { menuControllerRef: t }),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.LexicalWAWebMenu = u),
      (l.LexicalWAWebPerformantMenu = c));
  },
  98,
);
