__d(
  "BillingHubHelpTrayActionsUtils",
  ["BillingWizardRootUPLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "3728309477453541",
      s = "1011071613345531",
      u = "7124078524279431",
      c = "688163402810968",
      d = "billing_wizard";
    function m(e, t, n, o, a, i) {
      (i == null ||
        i.logDebugEvent("help_tray_dispatch_failed", {
          entrypoint: t,
          error_message: n,
          event_context: e,
          platform: o,
          source: a,
        }),
        a === "billing_wizard_get_help_button" &&
          (r("BillingWizardRootUPLogger") == null ||
            r("BillingWizardRootUPLogger").logDebugEvent(
              "help_tray_dispatch_failed",
              {
                entrypoint: t,
                error_message: n,
                event_context: e,
                platform: o,
                source: a,
              },
            )));
    }
    function p(e, t, n, o, a, i, l) {
      var s;
      if (
        (l == null ||
          l.logDebugEvent("help_tray_dispatch_triggered", {
            entrypoint: t,
            event_context: e,
            is_ads_manager_app:
              (s = o == null ? void 0 : o.toString()) != null ? s : "unknown",
            issue_description: n != null ? n : "",
            platform: a,
            source: i,
          }),
        i === "billing_wizard_get_help_button")
      ) {
        var u;
        r("BillingWizardRootUPLogger") == null ||
          r("BillingWizardRootUPLogger").logDebugEvent(
            "help_tray_dispatch_triggered",
            {
              entrypoint: t,
              event_context: e,
              is_ads_manager_app:
                (u = o == null ? void 0 : o.toString()) != null ? u : "unknown",
              issue_description: n != null ? n : "",
              platform: a,
              source: i,
            },
          );
      }
    }
    ((l.DISABLED_AD_ACCOUNT_LBD_ISSUE_ID = e),
      (l.FAILED_PAYMENT_LBD_ISSUE_ID = s),
      (l.VERIFY_PAYMENT_METHOD_LBD_ISSUE_ID = u),
      (l.UNAUTHORIZED_CHARGES_LBD_ISSUE_ID = c),
      (l.BILLING_WIZARD_ENTRYPOINT = d),
      (l.logHelpTrayFailureEvent = m),
      (l.logHelpTrayDispatchEvent = p));
  },
  98,
);
