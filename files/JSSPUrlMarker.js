__d(
  "JSSPUrlMarker",
  ["JSSPTraceBaseTransformer", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.transform = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r,
                o,
                a,
                i = n.urlData;
              return (
                i == null ||
                  ((e.metadata = (r = e.metadata) != null ? r : {}),
                  (e.metadata.urlWhenStart =
                    (o = i.urlBeforeTraceStarts) != null ? o : ""),
                  (e.metadata.urlWhenEnd =
                    (a = i.urlAfterTraceEnds) != null ? a : "")),
                e
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
