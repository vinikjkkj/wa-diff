__d(
  "JSSPUrlMarker",
  ["JSSPTraceBaseTransformer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.transform = async function (t, n, r) {
          var e,
            o,
            a,
            i = r.urlData;
          return (
            i == null ||
              ((t.metadata = (e = t.metadata) != null ? e : {}),
              (t.metadata.urlWhenStart =
                (o = i.urlBeforeTraceStarts) != null ? o : ""),
              (t.metadata.urlWhenEnd =
                (a = i.urlAfterTraceEnds) != null ? a : "")),
            t
          );
        }),
        t
      );
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
  },
  98,
);
