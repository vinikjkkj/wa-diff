__d(
  "useWAWebLexicalMenuController",
  ["Lexical", "LexicalComposerContext", "react", "useWAWebLexicalEvent"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u() {
      var e = o("LexicalComposerContext").useLexicalComposerContext(),
        t = e[0],
        n = s(null);
      return (
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          t,
          o("Lexical").KEY_ARROW_UP_COMMAND,
          function (e) {
            var t;
            return (
              e.preventDefault(),
              e.stopPropagation(),
              (t = n.current) == null || t.goUp(),
              !1
            );
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          t,
          o("Lexical").KEY_ARROW_DOWN_COMMAND,
          function (e) {
            var t;
            return (
              e.stopPropagation(),
              (t = n.current) == null || t.goDown(),
              !1
            );
          },
        ),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          t,
          o("Lexical").KEY_ENTER_COMMAND,
          function () {
            var e;
            return ((e = n.current) == null || e.selectItem(), !1);
          },
        ),
        n
      );
    }
    l.useLexicalMenuController = u;
  },
  98,
);
