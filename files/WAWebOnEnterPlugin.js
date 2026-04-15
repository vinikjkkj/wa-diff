__d(
  "WAWebOnEnterPlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.enterIsNewLine,
        r = e.onEnter,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l;
      return (
        t[0] !== n || t[1] !== r
          ? ((l = function (t) {
              if (!t) return !1;
              var e = t.ctrlKey || t.altKey || t.shiftKey;
              return n
                ? !e && !t.metaKey
                  ? !1
                  : (r == null || r(t), !0)
                : e
                  ? !1
                  : (r == null || r(t), !0);
            }),
            (t[0] = n),
            (t[1] = r),
            (t[2] = l))
          : (l = t[2]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          i,
          o("Lexical").KEY_ENTER_COMMAND,
          l,
          o("Lexical").COMMAND_PRIORITY_NORMAL,
        ),
        null
      );
    }
    l.default = e;
  },
  98,
);
