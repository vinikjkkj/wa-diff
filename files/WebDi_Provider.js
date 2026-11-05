__d(
  "WebDi.Provider",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = !1),
          (this.phantom = null),
          (this.provides = e),
          (this.build = t),
          (this.lazy = n));
      }
      var t = e.prototype;
      return (
        (t.toString = function () {
          return (
            "Provider(" + this.provides.id + (this.lazy ? ", lazy" : "") + ")"
          );
        }),
        e
      );
    })();
    function l(t) {
      return new e(t.provides, t.build, !0);
    }
    ((i.ProviderImpl = e), (i.lazy = l));
  },
  66,
);
