__d(
  "WAWebOnKeyDownPlugin",
  ["LexicalComposerContext", "useWAWebLexicalEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.onKeyDown,
        n = o("LexicalComposerContext").useLexicalComposerContext(),
        r = n[0];
      return (
        o("useWAWebLexicalEvent").useLexicalKeydownEvent(r, null, function (e) {
          t == null || t(e);
        }),
        null
      );
    }
    l.default = e;
  },
  98,
);
