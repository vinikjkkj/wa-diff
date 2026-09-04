__d(
  "WAWebWamFalcoBatchRouter",
  [
    "WALogger",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoBatchLoggerLoader",
    "WAWebWamFalcoMigrationBatches",
    "WAWebWamFalcoModes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    function u(t) {
      try {
        if (
          o("WAWebWamFalcoABProps").getWamFalcoMode() !==
          o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO
        )
          return { sink: "wam", reason: "mode" };
        if (t.wamChannel !== "regular")
          return { sink: "wam", reason: "channel" };
        var n = o("WAWebWamFalcoMigrationBatches").FALCO_MIGRATION_BATCHES[
          t.id
        ];
        if (n == null) return { sink: "wam", reason: "unbatched" };
        var a = t.getEventNameForFalco();
        if (a == null) return { sink: "wam", reason: "unnamed" };
        var i = a.startsWith("wam_") ? a.slice(4) : a,
          l = o("WAWebWamFalcoABProps").getWamFalcoBlocklistEventNames();
        if (l.has(i) || l.has(a)) return { sink: "wam", reason: "blocklisted" };
        if (!o("WAWebWamFalcoBatchLoggerLoader").hasWamFalcoBatchLogger(n))
          return { sink: "wam", reason: "logger_unavailable" };
        var u = o(
          "WAWebWamFalcoBatchLoggerLoader",
        ).getWamFalcoBatchLoggerIfLoaded(n);
        return u == null
          ? (s.has(n) ||
              (s.add(n),
              o("WAWebWamFalcoBatchLoggerLoader").loadWamFalcoBatchLogger(n)),
            { sink: "wam", reason: "logger_loading" })
          : u.hasLogger(t.id)
            ? { sink: "falco", batch: n, logger: u }
            : { sink: "wam", reason: "logger_missing" };
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] failed to resolve WAM_OR_FALCO routing for event ",
                  "",
                ])),
              t.id,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("wam_falco_wam_or_falco_routing_error", {
              sampling: 0.1,
            }),
          { sink: "wam", reason: "config_error" }
        );
      }
    }
    l.resolveWamFalcoRoute = u;
  },
  98,
);
