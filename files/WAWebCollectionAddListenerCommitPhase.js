__d(
  "WAWebCollectionAddListenerCommitPhase",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useInsertionEffect,
      c = s.useRef,
      d = !0,
      m = 0,
      p = { phase: m };
    function _(e, t) {
      var n = c(!1);
      return (
        u(
          function () {
            (e != null || t != null) && ((d = !0), (n.current = !0));
          },
          [e, t],
        ),
        n
      );
    }
    function f(e) {
      return e.current ? ((e.current = !1), g()) : null;
    }
    function g() {
      return (d && ((d = !1), m++, (p = { phase: m })), p);
    }
    ((l.useCollectionAddListenerCommit = _), (l.takeLayoutPhaseToken = f));
  },
  98,
);
