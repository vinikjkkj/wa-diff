__d(
  "WAWebContactBlockedErrorAction",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t) || this),
          (r.name = "ContactBlocked"),
          (r.contact = n),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    l.default = e;
  },
  98,
);
