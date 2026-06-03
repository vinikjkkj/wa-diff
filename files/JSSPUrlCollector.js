__d(
  "JSSPUrlCollector",
  ["JSSPTraceBaseDataCollector", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e) {
      var t = new URL(e),
        n = t.origin + t.pathname;
      return n;
    }
    var u = (function (t) {
      function r() {
        return t.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(r, t);
      var o = r.prototype;
      return (
        (o.onProfilerStarts = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            e.set(t, { urlBeforeTraceStarts: s(document.URL) });
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (o.onProfilerEnds = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r) {
              var o,
                a = (o = e.get(t)) != null ? o : {};
              return (
                (a.urlAfterTraceEnds = s(document.URL)),
                e.delete(t),
                (r.urlData = a),
                r
              );
            },
          );
          function r(e, n, r) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (o.onProfilerAborts = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            e.delete(t);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        r
      );
    })(r("JSSPTraceBaseDataCollector"));
    l.default = u;
  },
  98,
);
