__d(
  "useWAWebLexicalFocusState",
  [
    "Lexical",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(9),
        a;
      n[0] !== e
        ? ((a = function () {
            return o("WAWebLexicalUtils").isFocused(e);
          }),
          (n[0] = e),
          (n[1] = a))
        : (a = n[1]);
      var i = r("useLazyRef")(a),
        l;
      n[2] !== t || n[3] !== i
        ? ((l = function (n, r) {
            i.current !== n && ((i.current = n), t(n, r));
          }),
          (n[2] = t),
          (n[3] = i),
          (n[4] = l))
        : (l = n[4]);
      var u = r("useWAWebStableCallback")(l),
        c,
        d;
      (n[5] !== e || n[6] !== u
        ? ((c = function () {
            var t;
            u(o("WAWebLexicalUtils").isFocused(e));
            var n = e.registerCommand(
                (t = o("Lexical")).FOCUS_COMMAND,
                function (e) {
                  return (u(!0, e), !1);
                },
                t.COMMAND_PRIORITY_HIGH,
              ),
              r = e.registerCommand(
                t.BLUR_COMMAND,
                function (e) {
                  return (u(!1, e), !1);
                },
                t.COMMAND_PRIORITY_HIGH,
              );
            return function () {
              (n(), r());
            };
          }),
          (d = [e, u]),
          (n[5] = e),
          (n[6] = u),
          (n[7] = c),
          (n[8] = d))
        : ((c = n[7]), (d = n[8])),
        s(c, d));
    }
    l.useLexicalFocusStateListener = u;
  },
  98,
);
