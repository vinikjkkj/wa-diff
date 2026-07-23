__d(
  "CometErrorLogging",
  [
    "ClientConsistency",
    "Env",
    "ErrorGuard",
    "ErrorSetup",
    "ErrorTransport",
    "JSErrorLoggingConfig",
    "SiteData",
    "WebSession",
    "currentCometRouterInstance",
    "getTopMostRoute",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      if (
        ((e || (e = r("ErrorGuard"))).skipGuardGlobal(
          (s || (s = r("Env"))).nocatch,
        ),
        (u = t),
        r("JSErrorLoggingConfig").sampleWeight != null)
      ) {
        var n;
        r("ErrorSetup").setup(
          {
            appId: (n = r("JSErrorLoggingConfig")).appId,
            cavalry_lid: u,
            client_revision: r("SiteData").client_revision,
            extra: n.extra,
            loggingFramework: "comet",
            projectBlocklist: n.projectBlocklist,
            push_phase: r("SiteData").push_phase,
            report_source: n.report_source,
            report_source_ref: n.report_source_ref,
            sample_weight:
              r("JSErrorLoggingConfig").sampleWeight != null
                ? r("JSErrorLoggingConfig").sampleWeight
                : 0,
            script_path: "/comet",
            server_revision: r("SiteData").server_revision,
            spin: r("SiteData").spin,
            web_session_id: o("WebSession").getId(),
          },
          o("ErrorTransport").log,
          function () {
            var e,
              t = "/comet",
              n =
                (e = o(
                  "currentCometRouterInstance",
                ).get_THIS_IS_NOT_WHAT_YOU_WANT()) == null
                  ? void 0
                  : e.getCurrentRouterState();
            if (n != null) {
              var a,
                i = r("getTopMostRoute")(n);
              t = (a = i.tracePolicy) != null ? a : t;
            }
            return {
              additional_client_revisions:
                r("ClientConsistency").getAdditionalRevisions(),
              script_path: t,
            };
          },
        );
      }
    }
    (r("ErrorSetup").preSetup(), (l.init = c));
  },
  98,
);
