__d(
  "BillingAddFundsAwaitPaymentCompletionState",
  [
    "fbt",
    "BillingAwaitPaymentCompletionScreen",
    "BillingCurrencyAmount",
    "BillingWizardDisplayState",
    "MetaBrandCheckmarkCircleFilled24Icon.react",
    "XMDSIcon.react",
    "XPaymentsCareAdsPaymentsUnicornSupportControllerRouteBuilder",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "add_funds_await_payment_completion_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID,
                n = e.paymentStatusEntID;
              return {
                eventContext: "ADD_FUNDS",
                paymentAccountID: t,
                statusEntID: n != null ? n : "",
              };
            }),
            (t.query = o("BillingAwaitPaymentCompletionScreen").query),
            (t.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                t.paymentAmount,
              ),
              a = function (t, n, r) {
                return n === "WHATSAPP_SMB"
                  ? s._(
                      /*BTDS*/ "You now have {total prepay balance available to use} available for your marketing messages.",
                      [s._param("total prepay balance available to use", t)],
                    )
                  : r === !0
                    ? s._(
                        /*BTDS*/ "It may take a few minutes to appear in your account and to run new and existing ads.",
                      )
                    : s._(
                        /*BTDS*/ "Your funds may not appear in your account right away.",
                      );
              },
              i = function (o) {
                var r;
                return n(
                  t.showAutoReloadOption === !0
                    ? "onSuccessWithAutoReloadOption"
                    : "onSuccess",
                  {
                    status: {
                      body: a(null, null, o),
                      headline: s._(
                        /*BTDS*/ "{amount user added} successfully added",
                        [
                          s._param(
                            "amount user added",
                            (r = e == null ? void 0 : e.toString()) != null
                              ? r
                              : "0",
                          ),
                        ],
                      ),
                      type: "SUCCESS",
                    },
                  },
                );
              },
              l = r(
                "XPaymentsCareAdsPaymentsUnicornSupportControllerRouteBuilder",
              )
                .buildUri({
                  ad_account_id: t.paymentAccountID.toString(),
                  support_topic: "INACTIONABLE_RISK_DISABLED",
                })
                .toString(),
              c = function (t) {
                return n("onSuccess", {
                  status: {
                    body: s._(
                      /*BTDS*/ "You may be eligible to have all of your payment methods restored. Submit a support request to have your account reviewed. You can still run ads using prepaid funds during this process.",
                    ),
                    greyBoxBody: s._(
                      /*BTDS*/ "You now have {total prepay balance available to use} in funds. If you had active ad campaigns, they will resume running automatically.",
                      [s._param("total prepay balance available to use", t)],
                    ),
                    greyBoxHeadline: s._(
                      /*BTDS*/ "You can now run ads with prepaid funds",
                    ),
                    greyBoxPosition: "top",
                    headline: s._(
                      /*BTDS*/ "Want to restore all payment methods?",
                    ),
                    overrideIcon: u.jsx(r("XMDSIcon.react"), {
                      alt: s._(/*BTDS*/ "Success"),
                      color: "positive",
                      icon: r("MetaBrandCheckmarkCircleFilled24Icon.react"),
                      size: 28,
                    }),
                    overridePrimaryButton: {
                      href: l,
                      label: s._(/*BTDS*/ "Request review"),
                    },
                    overrideSecondaryButton: {
                      action: function () {
                        return n("onDone");
                      },
                      label: s._(/*BTDS*/ "Not now"),
                      reduceEmphasis: !0,
                    },
                    overrideShowIcon: !1,
                    showIconInGreyBox: !0,
                    textAlign: "start",
                    type: "SUCCESS",
                  },
                });
              },
              d = function () {
                return n("onFailure", {
                  status: {
                    body: s._(
                      /*BTDS*/ "We weren't able to add funds to your account, please try again.",
                    ),
                    headline: s._(/*BTDS*/ "Couldn't Add Funds"),
                    title: s._(/*BTDS*/ "Couldn't Add Funds"),
                    type: "ERROR",
                  },
                });
              },
              m = function (t) {
                return n("onTimeout", { status: t });
              };
            return u.jsx(
              o("BillingAwaitPaymentCompletionScreen")
                .BillingAwaitPaymentCompletionScreen,
              babelHelpers.extends({}, t, {
                onFailure: d,
                onNext: i,
                onSecureBillingNext: c,
                onTimeout: m,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = c;
  },
  226,
);
