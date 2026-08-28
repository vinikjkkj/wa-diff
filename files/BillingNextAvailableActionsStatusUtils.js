__d(
  "BillingNextAvailableActionsStatusUtils",
  [
    "fbt",
    "BillingNextActionsAdCreationActionFunction",
    "BillingNextBestActionAdCreationBanner",
    "BillingNextBestActionApplyDSLBoostBanner",
    "BillingNextBestActionAutoReloadBanner",
    "BillingNextBestActionBackupPMBanner",
    "BillingNextBestActionBusinessVerificationBanner",
    "BillingNextBestActionUpdateASLBanner",
    "BillingNextBestActionUpgradeToPostpayBanner",
    "XMDSImage.react",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        bannerStyle: {
          borderStartStartRadius: "x1obq294",
          borderStartEndRadius: "x5a5i1n",
          borderEndEndRadius: "xde0f50",
          borderEndStartRadius: "x15x8krk",
          $$css: !0,
        },
      };
    function d(e, t) {
      switch (e) {
        case "COMPLETE_BUSINESS_VERIFICATION":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionBusinessVerificationBanner")(t),
            ),
          );
        case "CREATE_AD":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionAdCreationBanner")(t),
            ),
          );
        case "ENABLE_AUTO_RELOAD":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionAutoReloadBanner")(t),
            ),
          );
        case "ADD_BACKUP_PAYMENT_METHOD":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionBackupPMBanner")(t),
            ),
          );
        case "UPDATE_ACCOUNT_SPEND_LIMIT":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionUpdateASLBanner")(t),
            ),
          );
        case "INCREASE_ACCOUNT_SPEND_LIMIT":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionUpdateASLBanner")(t),
            ),
          );
        case "TURN_ON_MONTHLY_RESETS":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionUpdateASLBanner")(t),
            ),
          );
        case "APPLY_DSL_BOOST":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionApplyDSLBoostBanner")(t),
            ),
          );
        case "UPGRADE_TO_POSTPAY":
          return u.jsx(
            r("XMDSImage.react"),
            babelHelpers.extends(
              { isDecorative: !0, xstyle: c.bannerStyle },
              r("BillingNextBestActionUpgradeToPostpayBanner")(t),
            ),
          );
        default:
          return null;
      }
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n, r) {
      var o,
        a = t.asl_usage_percent,
        i = t.dsl_usage_percent;
      switch ((r === void 0 && (r = !1), e)) {
        case "COMPLETE_BUSINESS_VERIFICATION":
          return s._(
            /*BTDS*/ "Keep your account safe by verifying your business",
          );
        case "CREATE_AD":
          return s._(/*BTDS*/ "Next, create an ad to promote your business");
        case "ENABLE_AUTO_RELOAD":
          return r
            ? s._(/*BTDS*/ "Next, turn on auto refill to keep ads running")
            : s._(/*BTDS*/ "Next, turn on auto reload to keep ads running");
        case "ADD_BACKUP_PAYMENT_METHOD":
          return s._(
            /*BTDS*/ "Next, add a backup payment method to keep ads running",
          );
        case "UPDATE_ACCOUNT_SPEND_LIMIT":
          return a === "100%"
            ? s._(
                /*BTDS*/ "Start running ads again by increasing your spending limit",
              )
            : s._(
                /*BTDS*/ "Avoid ad pauses by increasing your account spending limit",
              );
        case "INCREASE_ACCOUNT_SPEND_LIMIT":
          return s._(/*BTDS*/ "Increase account spending limit?");
        case "TURN_ON_MONTHLY_RESETS":
          return s._(
            /*BTDS*/ "Set up monthly resets for your account spending limit",
          );
        case "APPLY_DSL_BOOST":
          return i === "100%"
            ? s._(/*BTDS*/ "Start running ads again by verifying your card")
            : s._(/*BTDS*/ "Avoid ad pauses by verifying your card");
        case "UPGRADE_TO_POSTPAY":
          return n != null &&
            (o = n.billing_terms_automatic_payments) != null &&
            (o = o.use_automatic_payments) != null &&
            o.read()
            ? s._(
                /*BTDS*/ "Run ads without prepaying by setting up automatic payments",
              )
            : s._(
                /*BTDS*/ "Run ads without prepaying by setting up automatic billing",
              );
        default:
          return;
      }
    }
    function p(e, t) {
      var n = t.asl,
        r = t.asl_usage_percent,
        a = t.dsl,
        i = t.dsl_usage_percent;
      switch (e) {
        case "COMPLETE_BUSINESS_VERIFICATION":
          if (a != null)
            return s._(
              /*BTDS*/ "Help us prevent fraud by verifying that you\u2019re connected to your business. Verifying your business may also increase the amount you can spend on ads per day from {daily spending limit} to a higher amount. This can prevent your future ads from pausing.",
              [s._param("daily spending limit", a)],
            );
          break;
        case "CREATE_AD":
          return s._(
            /*BTDS*/ "Use Meta ads to help increase online sales, drive in-store traffic and reach new customers.",
          );
        case "ENABLE_AUTO_RELOAD":
          return s._(
            /*BTDS*/ "Avoid ad pauses by automatically adding money when your available funds run low.",
          );
        case "ADD_BACKUP_PAYMENT_METHOD":
          return s._(
            /*BTDS*/ "Avoid ad pauses by adding a backup payment method to your account. It will only be charged if Meta is unable to charge your default payment method.",
          );
        case "UPDATE_ACCOUNT_SPEND_LIMIT":
          return r === "100%"
            ? s._(
                /*BTDS*/ "Your ads have paused because you reached your {account spending limit} limit. Start running ads again by increasing your account spending limit.",
                [s._param("account spending limit", n)],
              )
            : s._(
                /*BTDS*/ "You\u2019ve spent {account spend limit used percentage} of your {account spending limit} limit. Avoid ad pauses by increasing your account spending limit.",
                [
                  s._param("account spend limit used percentage", r),
                  s._param("account spending limit", n),
                ],
              );
        case "INCREASE_ACCOUNT_SPEND_LIMIT":
          return s._(
            /*BTDS*/ "If you're reaching your limit often, you may want to increase it to better reflect your typical spending and avoid interruptions to your ads.",
          );
        case "TURN_ON_MONTHLY_RESETS":
          return s._(
            /*BTDS*/ "To keep ads running smoothly in the future, you can automatically reset your amount spent on the 1st of each month.",
          );
        case "APPLY_DSL_BOOST":
          return i === "100%"
            ? s._(
                /*BTDS*/ "Your ads have paused because you reached your {daily spending limit} daily spending limit. Your ads should resume tomorrow when this limit resets. {newline}{newline}If you verify your card, the amount you can spend per day may increase from {daily spending limit} to a higher amount.",
                [
                  s._param("daily spending limit", a),
                  s._param("newline", u.jsx(o("react-strict-dom").html.br, {})),
                ],
              )
            : s._(
                /*BTDS*/ "You've almost reached your {daily spending limit} daily spending limit. If you verify your card, the amount you can spend per day may increase from {daily spending limit} to a higher amount.",
                [s._param("daily spending limit", a)],
              );
        case "UPGRADE_TO_POSTPAY":
          return s._(
            /*BTDS*/ "Get billed for ads as they run instead of manually paying in advance. To get started, you\u2019ll just need a payment method that supports recurring payments.",
          );
        default:
          return;
      }
    }
    function _(e, t) {
      return e === !0
        ? t === !0
          ? {
              actionProps: { configName: "BUSINESS_VERIFICATION_XFAC" },
              event: "onWizard",
              label: s._(/*BTDS*/ "Verify"),
            }
          : null
        : {
            actionProps: { configName: "BUSINESS_VERIFICATION" },
            event: "onWizard",
            label: s._(/*BTDS*/ "Verify"),
          };
    }
    function f(e, t, n) {
      var r,
        o = t.is_mobile_app_or_msite,
        a = t.passes_mobile_bv_gating;
      switch (e) {
        case "COMPLETE_BUSINESS_VERIFICATION":
          return _(o, a);
        case "CREATE_AD":
          return {
            actionProps: { actionName: "CREATE_AD" },
            event: "onDone",
            label: s._(/*BTDS*/ "Create ad"),
          };
        case "ENABLE_AUTO_RELOAD":
          return {
            actionProps: { configName: "AUTO_RELOAD", shouldTurnOn: !0 },
            event: "onWizard",
            label: s._(/*BTDS*/ "Continue"),
          };
        case "ADD_BACKUP_PAYMENT_METHOD":
          return {
            actionProps: { configName: "ADD_PM" },
            event: "onWizard",
            label: s._(/*BTDS*/ "Add payment method"),
          };
        case "UPDATE_ACCOUNT_SPEND_LIMIT":
          return {
            actionProps: { configName: "UPDATE_ACCOUNT_SPEND_LIMIT" },
            event: "onWizard",
            label: s._(/*BTDS*/ "Increase spending limit"),
          };
        case "INCREASE_ACCOUNT_SPEND_LIMIT":
          return {
            actionProps: {
              configName: "UPDATE_ACCOUNT_SPEND_LIMIT",
              increaseSpendLimit: !0,
            },
            event: "onWizard",
            label: s._(/*BTDS*/ "Increase limit"),
          };
        case "TURN_ON_MONTHLY_RESETS":
          return {
            actionProps: {
              configName: "UPDATE_ACCOUNT_SPEND_LIMIT",
              increaseSpendLimit: !1,
              turnOnMonthlyResets: !0,
            },
            event: "onWizard",
            label: s._(/*BTDS*/ "Set up monthly resets"),
          };
        case "APPLY_DSL_BOOST":
          return {
            actionProps: {
              configName: "RESOLVE_SDC_FRICTION",
              paymentMethodID: null,
              verificationIntent: "DSL_BOOST",
            },
            event: "onWizard",
            label: s._(/*BTDS*/ "Verify card"),
          };
        case "UPGRADE_TO_POSTPAY":
          return {
            actionProps: { configName: "INTRO_AUTOMATIC_BILLING" },
            event: "onWizard",
            label:
              n != null &&
              (r = n.billing_terms_automatic_payments) != null &&
              (r = r.use_automatic_payments) != null &&
              r.read()
                ? s._(/*BTDS*/ "Set up automatic payments")
                : s._(/*BTDS*/ "Set up automatic billing"),
          };
        default:
          return;
      }
    }
    function g(e, t, n, r, o) {
      if ((o === void 0 && (o = !1), e.length === 0)) return null;
      var a = e[0],
        i = d(a, n),
        l = p(a, t),
        u = m(a, t, r, o),
        c = f(a, t, r),
        _ = s._(/*BTDS*/ "Not now");
      return i != null && l != null && u != null && c != null
        ? {
            banner: i,
            body: l,
            headline: u,
            primaryButtonProps: c,
            secondaryButtonLabel: _,
          }
        : null;
    }
    function h(e, t) {
      if (e != null) {
        var n = e.primaryButtonProps.actionProps;
        if (n.configName !== void 0)
          return function () {
            return t(e.primaryButtonProps.event, {
              configName: n.configName,
              increaseSpendLimit: n.increaseSpendLimit,
              paymentIntent: "OTHER",
              paymentMethodID: n.paymentMethodID,
              shouldTurnOn: n.shouldTurnOn,
              turnOnMonthlyResets: n.turnOnMonthlyResets,
              verificationIntent: n.verificationIntent,
            });
          };
        switch (n.actionName) {
          case "CREATE_AD":
            return function () {
              return (
                r("BillingNextActionsAdCreationActionFunction")(),
                t(e.primaryButtonProps.event)
              );
            };
        }
      }
      return null;
    }
    ((l.getNextActionContent = g), (l.getNextActionFunctionBody = h));
  },
  226,
);
