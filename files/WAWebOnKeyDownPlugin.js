__d(
  "WAWebOnKeyDownPlugin",
  ["LexicalComposerContext", "react-compiler-runtime", "useWAWebLexicalEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.onKeyDown,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i;
      return (
        t[0] !== n
          ? ((i = function (t) {
              n == null || n(t);
            }),
            (t[0] = n),
            (t[1] = i))
          : (i = t[1]),
        o("useWAWebLexicalEvent").useLexicalKeydownEvent(a, null, i),
        null
      );
    }
    l.default = e;
  },
  98,
);
