__d(
  "WebDi.Errors",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, o) {
        var a;
        return (
          (a = e.call(this, n) || this),
          (a.name = t),
          (a.message = n != null ? n : ""),
          (a.stack = r("err")(n != null ? n : "").stack),
          o != null && (a.cause = o.cause),
          a
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    l.TaggedError = e;
  },
  98,
);
