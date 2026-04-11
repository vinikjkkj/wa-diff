__d(
  "CometInteractionTracingQPLConfigContext",
  ["qpl", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = {
        dialogTraceQPLEvent: r("qpl")._(30605361, "6204"),
        popoverTraceQPLEvent: r("qpl")._(30605361, "6204"),
      },
      p = s.createContext(m);
    function _() {
      return c(p).dialogTraceQPLEvent;
    }
    function f() {
      return c(p).popoverTraceQPLEvent;
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.dialogTraceQPLEvent,
        a = e.popoverTraceQPLEvent,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = { dialogTraceQPLEvent: r, popoverTraceQPLEvent: a }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        u;
      return (
        t[3] !== n || t[4] !== l
          ? ((u = s.jsx(p.Provider, { value: l, children: n })),
            (t[3] = n),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    ((l.defaultInteractionQPLEvents = m),
      (l.useDialogTraceQPLEvent = _),
      (l.usePopoverTraceQPLEvent = f),
      (l.CometInteractionTracingQPLConfigContextProvider = g));
  },
  98,
);
