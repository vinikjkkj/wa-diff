__d(
  "CAAWebBloksQPLUtils",
  ["QuickPerformanceLogger", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var o = r("qpl")._(2295576, "932");
      (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
        o,
        { string: { login_type: t, login_source: n } },
        { instanceKey: 0 },
      );
    }
    function u(t, n) {
      var o = r("qpl")._(2295576, "932");
      (s(t, n),
        (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
          o,
          { string: { error_info: "no_error" } },
          { instanceKey: 0 },
        ),
        e.markerEnd(o, 2));
    }
    function c(t, n, o) {
      var a = r("qpl")._(2295576, "932");
      (s(t, n),
        (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
          a,
          { string: { error_info: o } },
          { instanceKey: 0 },
        ),
        e.markerEnd(a, 87));
    }
    function d(t, n, o) {
      var a = r("qpl")._(2295576, "932");
      (s(t, n),
        (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
          a,
          { string: { error_info: o } },
          { instanceKey: 0 },
        ),
        e.markerEnd(a, 3));
    }
    ((l.getQPLMarkerEndLoginTTISuccess = u),
      (l.getQPLMarkerEndLoginTTIError = c),
      (l.getQPLMarkerEndLoginTTIFail = d));
  },
  98,
);
