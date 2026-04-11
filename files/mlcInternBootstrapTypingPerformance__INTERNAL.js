__d(
  "mlcInternBootstrapTypingPerformance__INTERNAL",
  ["OneTraceQPLLogger", "one-trace", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(e) {
      switch (e.traceType) {
        case "TYPING":
          return r("qpl")._(406397789, "516");
      }
      return null;
    }
    function u() {
      e ||
        ((e = !0),
        r("one-trace").subscribe("trace-start", function (e) {
          o("OneTraceQPLLogger").initQPL(s(e), e);
        }),
        r("one-trace").subscribe("trace-end", function (e) {
          o("OneTraceQPLLogger").logQPL(s(e), e);
        }));
    }
    l.default = u;
  },
  98,
);
