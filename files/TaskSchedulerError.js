__d(
  "TaskSchedulerError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r,
          o = "Run timeout exceeded: " + t + ":" + n;
        return (
          (r = e.call(this, o) || this),
          (r.name = "TaskSchedulerTimeoutError"),
          (r.message = o),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.TaskSchedulerTimeoutError = e;
  },
  66,
);
