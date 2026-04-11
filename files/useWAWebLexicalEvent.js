__d(
  "useWAWebLexicalEvent",
  [
    "Lexical",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t, n, r) {
      "use no forget";
      o("useWAWebListener").useListener(
        e && e.getRootElement(),
        "keydown",
        function (r) {
          e && (t == null || r.key === t) && n(r, e);
        },
        { capture: r },
      );
    }
    function c(e, t, n, a) {
      var i = o("react-compiler-runtime").c(8),
        l = a === void 0 ? o("Lexical").COMMAND_PRIORITY_HIGH : a,
        u;
      i[0] !== n
        ? ((u = function (t, r) {
            var e = n(t, r);
            return (
              e &&
                t instanceof KeyboardEvent &&
                (t.preventDefault(), t.stopPropagation()),
              e
            );
          }),
          (i[0] = n),
          (i[1] = u))
        : (u = i[1]);
      var c = r("useWAWebStableCallback")(u),
        d,
        m;
      (i[2] !== t || i[3] !== e || i[4] !== c || i[5] !== l
        ? ((d = function () {
            if (e) return e.registerCommand(t, c, l);
          }),
          (m = [e, t, c, l]),
          (i[2] = t),
          (i[3] = e),
          (i[4] = c),
          (i[5] = l),
          (i[6] = d),
          (i[7] = m))
        : ((d = i[6]), (m = i[7])),
        s(d, m));
    }
    ((l.useLexicalKeydownEvent = u), (l.useLexicalCommandListener = c));
  },
  98,
);
