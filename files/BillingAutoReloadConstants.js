__d(
  "BillingAutoReloadConstants",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        autoReloadAddCardBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Add a card that supports recurring payments to set up auto refill.",
              )
            : s._(
                /*BTDS*/ "Add a card that supports recurring payments to set up auto reload.",
              );
        },
        autoReloadAddCardHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill requires a debit or credit card")
            : s._(/*BTDS*/ "Auto reload requires a debit or credit card");
        },
        autoReloadDesc: function (t) {
          return s._(
            /*BTDS*/ "Automatically add money to your available funds whenever they run low.",
          );
        },
        autoReloadDescWithSuggestedAmounts: s._(
          /*BTDS*/ "Keep ads running smoothly by adding funds when your funds balance drops to a certain amount.",
        ),
        autoReloadDetailedDesc: function (t, n) {
          return n
            ? s._(
                /*BTDS*/ "Auto refill can help keep your ads running by automatically adding money to your prepaid funds whenever they run low. {link to learn more about auto refill}",
                [
                  s._param(
                    "link to learn more about auto refill",
                    u.jsx(t, {
                      href: "https://www.facebook.com/business/help/333798826401061",
                      inline: !0,
                      label: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Auto reload can help keep your ads running by automatically adding money to your prepaid funds whenever they run low. {link to learn more about auto reload}",
                [
                  s._param(
                    "link to learn more about auto reload",
                    u.jsx(t, {
                      href: "https://www.facebook.com/business/help/333798826401061",
                      inline: !0,
                      label: s._(/*BTDS*/ "Learn more"),
                    }),
                  ),
                ],
              );
        },
        autoReloadFailedBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "To prevent ads from pausing, try turning auto refill back on.",
              )
            : s._(
                /*BTDS*/ "To prevent ads from pausing, try turning auto reload back on.",
              );
        },
        autoReloadFailedBodyV3: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Auto refill failed. Try turning auto refill on again. You may want to use a different payment method.",
              )
            : s._(
                /*BTDS*/ "Auto reload failed. Try turning auto reload on again. You may want to use a different payment method.",
              );
        },
        autoReloadFailedCTAV3: s._(/*BTDS*/ "Turn on"),
        autoReloadFailedHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill failed")
            : s._(/*BTDS*/ "Auto reload failed");
        },
        autoReloadHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill available funds")
            : s._(/*BTDS*/ "Auto reload available funds");
        },
        autoReloadMaxAmountHelperText: function (t) {
          return s._(/*BTDS*/ "Maximum {reload threshold}", [
            s._param("reload threshold", t),
          ]);
        },
        autoReloadMinAmountHelperText: function (t) {
          return s._(/*BTDS*/ "Minimum {reload threshold}", [
            s._param("reload threshold", t),
          ]);
        },
        autoReloadMinMaxAmountHelperText: function (t, n) {
          return s._(
            /*BTDS*/ "Minimum {Minimum amount in currency}, maximum {Maximum amount in currency}",
            [
              s._param("Minimum amount in currency", t),
              s._param("Maximum amount in currency", n),
            ],
          );
        },
        autoReloadOffBody: function (t) {
          return s._(/*BTDS*/ "Turn on to automatically add funds.");
        },
        autoReloadOffBodyV3: s._(
          /*BTDS*/ "Keep ads running by adding funds automatically when your balance runs low.",
        ),
        autoReloadOffCTAV3: function (t) {
          return t
            ? s._(/*BTDS*/ "Set up auto refill")
            : s._(/*BTDS*/ "Set up auto reload");
        },
        autoReloadOffHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill is off")
            : s._(/*BTDS*/ "Auto reload is off");
        },
        autoReloadOffRefundBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Since ads are paused while we process your refund, auto refill is off. You can turn it on when the refund is complete.",
              )
            : s._(
                /*BTDS*/ "Since ads are paused while we process your refund, auto reload is off. You can turn it on when the refund is complete.",
              );
        },
        autoReloadOffRefundBodyRevamp: function (t) {
          return t
            ? s._(
                /*BTDS*/ "A refund is processing. Ads are paused and auto refill is off. Turn it on when the refund is complete.",
              )
            : s._(
                /*BTDS*/ "A refund is processing. Ads are paused and auto reload is off. Turn it on when the refund is complete.",
              );
        },
        autoReloadOnBody: function (t, n) {
          return s._(
            /*BTDS*/ "{reload amount} will be added each time your funds are at or below {reload threshold}.",
            [s._param("reload amount", t), s._param("reload threshold", n)],
          );
        },
        autoReloadOnBodyV3: function (t, n, r, o, a, i) {
          return o && a
            ? i
              ? s._(
                  /*BTDS*/ "Funds were recently added using auto refill. We'll add {reload amount} in a few hours using {payment method name} if your balance is still below {reload threshold}.",
                  [
                    s._param("reload amount", t),
                    s._param("payment method name", r),
                    s._param("reload threshold", n),
                  ],
                )
              : s._(
                  /*BTDS*/ "Funds were recently added using auto reload. We'll add {reload amount} in a few hours using {payment method name} if your balance is still below {reload threshold}.",
                  [
                    s._param("reload amount", t),
                    s._param("payment method name", r),
                    s._param("reload threshold", n),
                  ],
                )
            : s._(
                /*BTDS*/ "When your balance drops below {reload threshold}, we'll add {reload amount} using {payment method name}.",
                [
                  s._param("reload threshold", n),
                  s._param("reload amount", t),
                  s._param("payment method name", r),
                ],
              );
        },
        autoReloadOnHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill is on")
            : s._(/*BTDS*/ "Auto reload is on");
        },
        autoReloadPaymentFailedHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill payment failed")
            : s._(/*BTDS*/ "Auto reload payment failed");
        },
        autoReloadRetryScheduledBody: function (t, n) {
          return s._(
            /*BTDS*/ "Resolve the issue with your bank or payment provider and then retry your payment. If you don't retry, we'll retry around {retry time in local timezone} on {retry date in local timezone}.",
            [
              s._param("retry time in local timezone", t),
              s._param("retry date in local timezone", n),
            ],
          );
        },
        autoReloadRetryScheduledBodyV3: function (t, n, r) {
          return s._(
            /*BTDS*/ "Couldn\u2019t charge {payment method name}. Resolve the issue with your payment provider, then select Retry now. We'll try again around {retry time in local timezone} on {retry date in local timezone}.",
            [
              s._param("payment method name", t),
              s._param("retry time in local timezone", n),
              s._param("retry date in local timezone", r),
            ],
          );
        },
        autoReloadReviewAmountHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill amount")
            : s._(/*BTDS*/ "Auto reload amount");
        },
        autoReloadReviewBannerV3CoolOffPeriod: function (t, n, r) {
          return r
            ? s._(
                /*BTDS*/ "{payment method} will be charged in a few hours and {reload amount} will be added to your account. Change auto refill anytime in Billing & payments.",
                [s._param("payment method", t), s._param("reload amount", n)],
              )
            : s._(
                /*BTDS*/ "{payment method} will be charged in a few hours and {reload amount} will be added to your account. Change auto reload anytime in Billing & payments.",
                [s._param("payment method", t), s._param("reload amount", n)],
              );
        },
        autoReloadReviewBannerV3WillChargeNow: function (t, n, r) {
          return r
            ? s._(
                /*BTDS*/ "{payment method} will be charged now and {reload amount} will be added to your account. Change auto refill anytime in Billing & payments.",
                [s._param("payment method", t), s._param("reload amount", n)],
              )
            : s._(
                /*BTDS*/ "{payment method} will be charged now and {reload amount} will be added to your account. Change auto reload anytime in Billing & payments.",
                [s._param("payment method", t), s._param("reload amount", n)],
              );
        },
        autoReloadReviewBannerV3WillNotChargeNow: function (t, n, r) {
          return r
            ? s._(
                /*BTDS*/ "{payment method} won't be charged until your balance drops below {threshold amount}. Change auto refill anytime in Billing & payments.",
                [
                  s._param("payment method", t),
                  s._param("threshold amount", n),
                ],
              )
            : s._(
                /*BTDS*/ "{payment method} won't be charged until your balance drops below {threshold amount}. Change auto reload anytime in Billing & payments.",
                [
                  s._param("payment method", t),
                  s._param("threshold amount", n),
                ],
              );
        },
        autoReloadSettingsTitle: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill settings")
            : s._(/*BTDS*/ "Auto reload settings");
        },
        autoReloadTitle: function (t) {
          return t ? s._(/*BTDS*/ "Auto refill") : s._(/*BTDS*/ "Auto reload");
        },
        body: s._(/*BTDS*/ "Automatically add more funds when they run low."),
        cardNonusableHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "This card doesn't support auto refill")
            : s._(/*BTDS*/ "This card doesn't support auto reload");
        },
        chargeFailureBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Auto refill is off due to a payment issue. To keep your ads running, select a different payment method from your auto refill settings and then try turning auto refill on.",
              )
            : s._(
                /*BTDS*/ "Auto reload is off due to a payment issue. To keep your ads running, select a different payment method from your auto reload settings and then try turning auto reload on.",
              );
        },
        chargeFailureBodyV3: function (t, n) {
          return n
            ? s._(
                /*BTDS*/ "There's an issue with {credential display name}. Choose a different payment method to turn on auto refill.",
                [s._param("credential display name", t)],
              )
            : s._(
                /*BTDS*/ "There's an issue with {credential display name}. Choose a different payment method to turn on auto reload.",
                [s._param("credential display name", t)],
              );
        },
        chargeFailureWithRetryBody: s._(
          /*BTDS*/ "To prevent ads from pausing, resolve the issue with your bank or payment provider and retry your payment from payment settings. If you don't retry, we'll try your payment again later.",
        ),
        chargeFailureWithRetryBodyV3: function (t, n) {
          return s._(
            /*BTDS*/ "Your ads may pause if this isn't resolved. Contact your payment provider, then retry from Billing & payments. If you don't, we'll try again around {retry time in local timezone} on {retry date in local timezone}.",
            [
              s._param("retry time in local timezone", t),
              s._param("retry date in local timezone", n),
            ],
          );
        },
        chargeFailureWithRetryHeadline: function (t) {
          return s._(/*BTDS*/ "We couldn't charge {credit card}", [
            s._param("credit card", t),
          ]);
        },
        chargePendingBody: function (t, n) {
          return n
            ? s._(
                /*BTDS*/ "Once we receive verification from your bank or payment provider, {reload amount} will be added to your account. You can always turn auto refill off or adjust the refill amount in payment settings.",
                [s._param("reload amount", t)],
              )
            : s._(
                /*BTDS*/ "Once we receive verification from your bank or payment provider, {reload amount} will be added to your account. You can always turn auto reload off or adjust the reload amount in payment settings.",
                [s._param("reload amount", t)],
              );
        },
        chargePendingHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill is on and funds are pending")
            : s._(/*BTDS*/ "Auto reload is on and funds are pending");
        },
        chargeSuccessBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "It may take a few minutes for the funds to show in your account. You can adjust or turn off auto refill in payment settings.",
              )
            : s._(
                /*BTDS*/ "It may take a few minutes for the funds to show in your account. You can adjust or turn off auto reload in payment settings.",
              );
        },
        chargeSuccessBodyV3: s._(
          /*BTDS*/ "It may take a few minutes for the funds to appear in your account.",
        ),
        chargeSuccessHeadline: function (t, n) {
          return n
            ? s._(
                /*BTDS*/ "{reload amount} successfully added and auto refill is on",
                [s._param("reload amount", t)],
              )
            : s._(
                /*BTDS*/ "{reload amount} successfully added and auto reload is on",
                [s._param("reload amount", t)],
              );
        },
        chargeSuccessHeadlineV3: function (t) {
          return s._(/*BTDS*/ "{reload amount} successfully added", [
            s._param("reload amount", t),
          ]);
        },
        draftAutoReloadHeadlineRecurringLPM: s._(/*BTDS*/ "Set up UPI AutoPay"),
        draftAutoReloadScreenTitle: s._(/*BTDS*/ "UPI AutoPay"),
        draftBodyRecurringLPM: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Manage anytime from auto refill in payment settings.",
              )
            : s._(
                /*BTDS*/ "Manage anytime from auto reload in payment settings.",
              );
        },
        editSettingsLabel: s._(/*BTDS*/ "Edit settings"),
        failedWithRetryWizardNoticeBody: s._(
          /*BTDS*/ "To prevent ads from pausing, resolve the issue with your bank or payment provider.",
        ),
        failedWizardNoticeBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Auto refill is off due to a payment issue. To keep your ads running, select a different payment method and then try turning auto refill on.",
              )
            : s._(
                /*BTDS*/ "Auto reload is off due to a payment issue. To keep your ads running, select a different payment method and then try turning auto reload on.",
              );
        },
        keepOnButtonLabel: s._(/*BTDS*/ "Keep on"),
        paymentSectionHeadline: s._(/*BTDS*/ "Payment method"),
        recurringLPMReloadMsg: s._(/*BTDS*/ "Reload with this amount"),
        reloadMsg: s._(/*BTDS*/ "Add amount"),
        reloadThresholdMsg: s._(/*BTDS*/ "When funds are at or below"),
        reloadWithThisAmountLabel: s._(/*BTDS*/ "Add this amount"),
        retryNowLabel: s._(/*BTDS*/ "Retry now"),
        retryPaymentWithCardWizardNoticeBody: function (t) {
          return s._(
            /*BTDS*/ "Add {reload amount} to your account by verifying your payment method.",
            [s._param("reload amount", t)],
          );
        },
        retryPaymentWithCardWizardNoticeHeadline: s._(
          /*BTDS*/ "Verify card to retry payment",
        ),
        saveLabel: s._(/*BTDS*/ "Save"),
        setOffFailureBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "We weren\u2019t able to turn off auto refill. Please try again.",
              )
            : s._(
                /*BTDS*/ "We weren\u2019t able to turn off auto reload. Please try again.",
              );
        },
        setOffFailureHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Couldn\u2019t turn off auto refill")
            : s._(/*BTDS*/ "Couldn\u2019t turn off auto reload");
        },
        setOffSuccessBody: s._(
          /*BTDS*/ "We\u2019ll no longer automatically reload your available funds.",
        ),
        setOffSuccessHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill is off")
            : s._(/*BTDS*/ "Auto reload is off");
        },
        setOnFailureBody: function (t) {
          return t
            ? s._(
                /*BTDS*/ "Auto refill is not available right now. Try again later.",
              )
            : s._(
                /*BTDS*/ "Auto reload is not available right now. Try again later.",
              );
        },
        setOnFailureHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Couldn\u2019t turn on auto refill")
            : s._(/*BTDS*/ "Couldn\u2019t turn on auto reload");
        },
        setOnSuccessBody: function (t, n, r, o) {
          return o
            ? s._(
                /*BTDS*/ "When your funds are at or below {reload threshold}, we'll add {reload amount} to your account and charge {credit card}.",
                [
                  s._param("reload threshold", n),
                  s._param("reload amount", t),
                  s._param("credit card", r),
                ],
              )
            : s._(
                /*BTDS*/ "When your available funds are at or below {reload threshold}, we'll add {reload amount} to your available funds and will charge {credit card}.",
                [
                  s._param("reload threshold", n),
                  s._param("reload amount", t),
                  s._param("credit card", r),
                ],
              );
        },
        setOnSuccessHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill is on")
            : s._(/*BTDS*/ "Auto reload is on");
        },
        successHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Auto refill on")
            : s._(/*BTDS*/ "Auto reload on");
        },
        suggestedThresholdAmountHelperText: function (t) {
          return s._(
            /*BTDS*/ "To help optimize ad delivery, set this to {suggested reload threshold amount with currency} or more.",
            [s._param("suggested reload threshold amount with currency", t)],
          );
        },
        turnOffAutoReloadBody: s._(
          /*BTDS*/ "You can manually add funds at any time.",
        ),
        turnOffAutoReloadBodyV3: s._(
          /*BTDS*/ "Your ads may pause if funds run out. You can always add funds manually.",
        ),
        turnOffAutoReloadHeadline: function (t) {
          return t
            ? s._(/*BTDS*/ "Turn off auto refill?")
            : s._(/*BTDS*/ "Turn off auto reload?");
        },
        turnOffButtonLabel: s._(/*BTDS*/ "Turn off"),
        turnOnAutoReload: s._(/*BTDS*/ "Turn on"),
        turnOnPostpayUpsell: s._(/*BTDS*/ "Turn on automatic billing"),
        turnOnPostpayUpsellAutomaticPayments: s._(
          /*BTDS*/ "Turn on automatic payments",
        ),
      },
      d = c;
    l.default = d;
  },
  226,
);
