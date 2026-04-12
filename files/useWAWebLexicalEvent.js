__d(
  "useWAWebLexicalEvent",
  ["Lexical", "react", "useWAWebListener", "useWAWebStableCallback"],
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
      a === void 0 && (a = o("Lexical").COMMAND_PRIORITY_HIGH);
      var i = r("useWAWebStableCallback")(function (e, t) {
        var r = n(e, t);
        return (
          r &&
            e instanceof KeyboardEvent &&
            (e.preventDefault(), e.stopPropagation()),
          r
        );
      });
      s(
        function () {
          if (e) return e.registerCommand(t, i, a);
        },
        [e, t, i, a],
      );
    }
    ((l.useLexicalKeydownEvent = u), (l.useLexicalCommandListener = c));
  },
  98,
);
