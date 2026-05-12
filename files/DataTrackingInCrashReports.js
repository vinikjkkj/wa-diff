__d(
  "DataTrackingInCrashReports",
  [
    "ALSessionTrackingInCrashReports",
    "BootloadTrackingInCrashReports",
    "GraphAPITrackingInCrashReports",
    "InteractionTrackingInCrashReports",
    "RelayResponseSizeTrackingInCrashReports",
    "ResponsiveStatsTrackingInCrashReports",
    "cr:27524",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (o(
        "ALSessionTrackingInCrashReports",
      ).initALSessionTrackingInCrashReports(),
        o(
          "InteractionTrackingInCrashReports",
        ).initInteractionTrackingInCrashReports(),
        o(
          "GraphAPITrackingInCrashReports",
        ).initGraphAPITrackingInCrashReports(),
        o(
          "BootloadTrackingInCrashReports",
        ).initBootloadTrackingInCrashReports(),
        o(
          "ResponsiveStatsTrackingInCrashReports",
        ).initResponsiveStatsTrackingInCrashReports(),
        o(
          "RelayResponseSizeTrackingInCrashReports",
        ).initRelayResponseSizeTrackingInCrashReports(),
        n("cr:27524") == null ||
          n("cr:27524").onReady(function (e) {
            return e.initReactComponentTrackingInCrashReports();
          }));
    }
    l.initDataTrackingInCrashReports = e;
  },
  98,
);
