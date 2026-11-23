__d(
  "WAWebOnEnterPlugin",
  ["Lexical", "LexicalComposerContext", "useWAWebLexicalEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.enterIsNewLine,
        n = e.onEnter,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0];
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").KEY_ENTER_COMMAND,
          function (e) {
            if (!e) return !1;
            var r = e.ctrlKey || e.altKey || e.shiftKey;
            return t
              ? !r && !e.metaKey
                ? !1
                : (n == null || n(e), !0)
              : r
                ? !1
                : (n == null || n(e), !0);
          },
          o("Lexical").COMMAND_PRIORITY_NORMAL,
        ),
        null
      );
    }
    l.default = e;
  },
  98,
);
