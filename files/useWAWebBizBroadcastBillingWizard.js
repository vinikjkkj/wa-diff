__d(
  "useWAWebBizBroadcastBillingWizard",
  [
    "WALogger",
    "WAWebBizBroadcastEmailOnboardingGate",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFetchAdAccountToken",
    "WAWebGetAdsRelayEnvironment",
    "WAWebShowBillingWizard",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = b || (b = o("react")),
      S = v.useCallback,
      R = v.useState;
    function L(t, a) {
      var i = R(!1),
        l = i[0],
        b = i[1],
        v = S(
          (function () {
            var i = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n, i, l) {
                if (t == null) {
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[useWAWebBizBroadcastBillingWizard] Cannot open wizard: payment account ID is null",
                        ])),
                    )
                    .sendLogs("business-broadcast-billing-wizard-null-account"),
                    a != null &&
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.billingWizardFailed(
                        a,
                        "null_payment_account",
                      ));
                  return;
                }
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[useWAWebBizBroadcastBillingWizard] Opening MFT wizard for account ID: ",
                      ", wizard: ",
                      "",
                    ])),
                  t,
                  n,
                ),
                  a != null &&
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.billingWizardOpened(
                      a,
                      { wizard_name: n },
                    ),
                  b(!0));
                try {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastBillingWizard] Fetching access token for account ID: ",
                        "",
                      ])),
                    t,
                  );
                  var C = yield o("WAWebFetchAdAccountToken").fetchToken();
                  if (C.type !== "success") {
                    (o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebBizBroadcastBillingWizard] Failed to fetch access token for account ID: ",
                            ", error: ",
                            "",
                          ])),
                        t,
                        C.type,
                      )
                      .sendLogs(
                        "business-broadcast-billing-wizard-token-failed",
                      ),
                      a != null &&
                        o(
                          "WAWebBusinessBroadcastUserJourneyLogger",
                        ).BusinessBroadcastUserJourneyLogger.billingWizardFailed(
                          a,
                          "token_fetch_failed",
                        ),
                      b(!1));
                    var v = {
                      phase: "token_fetch_failed",
                      returnCode: "closed",
                      success: !1,
                    };
                    l == null || l(v);
                    return;
                  }
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastBillingWizard] Access token fetched successfully for account ID: ",
                        "",
                      ])),
                    t,
                  );
                  var S = yield r("WAWebGetAdsRelayEnvironment")(C.token),
                    R = yield o(
                      "WAWebBizBroadcastEmailOnboardingGate",
                    ).maybeOpenEmailOnboarding(S, t);
                  if (!R) {
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[useWAWebBizBroadcastBillingWizard] Email onboarding cancelled for account ID: ",
                          "",
                        ])),
                      t,
                    ),
                      b(!1));
                    var L = {
                      phase: "email_onboarding_cancelled",
                      returnCode: "closed",
                      success: !1,
                    };
                    l == null || l(L);
                    return;
                  }
                  var E = yield r("WAWebShowBillingWizard")({
                    entryPoint: void 0,
                    flowID: "broadcast_add_funds_flow",
                    onCloseCb: function (n) {
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebBizBroadcastBillingWizard] MFT wizard closed for account ID: ",
                            ", return code: ",
                            "",
                          ])),
                        t,
                        n,
                      ),
                        b(!1));
                      var e = {
                        phase: "wizard_closed",
                        returnCode: n,
                        success: n === "complete",
                      };
                      (e.success
                        ? o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[useWAWebBizBroadcastBillingWizard] Billing wizard completed successfully for account ID: ",
                                "",
                              ])),
                            t,
                          )
                        : o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[useWAWebBizBroadcastBillingWizard] Billing wizard failed or cancelled for account ID: ",
                                ", return code: ",
                                "",
                              ])),
                            t,
                            n,
                          ),
                        l == null || l(e));
                    },
                    paymentAccountID: t,
                    relayEnvironment: S,
                    wizardName: n,
                    wizardPropsJSON: i,
                  });
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastBillingWizard] Launching wizard UI for account ID: ",
                        "",
                      ])),
                    t,
                  ),
                    E());
                } catch (e) {
                  var k = String(e);
                  (e instanceof Error
                    ? o("WALogger")
                        .ERROR(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "[useWAWebBizBroadcastBillingWizard] Exception when showing billing wizard for account ID: ",
                              "",
                            ])),
                          t,
                        )
                        .catching(e)
                        .sendLogs("business-broadcast-billing-wizard-exception")
                    : o("WALogger")
                        .ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "[useWAWebBizBroadcastBillingWizard] Exception when showing billing wizard for account ID: ",
                              ", error: ",
                              "",
                            ])),
                          t,
                          k,
                        )
                        .sendLogs(
                          "business-broadcast-billing-wizard-exception",
                        ),
                    a != null &&
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.billingWizardFailed(
                        a,
                        "wizard_exception",
                      ),
                    b(!1));
                  var I = {
                    phase: "wizard_exception",
                    returnCode: "closed",
                    success: !1,
                  };
                  l == null || l(I);
                }
              },
            );
            return function (e, t, n) {
              return i.apply(this, arguments);
            };
          })(),
          [t, a],
        ),
        L = S(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (e.wizardName == null) {
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[useWAWebBizBroadcastBillingWizard] Cannot open wizard: wizard name is null",
                        ])),
                    )
                    .sendLogs("business-broadcast-billing-wizard-null-name");
                  return;
                }
                yield v(e.wizardName, e.wizardPropsJSON, t);
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [v],
        ),
        E = S(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (a != null &&
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.addFundsWizardOpened(a),
                  yield v("ADD_PM", null, e));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [v, a],
        );
      return { isAddingFunds: l, openAddFundsWizard: E, openBillingWizard: L };
    }
    l.default = L;
  },
  98,
);
