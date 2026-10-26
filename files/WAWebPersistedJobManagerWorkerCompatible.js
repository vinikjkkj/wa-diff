__d(
  "WAWebPersistedJobManagerWorkerCompatible",
  ["WALogger", "WAWebJobsMigrationGating", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      s = e;
    }
    function c() {
      return (
        s == null &&
          o("WAWebJobsMigrationGating").isJobsManagerDecommissioned() &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[jobs-manager] reached while decommissioned",
                ])),
            )
            .sendLogs("jobs-manager-reached-while-decommissioned"),
        r("nullthrows")(s, "WAWebPersistedJobManager is not initialised")
      );
    }
    function d() {
      return c();
    }
    ((l.setInstance = u), (l.getInstance = c), (l.getJobManager = d));
  },
  98,
);
