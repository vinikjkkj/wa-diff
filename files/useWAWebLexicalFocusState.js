__d(
  "useWAWebLexicalFocusState",
  [
    "Lexical",
    "WAWebLexicalUtils",
    "react",
    "useLazyRef",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      var n = r("useLazyRef")(function () {
          return o("WAWebLexicalUtils").isFocused(e);
        }),
        a = r("useWAWebStableCallback")(function (e, r) {
          n.current !== e && ((n.current = e), t(e, r));
        });
      s(
        function () {
          var t;
          a(o("WAWebLexicalUtils").isFocused(e));
          var n = e.registerCommand(
              (t = o("Lexical")).FOCUS_COMMAND,
              function (e) {
                return (a(!0, e), !1);
              },
              t.COMMAND_PRIORITY_HIGH,
            ),
            r = e.registerCommand(
              t.BLUR_COMMAND,
              function (e) {
                return (a(!1, e), !1);
              },
              t.COMMAND_PRIORITY_HIGH,
            );
          return function () {
            (n(), r());
          };
        },
        [e, a],
      );
    }
    l.useLexicalFocusStateListener = u;
  },
  98,
);
