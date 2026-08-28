__d(
  "BillingAddFundsUtils",
  [
    "fbt",
    "BillingBalanceSectionConstants",
    "BillingPTTSharedUtils",
    "BillingPTTUtils",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = function (t, n, r) {
        return (
          n === "PAYMENT_SETTINGS" && t === "react-native" && r !== "FB_TOKEN"
        );
      },
      c = function (t) {
        var e = t.getOtherAmountDescription,
          n = t.isButtonOneMax,
          o = t.isButtonTwoMax,
          a = t.isLowFutureSpendVariant,
          i = t.selectedButton,
          l = t.shouldUpdateSpanishOrPortuguese,
          u = t.shouldUpdateSpanishOrPortuguesePhase2,
          c = t.taxRate,
          d = r("BillingBalanceSectionConstants").maximumAmount,
          m = r("BillingBalanceSectionConstants").next14DaySpendAmount,
          p = r("BillingBalanceSectionConstants").next7DaySpendAmount;
        switch (i) {
          case "button_one":
            return a === !0
              ? s._(/*BTDS*/ "Amount needed to resume your ads delivery.")
              : n
                ? d(l, u())
                : c == null
                  ? p
                  : s._(
                      /*BTDS*/ "Amount needed to cover your next 7 days of ad spending plus estimated tax, based on campaign budgets.",
                    );
          case "button_two":
            return o
              ? d(l, u())
              : c == null
                ? m
                : s._(
                    /*BTDS*/ "Amount needed to cover your next 14 days of ad spending plus estimated tax, based on campaign budgets.",
                  );
          case "button_three":
            return e ? e() : null;
          default:
            return null;
        }
      },
      d = function (t) {
        var e,
          n = t.getOtherAmountDescription,
          o = t.isButtonOneMax,
          a = t.isButtonTwoMax,
          i = t.isInputFocused,
          l = t.isLowFutureSpendVariant,
          u = t.pillDescriptionOne,
          d = t.pillDescriptionTwo,
          m = t.selectedButton,
          p = t.shouldUpdateSpanishOrPortuguese,
          _ = t.shouldUpdateSpanishOrPortuguesePhase2,
          f = t.showUpperBoundContent,
          g = t.surface,
          h = t.taxRate,
          y = (e = r("BillingBalanceSectionConstants")).minimumBoostAmount,
          C = e.secureBillingUpperBoundAmountOneDescription,
          b = e.secureBillingUpperBoundAmountTwoDescription,
          v = e.totalBoostBudgetDescription;
        if (i) return n ? n() : null;
        if (f)
          switch (m) {
            case "button_one":
              return C;
            case "button_two":
              return b;
            case "button_three":
              return n ? n() : null;
          }
        if (
          g === "ADS_CREATION_BILLING_INFO" ||
          g === "ADS_CREATION_REQUIRED_ACTION"
        )
          switch (m) {
            case "button_one":
              return u != null
                ? u
                : h == null
                  ? v
                  : s._(
                      /*BTDS*/ "The total budget you set to run your ad, plus estimated tax.",
                    );
            case "button_two":
              return d != null
                ? d
                : h == null
                  ? y
                  : (_(),
                    s._(
                      /*BTDS*/ "This amount plus your available funds will cover your total budget, plus estimated tax.",
                    ));
            case "button_three":
              return n ? n() : null;
          }
        else if (g === "PAYMENT_SETTINGS")
          return c({
            getOtherAmountDescription: n,
            isButtonOneMax: o,
            isButtonTwoMax: a,
            isLowFutureSpendVariant: l,
            selectedButton: m,
            shouldUpdateSpanishOrPortuguese: p,
            shouldUpdateSpanishOrPortuguesePhase2: _,
            taxRate: h,
          });
      };
    function m(e, t, n, r, o, a, i, l) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, s, u, c) {
            var d = o("BillingPTTSharedUtils").generatePTTInputFields(l),
              m = d.authDataFields,
              p = d.paymentType,
              _ = d.secretPayload,
              f = {
                authData: babelHelpers.extends(
                  {
                    amount: r.getAmountWithPEOffset(),
                    cred_id: a != null ? a : "",
                    currency: r.currency,
                  },
                  m,
                ),
                authInputOperation: "CHARGE",
                paymentAccountID: t,
                paymentType: p,
                secretPayload: _,
              },
              g = yield (e || (e = n("Promise"))).all([
                yield u.BILLING_E2EE_MIGRATION_ANDROID.get(),
                yield u.BILLING_E2EE_MIGRATION_IOS.get(),
                yield s.ama4a_trusted_device_signal_add_fund.add_card_trusted_device_signal_enabled.get(),
                yield s.amaios_trusted_device_signal_add_fund.add_card_trusted_device_signal_enabled.get(),
              ]),
              h = g[0],
              y = g[1],
              C = g[2],
              b = g[3];
            return o("BillingPTTUtils").generatePTT(f, i, h, y, s, u, c, C, b);
          },
        )),
        p.apply(this, arguments)
      );
    }
    var _ = function (t, n) {
        return (
          n === "desktop" &&
          t.unblock_low_future_spend_advertiser_preauth.enabled.read({
            do_not_log_exposure_iknowwhatimdoing: !0,
          })
        );
      },
      f = function (t, n) {
        return function () {
          return t.BILLING_TRANSLATION_IMPR_LATAM_Q3_25_TARGETTING.read();
        };
      },
      g = function (t) {
        return function () {
          return t.content_string_replacement_experiments.enable.read();
        };
      },
      h = function (t) {
        return function () {
          return t.content_string_replacement_experiments.enable.read();
        };
      };
    function y(e, t, n) {
      return e == null
        ? null
        : {
            riskInfo: {
              paymentMethodID: t,
              useForVerification: !0,
              verification_info: {
                resolvable_type: e.resolvable_type,
                use_case: e.use_case,
              },
            },
            riskVerificationCredentialID: n == null ? "0" : n,
          };
    }
    var C = function (t) {
        return function () {
          return t.billing_india_translation_imprv_q2_26.use_new_content.read();
        };
      },
      b = function (t, n) {
        return function () {
          return t.BILLING_TRANSLATION_IMPR_LATAM_PHASE_2_TARGETING.read()
            ? (n.billing_translation_improvements_latam__logging.dummy_param.read(),
              t.MFT_NONREV_SHIPPING_GK_2026H1_AD_ACCOUNT_ID_V1.read())
            : !1;
        };
      };
    ((l.isRNBHubAndNotIAP = u),
      (l.getAddFundsPillHelperText = d),
      (l.generatePttForAddFunds = m),
      (l.passesShowLowFutureSpendDollarPillQE = _),
      (l.getShouldUpdateSpanishOrPortuguese = f),
      (l.getShouldReplaceSecureBillingUpperBoundContent = g),
      (l.getShouldReplaceSecureEmandateProcessingOffsetReactiveBody = h),
      (l.buildRiskVerificationProps = y),
      (l.getShouldUpdateIndiaContent = C),
      (l.getShouldUpdateSpanishOrPortuguesePostpayPhaseTwo = b));
  },
  226,
);
