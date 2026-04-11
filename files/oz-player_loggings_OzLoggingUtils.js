__d(
  "oz-player/loggings/OzLoggingUtils",
  ["oz-player/shims/ozReportUnexpectedError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.getOperationLogger(t).start();
      try {
        return n(r);
      } catch (e) {
        throw (r.setError(e), e);
      } finally {
        r.log();
      }
    }
    function s(e, t, n, o, a) {
      (o === void 0 && (o = function () {}),
        a === void 0 && (a = function () {}));
      var i = t.getOperationLogger(n).start();
      (o(i),
        e
          .then(
            function (e) {
              (a(i), i.log());
            },
            function (e) {
              (a(i), i.setError(e), i.log());
            },
          )
          .catch(function (e) {
            r("oz-player/shims/ozReportUnexpectedError")(e, n + " logger");
          }));
    }
    ((l.executeOperationAndLog = e), (l.monitorPromiseAndLogOperation = s));
  },
  98,
);
