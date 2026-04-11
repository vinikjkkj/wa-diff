__d(
  "WAWebEditorInitialSelectionPlugin.react",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "react",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = e.selectAll,
        n = t === void 0 ? !1 : t,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i = c(!0),
        l = function () {
          i.current &&
            (a.update(function () {
              var e;
              (e = o("Lexical").$getRoot()) == null || e.selectEnd();
            }),
            (i.current = !1));
        };
      (o("useWAWebLexicalEvent").useLexicalCommandListener(
        a,
        o("Lexical").FOCUS_COMMAND,
        function () {
          return (n || l(), !1);
        },
      ),
        u(
          function () {
            n
              ? o("WAWebLexicalUtils").selectAll(a)
              : o("WAWebLexicalUtils").isFocused(a) && l();
          },
          [a],
        ));
    }
    l.default = d;
  },
  98,
);
