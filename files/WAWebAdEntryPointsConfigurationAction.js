__d(
  "WAWebAdEntryPointsConfigurationAction",
  ["Promise", "WAWebAdEntryPointsConfigurationModel"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return (
        o(
          "WAWebAdEntryPointsConfigurationModel",
        ).notifyAdEntryPointsConfigurationLoaded(t),
        t.type === "success"
          ? o(
              "WAWebAdEntryPointsConfigurationModel",
            ).setAdEntryPointsConfiguration({
              entryPoints: t.entryPoints,
              locale: t.locale,
            })
          : t.type === "recovery-required"
            ? o(
                "WAWebAdEntryPointsConfigurationModel",
              ).setAdEntryPointsConfiguration(
                "failed-to-load-recovery-required",
              )
            : (t.type,
              t.expiredConfiguration != null &&
                o(
                  "WAWebAdEntryPointsConfigurationModel",
                ).setAdEntryPointsConfiguration({
                  entryPoints: t.expiredConfiguration,
                  locale: t.locale,
                })),
        (e || (e = n("Promise"))).resolve()
      );
    }
    l.loadedAdEntryPointsConfiguration = s;
  },
  98,
);
