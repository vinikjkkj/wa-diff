__d(
  "JSSPUrlCollector",
  ["JSSPTraceBaseDataCollector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e) {
      var t = new URL(e),
        n = t.origin + t.pathname;
      return n;
    }
    var u = (function (t) {
      function n() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.onProfilerStarts = async function (n) {
          e.set(n, { urlBeforeTraceStarts: s(document.URL) });
        }),
        (r.onProfilerEnds = async function (n, r, o) {
          var t,
            a = (t = e.get(n)) != null ? t : {};
          return (
            (a.urlAfterTraceEnds = s(document.URL)),
            e.delete(n),
            (o.urlData = a),
            o
          );
        }),
        (r.onProfilerAborts = async function (n) {
          e.delete(n);
        }),
        n
      );
    })(r("JSSPTraceBaseDataCollector"));
    l.default = u;
  },
  98,
);
