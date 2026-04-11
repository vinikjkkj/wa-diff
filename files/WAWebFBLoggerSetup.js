__d(
  "WAWebFBLoggerSetup",
  [
    "Env",
    "ErrorGuard",
    "ErrorSetup",
    "ErrorTransport",
    "JSErrorLoggingConfig",
    "SiteData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      (r("ErrorSetup").preSetup(),
        (e || (e = r("ErrorGuard"))).skipGuardGlobal(
          (s || (s = r("Env"))).nocatch,
        ),
        r("ErrorSetup").setup(
          {
            appId: r("JSErrorLoggingConfig").appId,
            client_revision: r("SiteData").client_revision,
            extra: r("JSErrorLoggingConfig").extra,
            loggingFramework: "wa_web",
            projectBlocklist: r("JSErrorLoggingConfig").projectBlocklist,
            report_source: r("JSErrorLoggingConfig").report_source,
            report_source_ref: r("JSErrorLoggingConfig").report_source_ref,
            sample_weight:
              r("JSErrorLoggingConfig").sampleWeight != null
                ? r("JSErrorLoggingConfig").sampleWeight
                : 1,
          },
          o("ErrorTransport").log,
        ));
    }
    l.init = u;
  },
  98,
);
