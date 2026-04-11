__d(
  "useWAWebLexicalMenuController",
  [
    "Lexical",
    "LexicalComposerContext",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t = o("LexicalComposerContext").useLexicalComposerContext(),
        n = t[0],
        r = s(null),
        a;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (t) {
            var e;
            return (
              t.preventDefault(),
              t.stopPropagation(),
              (e = r.current) == null || e.goUp(),
              !1
            );
          }),
          (e[0] = a))
        : (a = e[0]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          n,
          o("Lexical").KEY_ARROW_UP_COMMAND,
          a,
        ));
      var i;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (t) {
            var e;
            return (
              t.stopPropagation(),
              (e = r.current) == null || e.goDown(),
              !1
            );
          }),
          (e[1] = i))
        : (i = e[1]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          n,
          o("Lexical").KEY_ARROW_DOWN_COMMAND,
          i,
        ));
      var l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function () {
              var e;
              return ((e = r.current) == null || e.selectItem(), !1);
            }),
            (e[2] = l))
          : (l = e[2]),
        o("useWAWebLexicalEvent").useLexicalCommandListener(
          n,
          o("Lexical").KEY_ENTER_COMMAND,
          l,
        ),
        r
      );
    }
    l.useLexicalMenuController = u;
  },
  98,
);
