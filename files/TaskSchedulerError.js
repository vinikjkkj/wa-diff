__d(
  "TaskSchedulerError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, "Run timeout exceeded: " + t + ":" + n) || this),
          (r.name = "TaskSchedulerTimeoutError"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.TaskSchedulerTimeoutError = e;
  },
  66,
);
