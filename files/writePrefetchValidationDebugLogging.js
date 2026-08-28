__d(
  "writePrefetchValidationDebugLogging",
  [
    "BillingGetObjectDiff",
    "BillingWizardRootUPLogger",
    "replaceValuesWithUndefined",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a,
        i,
        l = JSON.stringify(t),
        s = JSON.stringify(n),
        u = "",
        c = "",
        d = "";
      try {
        ((u = JSON.stringify(
          r("replaceValuesWithUndefined")(r("BillingGetObjectDiff")(t, n)),
        )),
          (c = JSON.stringify(r("replaceValuesWithUndefined")(n))),
          (d = JSON.stringify(r("replaceValuesWithUndefined")(t))));
      } catch (e) {
        (r("BillingWizardRootUPLogger").logDebugEvent(
          "wizard_preloader_failed_to_parse_object_diff",
        ),
          (u = "failed to parse object diff"),
          (c = "failed to parse"),
          (d = "failed to parse"));
      }
      var m =
        (a =
          o == null ||
          (i = o.qe) == null ||
          (i = i.attempt_to_fix_stale_wizard_queries_univser) == null ||
          (i = i.enabled) == null
            ? void 0
            : i.getOrDefault({ do_not_log_exposure_iknowwhatimdoing: !0 })) !=
        null
          ? a
          : !1;
      r("BillingWizardRootUPLogger").logDebugEvent(
        l === s
          ? "wizard_preloader_network_match"
          : "wizard_preloader_network_mismatch",
        {
          is_in_fix_stale_wizard_experiment: String(m),
          objectDiff: u,
          redactedNetworkJson: c,
          redactedOriginalJson: d,
          wizard_name: e != null ? e : "unknown",
        },
      );
    }
    l.default = e;
  },
  98,
);
