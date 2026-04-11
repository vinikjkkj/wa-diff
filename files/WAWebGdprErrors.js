__d(
  "WAWebGdprErrors",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "PendingGdprRequestsError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    l.PendingGdprRequestsError = e;
  },
  98,
);
