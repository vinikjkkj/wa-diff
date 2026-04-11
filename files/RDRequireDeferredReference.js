__d(
  "RDRequireDeferredReference",
  ["RequireDeferredReference"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.disableForSSR_DO_NOT_USE = function () {
          this.$RDRequireDeferredReference$p_1 = !1;
        }));
      var n = t.prototype;
      return (
        (n.isAvailableInSSR_DO_NOT_USE = function () {
          return this.constructor.$RDRequireDeferredReference$p_1;
        }),
        t
      );
    })(r("RequireDeferredReference"));
    ((e.$RDRequireDeferredReference$p_1 = !0), (l.default = e));
  },
  98,
);
