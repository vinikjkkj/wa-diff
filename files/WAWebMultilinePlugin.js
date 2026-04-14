__d(
  "WAWebMultilinePlugin",
  [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("Lexical").createCommand();
    function s(t) {
      var n = t.multiline,
        r = o("LexicalComposerContext").useLexicalComposerContext(),
        a = r[0],
        i = function () {
          return (
            n &&
              a.update(function () {
                var t;
                ((t = o("WAWebLexicalUtils").$getRangeSelection()) == null ||
                  t.insertParagraph(),
                  a.dispatchCommand(e));
              }),
            !0
          );
        };
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").INSERT_LINE_BREAK_COMMAND,
          i,
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          a,
          o("Lexical").INSERT_PARAGRAPH_COMMAND,
          i,
        ),
        null
      );
    }
    ((l.NEW_PARAGRAPH_COMMAND = e), (l.MultilinePlugin = s));
  },
  98,
);
