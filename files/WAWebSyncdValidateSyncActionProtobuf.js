__d(
  "WAWebSyncdValidateSyncActionProtobuf",
  ["WAWebSyncdError", "WAWebSyncdMetricFatalError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      return (
        (e.validateSyncActionDataProtobuf = function (t, n) {
          var e = n.index,
            r = n.padding,
            a = n.value,
            i = n.version;
          if (!e)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_ACTION_INDEX,
                { collection: t },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)("missing action index")
            );
          if (i == null)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_ACTION_VERSION,
                { collection: t },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing action version",
              )
            );
          return { index: e, value: a, padding: r, version: i };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
