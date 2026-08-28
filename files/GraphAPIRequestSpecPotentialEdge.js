__d(
  "GraphAPIRequestSpecPotentialEdge",
  ["GraphAPIRequestSpec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.edge = function (t) {
          return new (r("GraphAPIRequestSpec"))(
            this.name + "/" + t,
            this.path + "/" + t,
            this.params,
            this.source,
            this.preloadInfo,
            this.priority,
            this.earlyRejectionError,
          );
        }),
        t
      );
    })(r("GraphAPIRequestSpec"));
    l.default = e;
  },
  98,
);
