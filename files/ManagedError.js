__d(
  "ManagedError",
  [],
  function (t, n, r, o, a, i) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t != null ? t : "") || this),
          t != null ? (r.message = t) : (r.message = ""),
          (r.innerError = n),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = e;
  },
  66,
);
