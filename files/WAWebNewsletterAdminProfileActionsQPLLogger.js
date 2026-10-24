__d(
  "WAWebNewsletterAdminProfileActionsQPLLogger",
  ["WAWebNewsletterGatingUtils", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(1026950611, "3558"),
      s = r("qpl")._(1026959530, "3595"),
      u = r("qpl")._(1026956221, "3743"),
      c = (function () {
        function t(t) {
          var n = t.eventSurface,
            r = t.markerId;
          if (o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled()) {
            var a = Math.round(Math.random() * 1e9),
              i =
                r === 1026950611
                  ? e
                  : r === 1026959530
                    ? s
                    : r === 1026956221
                      ? u
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              r,
                          );
                        })();
            this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(i, {
              annotations: { int: { surface: n } },
              instanceKey: a,
            });
          }
        }
        var n = t.prototype;
        return (
          (n.logSuccess = function () {
            var e;
            (e = this.$1) == null || e.end(2);
          }),
          (n.logFail = function () {
            var e;
            (e = this.$1) == null || e.end(3);
          }),
          (n.logAbort = function () {
            var e;
            (e = this.$1) == null || e.end(105);
          }),
          t
        );
      })();
    l.WAWebNewsletterAdminProfileActionsQPLLogger = c;
  },
  98,
);
