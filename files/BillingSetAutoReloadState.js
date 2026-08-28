__d(
  "BillingSetAutoReloadState",
  [
    "fbt",
    "BillingAutoReloadConstants",
    "BillingAutoReloadUpsellConstants",
    "BillingAutoReloadUtils",
    "BillingCurrencyAmount",
    "BillingError",
    "BillingPaymentMethodDisplayUtils",
    "BillingSetAutoReloadStateMutation.graphql",
    "BillingSetAutoReloadStateQuery.graphql",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardRootUPLogger",
    "asyncToGeneratorRuntime",
    "formatDate",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e !== void 0 ? e : (e = n("BillingSetAutoReloadStateQuery.graphql")),
      d =
        u !== void 0 ? u : (u = n("BillingSetAutoReloadStateMutation.graphql")),
      m = function (t, n) {
        var e = t.autoReloadSettings,
          a = t.paymentAmount,
          i = t.status,
          l = o("BillingAutoReloadUtils").shouldTurnOnAutoReload(e),
          s = o("BillingCurrencyAmount").getFromPaymentAmountInput(a);
        if (l && s != null && i != null) {
          var u = r(
              "BillingAutoReloadUpsellConstants",
            ).addFundsAndAutoReloadSuccessBody,
            c = r(
              "BillingAutoReloadUpsellConstants",
            ).addFundsAndAutoReloadSuccessHeadline;
          return {
            addFundsAndAutoReloadSuccessStatus: babelHelpers.extends({}, i, {
              body: u(n),
              headline: c(s.toString(), n),
            }),
            addFundsSuccessStatus: i,
          };
        }
        return {
          addFundsAndAutoReloadSuccessStatus: null,
          addFundsSuccessStatus: null,
        };
      },
      p = function (t, n, o, a, i, l, u, c) {
        switch (t) {
          case "SUCCEEDED":
            return babelHelpers.extends(
              {
                body:
                  u === !0
                    ? r("BillingAutoReloadConstants").chargeSuccessBodyV3
                    : r("BillingAutoReloadConstants").chargeSuccessBody(l),
              },
              u === !0
                ? {
                    buttonFullWidth: !0,
                    overrideShowIcon: !1,
                    textAlign: "start",
                  }
                : {},
              {
                headline:
                  u === !0
                    ? r("BillingAutoReloadConstants").chargeSuccessHeadlineV3(n)
                    : r("BillingAutoReloadConstants").chargeSuccessHeadline(
                        n,
                        l,
                      ),
                type: "SUCCESS",
              },
            );
          case "PENDING":
            return {
              body: r("BillingAutoReloadConstants").chargePendingBody(a, l),
              headline: r("BillingAutoReloadConstants").chargePendingHeadline(
                l,
              ),
              type: "SUCCESS",
            };
          case "FAILED": {
            var e =
              u === !0 && c != null
                ? r("BillingAutoReloadConstants").chargeFailureWithRetryBodyV3(
                    r("formatDate")(c, "g:i A"),
                    r("formatDate")(c, "M j"),
                  )
                : r("BillingAutoReloadConstants").chargeFailureWithRetryBody;
            return babelHelpers.extends(
              { body: e },
              u === !0
                ? {
                    buttonFullWidth: !0,
                    overrideShowIcon: !1,
                    textAlign: "start",
                  }
                : {},
              {
                headline: r(
                  "BillingAutoReloadConstants",
                ).chargeFailureWithRetryHeadline(a),
                overridePrimaryButton: { label: s._(/*BTDS*/ "Close") },
                type: "WARNING",
              },
            );
          }
          case "SKIPPED":
          default:
            return {
              body: r("BillingAutoReloadConstants").setOnSuccessBody(
                n,
                o,
                a,
                i,
              ),
              headline: r("BillingAutoReloadConstants").setOnSuccessHeadline(l),
              type: "SUCCESS",
            };
        }
      },
      _ = function (t, n, o, a, i, l, s, u, c) {
        switch (t) {
          case "ENABLED":
            return p(n, o, a, i, l, s, u, c);
          case "FAILED":
            return {
              body:
                u === !0
                  ? r("BillingAutoReloadConstants").chargeFailureBodyV3(i, s)
                  : r("BillingAutoReloadConstants").chargeFailureBody(s),
              headline: r(
                "BillingAutoReloadConstants",
              ).autoReloadFailedHeadline(s),
              type: u === !0 ? "WARNING" : "ERROR",
            };
          default:
            throw new (r("BillingError"))(
              "Unknown auto reload status " +
                (t != null ? t : "null") +
                " after turning on auto reload",
              "client side unknown error",
              {
                event_action: "verify",
                event_result: "failure",
                event_side: "client_side",
              },
              { action: "verify", document_name: "enable_auto_reload" },
              "critical_error",
            );
        }
      },
      f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "set_auto_reload_state_decision"),
            (t.query = c),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentMethodID;
              return { credentialID: t != null ? t : "" };
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.onDecide = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  a,
                  i,
                  l,
                  s = t.gk,
                  u = t.qe,
                  p = t.relay,
                  f = p.commitMutation,
                  g = p.fetchQuery,
                  h =
                    u.billing_autoreload_to_autorefill.show_auto_refill.read(),
                  y = e.autoReloadSettings,
                  C = e.paymentAccountID,
                  b = e.paymentMethodID,
                  v =
                    (n = y == null ? void 0 : y.reloadAmount) != null
                      ? n
                      : e.autoReloadAmount,
                  S =
                    (a = y == null ? void 0 : y.triggerAmount) != null
                      ? a
                      : e.reloadTriggerThreshold,
                  R = m(e, h),
                  L = R.addFundsAndAutoReloadSuccessStatus,
                  E = R.addFundsSuccessStatus;
                if (v == null || S == null)
                  return (
                    r("BillingWizardRootUPLogger").logEvent({
                      event_action: "mutate",
                      event_result: "fail",
                      event_side: "client",
                      extra_data: {
                        auto_reload_status: "SKIPPED",
                        charge_status: "NONE",
                        outcome: "MISSING_AMOUNTS",
                      },
                      target_name: "set_auto_reload_result",
                    }),
                    {
                      event: "onDone",
                      newProps: babelHelpers.extends({}, e, {
                        status:
                          E != null
                            ? E
                            : {
                                body: r(
                                  "BillingAutoReloadConstants",
                                ).setOnFailureBody(h),
                                headline: r(
                                  "BillingAutoReloadConstants",
                                ).setOnFailureHeadline(h),
                                title: r(
                                  "BillingAutoReloadConstants",
                                ).autoReloadTitle(h),
                                type: "ERROR",
                              },
                        useAutoRefill: h,
                      }),
                    }
                  );
                var k = yield g(
                    {
                      options: { fetchPolicy: "network-only" },
                      query: c,
                      queryName: c.params.name,
                      variables: { credentialID: b != null ? b : "" },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  I = o(
                    "BillingPaymentMethodDisplayUtils",
                  ).getPaymentMethodDisplayFromFragment(
                    (i = k.node) == null ? void 0 : i.pm_display,
                  ),
                  T = "ENABLED";
                r("BillingWizardRootUPLogger").appendScreenMetadata({
                  reload_amount: parseFloat(v.asGraphQLInput().amount),
                  reload_threshold: S.asGraphQLInput().amount,
                  reload_update_status: T,
                });
                var D = {
                  attempt_charge: (l = e.attemptCharge) != null ? l : !1,
                  billable_account_payment_legacy_account_id: C,
                  credential_id: b == null ? "0" : b,
                  reload_amount: v.asGraphQLInput(),
                  reload_threshold: S.asGraphQLInput(),
                  status: T,
                  upl_logging_data: babelHelpers.extends(
                    {},
                    r("BillingWizardRootUPLogger").getLoggingData(
                      d.params.name,
                    ),
                  ),
                };
                try {
                  var x,
                    $ = yield f(
                      {
                        mutation: d,
                        mutationName: d.params.name,
                        variables: { input: D },
                      },
                      { event_data: v.asGraphQLInput() },
                    ),
                    P =
                      (x = $.billable_account_auto_reload_update) == null
                        ? void 0
                        : x.status;
                  if (e.attemptCharge === !0) {
                    var N,
                      M,
                      w =
                        (N =
                          (M = $.billable_account_auto_reload_update) == null ||
                          (M = M.charge_response) == null
                            ? void 0
                            : M.charge_status) != null
                          ? N
                          : "UNKNOWN",
                      A = _(
                        P,
                        w,
                        v.toString(),
                        S.toString(),
                        I.toString(),
                        s.MFT_USABILITY_FIXATHON_FLOW_9_1_HOLD_OUT.read(),
                        h,
                        e.inAutoReloadV3Config,
                        e.scheduledRetryTime,
                      );
                    if (
                      (r("BillingWizardRootUPLogger").logEvent({
                        event_action: "mutate",
                        event_result:
                          A.type === "ERROR" || A.type === "WARNING"
                            ? "fail"
                            : "success",
                        event_side: "client",
                        extra_data: {
                          auto_reload_status: P != null ? P : "NULL",
                          charge_status: String(w),
                          outcome: A.type,
                        },
                        target_name: "set_auto_reload_result",
                      }),
                      e.inAutoReloadV3Config === !0)
                    ) {
                      if (P === "FAILED" && A.type === "WARNING")
                        return {
                          event: "onChargeFailure",
                          newProps: babelHelpers.extends({}, e, {
                            status: babelHelpers.extends({}, A, {
                              title: r(
                                "BillingAutoReloadConstants",
                              ).autoReloadTitle(h),
                            }),
                            useAutoRefill: h,
                          }),
                        };
                      if (e.isOnRetryOrFailure !== !0)
                        return {
                          event: "onDone",
                          newProps: babelHelpers.extends({}, e),
                        };
                    }
                    return {
                      event: "onDone",
                      newProps: babelHelpers.extends({}, e, {
                        status: babelHelpers.extends({}, A, {
                          title: r(
                            "BillingAutoReloadConstants",
                          ).autoReloadTitle(h),
                        }),
                        useAutoRefill: h,
                      }),
                    };
                  } else if (P === "ENABLED")
                    return (
                      r("BillingWizardRootUPLogger").logEvent({
                        event_action: "mutate",
                        event_result: "success",
                        event_side: "client",
                        extra_data: {
                          auto_reload_status: "ENABLED",
                          charge_status: "NONE",
                          outcome: "SUCCESS",
                        },
                        target_name: "set_auto_reload_result",
                      }),
                      e.inAutoReloadV3Config === !0
                        ? {
                            event: "onDone",
                            newProps: babelHelpers.extends({}, e),
                          }
                        : {
                            event: "onDone",
                            newProps: babelHelpers.extends({}, e, {
                              status:
                                L != null
                                  ? L
                                  : {
                                      body: r(
                                        "BillingAutoReloadConstants",
                                      ).setOnSuccessBody(
                                        v.toString(),
                                        S.toString(),
                                        I.toString(),
                                        s.MFT_USABILITY_FIXATHON_FLOW_9_1_HOLD_OUT.read(),
                                      ),
                                      headline: r(
                                        "BillingAutoReloadConstants",
                                      ).setOnSuccessHeadline(h),
                                      title: r(
                                        "BillingAutoReloadConstants",
                                      ).autoReloadTitle(h),
                                      type: "SUCCESS",
                                    },
                              useAutoRefill: h,
                            }),
                          }
                    );
                } catch (e) {
                  (r("BillingWizardRootUPLogger").logBillingPayloadError(
                    e.type,
                    e.errorPayload,
                  ),
                    r("BillingWizardRootUPLogger").logEvent({
                      event_action: "mutate",
                      event_result: "fail",
                      event_side: "client",
                      extra_data: {
                        auto_reload_status: "UNKNOWN",
                        charge_status: "NONE",
                        outcome: "ERROR",
                      },
                      target_name: "set_auto_reload_result",
                    }));
                }
                return {
                  event: "onDone",
                  newProps: babelHelpers.extends({}, e, {
                    status:
                      E != null
                        ? E
                        : {
                            body: r(
                              "BillingAutoReloadConstants",
                            ).setOnFailureBody(h),
                            headline: r(
                              "BillingAutoReloadConstants",
                            ).setOnFailureHeadline(h),
                            title: r(
                              "BillingAutoReloadConstants",
                            ).autoReloadTitle(h),
                            type: "ERROR",
                          },
                    useAutoRefill: h,
                  }),
                };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(
        o("BillingWizardDecisionStateWithoutMutation")
          .DecisionStateWithoutMutation,
      );
    l.default = f;
  },
  226,
);
