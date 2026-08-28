__d(
  "BillingAutoReloadUtils",
  [
    "BillingAutoReloadConstants",
    "BillingCurrencyAmount",
    "BillingPaymentModeUtils",
    "BillingPrepayUtils",
    "formatDate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return function () {
        return t.content_string_replacement_experiments.enable.read();
      };
    };
    function s(e, t, n) {
      var a, i, l, s;
      n === void 0 && (n = function () {});
      var u = function (n) {
          return n.length > 0
            ? o("BillingCurrencyAmount")
                .getFromUserInput(n, e)
                .format({ showSymbol: !0 })
            : n;
        },
        c = function (i) {
          if (i.length > 0) {
            var a = o("BillingCurrencyAmount").getFromUserInput(i, e),
              l = t.defaultTriggerAmount,
              s = t.suggestedAmountsUsed;
            if (s) {
              var u,
                c =
                  a.compare(l) < 0
                    ? r(
                        "BillingAutoReloadConstants",
                      ).suggestedThresholdAmountHelperText(
                        (u = l == null ? void 0 : l.toString()) != null
                          ? u
                          : "",
                      )
                    : null;
              n(c);
            }
            return a.format({ showSymbol: !0 });
          }
          return i;
        },
        d = o("BillingCurrencyAmount").createZero(e).format({ showSymbol: !0 }),
        m = {
          defaultValue:
            (a =
              (i = t.defaultReloadAmount) == null
                ? void 0
                : i.format({ showSymbol: !0 })) != null
              ? a
              : d,
          onBlur: u,
          required: !0,
          validate: function (r) {
            var n = o("BillingCurrencyAmount").getFromUserInput(r, e),
              a = o("BillingPrepayUtils").validateAmount(
                n,
                t.minFundingAmount,
                t.maxFundingAmount,
                null,
                null,
                null,
                null,
                null,
                "user_reload_amount_validation",
              );
            if (a != null) return { message: a, validationState: "ERROR" };
          },
        },
        p = {
          defaultValue:
            (l =
              (s = t.defaultTriggerAmount) == null
                ? void 0
                : s.format({ showSymbol: !0 })) != null
              ? l
              : d,
          onBlur: c,
          required: !0,
          validate: function (r) {
            var n = o("BillingCurrencyAmount").getFromUserInput(r, e),
              a = t.suggestedAmountsUsed
                ? o("BillingPrepayUtils").validateAmount(
                    n,
                    t.minFundingAmount,
                    t.maxFundingAmount,
                    null,
                    null,
                    null,
                    null,
                    null,
                    "user_reload_threshold_amount_validation_with_min_max",
                  )
                : o("BillingPrepayUtils").validateAmountForReloadThreshold(
                    n,
                    "user_reload_threshold_amount_validation",
                  );
            if (a != null) return { message: a, validationState: "ERROR" };
          },
        };
      return { reloadAmount: m, triggerAmount: p };
    }
    var u = function (t) {
        return (
          t != null && t.autoReloadToggledOn && t.autoReloadDisabled !== !0
        );
      },
      c = function (t, n) {
        return (
          t === "ACTIVE" &&
          o("BillingPaymentModeUtils").supportsAutoReload(n) &&
          o("BillingPaymentModeUtils").supportsPrepay(n)
        );
      },
      d = function (t, n, r) {
        return r !== "CREDIT_CARD"
          ? { shouldShowFailedUI: !1, shouldShowRetryUI: !1 }
          : {
              shouldShowFailedUI: t === "FAILED",
              shouldShowRetryUI: t === "ENABLED" && n != null,
            };
      },
      m = function (n, o, a, i, l, s) {
        if ((s === void 0 && (s = !1), n))
          return {
            body: r("BillingAutoReloadConstants").autoReloadOnBody(
              (o != null ? o : "0").toString(),
              (a != null ? a : "0").toString(),
            ),
            headline: r("BillingAutoReloadConstants").autoReloadOnHeadline(s),
            showEditLink: !0,
          };
        var t = e(l);
        return {
          body: i
            ? t()
              ? r("BillingAutoReloadConstants").autoReloadOffRefundBodyRevamp(s)
              : r("BillingAutoReloadConstants").autoReloadOffRefundBody(s)
            : r("BillingAutoReloadConstants").autoReloadOffBody(!1),
          headline: r("BillingAutoReloadConstants").autoReloadOffHeadline(s),
          showEditLink: !1,
        };
      },
      p = function (n, o, a, i, l, s, u, c, d) {
        if (
          (s === void 0 && (s = !1),
          u === void 0 && (u = null),
          c === void 0 && (c = !1),
          d === void 0 && (d = !1),
          n)
        ) {
          var t = (o != null ? o : "0").toString(),
            m = (a != null ? a : "0").toString();
          return {
            body:
              u != null
                ? r("BillingAutoReloadConstants").autoReloadOnBodyV3(
                    t,
                    m,
                    u,
                    c,
                    d,
                    s,
                  )
                : r("BillingAutoReloadConstants").autoReloadOnBody(t, m),
            headline: r("BillingAutoReloadConstants").autoReloadOnHeadline(s),
          };
        }
        var p = e(l);
        return {
          body: i
            ? p()
              ? r("BillingAutoReloadConstants").autoReloadOffRefundBodyRevamp(s)
              : r("BillingAutoReloadConstants").autoReloadOffRefundBody(s)
            : r("BillingAutoReloadConstants").autoReloadOffBodyV3,
          headline: r("BillingAutoReloadConstants").autoReloadTitle(s),
        };
      },
      _ = function (t, n) {
        return (
          t.TEST_BILLING_GK_EXPOSURE_LOGGING.read(),
          n.test_billing_gk_exposure_logging_dummy_qe.dummy_param.read(),
          function () {
            return t.AUTO_RELOAD_FAILED_V2_TARGETING.read();
          }
        );
      },
      f = function (t, n, o, a, i) {
        if ((i === void 0 && (i = !1), t && a()))
          return {
            body: r("BillingAutoReloadConstants").autoReloadFailedBody(i),
            headline: r("BillingAutoReloadConstants").autoReloadFailedHeadline(
              i,
            ),
            isFailedUI: !0,
          };
        if (n && a()) {
          var e = r("formatDate")(o, "M j"),
            l = r("formatDate")(o, "g:i A");
          return {
            body: r("BillingAutoReloadConstants").autoReloadRetryScheduledBody(
              l,
              e,
            ),
            headline: r("BillingAutoReloadConstants").autoReloadFailedHeadline(
              i,
            ),
            isFailedUI: !1,
          };
        }
        return null;
      },
      g = function (t, n, o, a, i, l) {
        if ((i === void 0 && (i = !1), l === void 0 && (l = null), t && a()))
          return {
            body: r("BillingAutoReloadConstants").autoReloadFailedBodyV3(i),
            headline: r("BillingAutoReloadConstants").autoReloadOffHeadline(i),
            isFailedUI: !0,
          };
        if (n && a()) {
          var e = r("formatDate")(o, "M j"),
            s = r("formatDate")(o, "g:i A");
          return {
            body:
              l != null
                ? r(
                    "BillingAutoReloadConstants",
                  ).autoReloadRetryScheduledBodyV3(l, s, e)
                : r("BillingAutoReloadConstants").autoReloadRetryScheduledBody(
                    s,
                    e,
                  ),
            headline: r(
              "BillingAutoReloadConstants",
            ).autoReloadPaymentFailedHeadline(i),
            isFailedUI: !1,
          };
        }
        return null;
      };
    ((l.getAutoReloadFieldsConfig = s),
      (l.shouldTurnOnAutoReload = u),
      (l.accountSupportAutoReload = c),
      (l.getAutoReloadFailedExperience = d),
      (l.getPaymentSettingsAutoReloadUI = m),
      (l.getPaymentSettingsAutoReloadUIV3 = p),
      (l.getIsEligibleForFailedExperience = _),
      (l.getPaymentSettingsAutoReloadFailedUI = f),
      (l.getPaymentSettingsAutoReloadFailedUIV3 = g));
  },
  98,
);
