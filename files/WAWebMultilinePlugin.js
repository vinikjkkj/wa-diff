__d(
  "WAWebMultilinePlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("Lexical").createCommand();
    function s(t) {
      var n = o("react-compiler-runtime").c(3),
        r = t.multiline,
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l;
      n[0] !== i || n[1] !== r
        ? ((l = function () {
            return (
              r &&
                i.update(function () {
                  var t;
                  ((t = o("WAWebLexicalUtils").$getRangeSelection()) == null ||
                    t.insertParagraph(),
                    i.dispatchCommand(e));
                }),
              !0
            );
          }),
          (n[0] = i),
          (n[1] = r),
          (n[2] = l))
        : (l = n[2]);
      var s = l;
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          i,
          o("Lexical").INSERT_LINE_BREAK_COMMAND,
          s,
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          i,
          o("Lexical").INSERT_PARAGRAPH_COMMAND,
          s,
        ),
        null
      );
    }
    ((l.NEW_PARAGRAPH_COMMAND = e), (l.MultilinePlugin = s));
  },
  98,
);
