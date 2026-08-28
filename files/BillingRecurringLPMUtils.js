__d(
  "BillingRecurringLPMUtils",
  [
    "fbt",
    "BillingAutoReloadConstants",
    "BillingCurrencyAmount",
    "BillingWizardText.react",
    "MetaBrandICircleOutline16Icon.react",
    "XMDSIcon.react",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        iconSpacing: {
          marginRight: "x1ldx8e",
          marginInlineStart: null,
          marginInlineEnd: null,
          $$css: !0,
        },
      },
      d = function (t) {
        return s._(
          /*BTDS*/ "1. From your mobile device, open the app linked to your {payment method name} ID.",
          [s._param("payment method name", t)],
        );
      },
      m = s._(/*BTDS*/ "2. Scan the QR code from the app you opened."),
      p = function (t) {
        return s._(
          /*BTDS*/ "Save {payment method name} to easily pay for ads",
          [s._param("payment method name", t)],
        );
      },
      _ = function (t, n, r) {
        return s._(
          /*BTDS*/ "{number to represent which step it is}Approve your {payment amount} charge to verify and save {payment method name} to your ad account",
          [
            s._param("number to represent which step it is", r),
            s._param("payment amount", t),
            s._param("payment method name", n),
          ],
        );
      },
      f = function (t, n, r, o) {
        var e = n.format({ showDecimals: !0, showSymbol: !0 }),
          a = r.format({ showDecimals: !0, showSymbol: !0 });
        return s._(
          /*BTDS*/ "{number to represent which step it is}Approve the future {auto reload amount} reload amount in your {payment method name} app and we\u2019ll automatically reload funds when they are at or below {auto reload threshold amount}.",
          [
            s._param("number to represent which step it is", o),
            s._param("auto reload amount", e),
            s._param("payment method name", t),
            s._param("auto reload threshold amount", a),
          ],
        );
      },
      g = function (t, n, r) {
        return s._(
          /*BTDS*/ "{number to represent which step it is}We\u2019ll make a one-time charge of {payment amount} to verify your {payment method name} account and save your info.",
          [
            s._param("number to represent which step it is", r),
            s._param("payment amount", n),
            s._param("payment method name", t),
          ],
        );
      },
      h = function (t, n, r, o, a) {
        var e = d(t);
        return r === "WITH_DRAFT_AUTO_RELOAD" && o != null && a != null
          ? [e, m, f(t, o, a, "3. "), g(t, n, "4. ")]
          : [e, m, _(n, t, "3. ")];
      },
      y = s._(/*BTDS*/ "See all supported apps"),
      C = "https://www.npci.org.in/what-we-do/upi/3rd-party-apps",
      b = function (t) {
        switch (t) {
          case "UPI":
            return C;
          default:
            return null;
        }
      },
      v = s._(/*BTDS*/ "QR code expired"),
      S = function (t, n) {
        return n
          ? s._(
              /*BTDS*/ "Your {payment method name} might not be saved. If you scanned the QR code already, your {payment method name} info may have been saved to your ad account.",
              [s._param("payment method name", t)],
            )
          : s._(
              /*BTDS*/ "Your {payment method name} may not have been charged. If you need a new QR code, please close and retry.",
              [s._param("payment method name", t)],
            );
      },
      R = s._(/*BTDS*/ "Unable to add payment method"),
      L = function (t) {
        return s._(
          /*BTDS*/ "We weren't able to confirm your {payment method name} charge. Please try again.",
          [s._param("payment method name", t)],
        );
      },
      E = function (t) {
        var e = s._(
            /*BTDS*/ "{payment method name} was saved, but we weren't able to add funds to your account.",
            [s._param("payment method name", t)],
          ),
          n = s._(/*BTDS*/ "Please try adding funds again"),
          r = s._(/*BTDS*/ "Unable to add funds");
        return { body: e, headline: n, title: r };
      },
      k = function (t, n, r) {
        return n === "WITH_DRAFT_AUTO_RELOAD"
          ? r === !0
            ? s._(
                /*BTDS*/ "{payment method name} saved and auto refill turned on",
                [s._param("payment method name", t)],
              )
            : s._(
                /*BTDS*/ "{payment method name} saved and auto reload turned on",
                [s._param("payment method name", t)],
              )
          : s._(/*BTDS*/ "{payment method name} successfully saved", [
              s._param("payment method name", t),
            ]);
      },
      I = function (t, n, o, a, i, l, u, c) {
        return n === "WITH_DRAFT_AUTO_RELOAD"
          ? r("BillingAutoReloadConstants").setOnSuccessBody(
              String(o),
              String(a),
              String(i),
              u,
            )
          : l
            ? c === !0
              ? s._(
                  /*BTDS*/ "{payment method name} is now saved to your account and you can use auto refill to set up recurring charges.",
                  [s._param("payment method name", t)],
                )
              : s._(
                  /*BTDS*/ "{payment method name} is now saved to your account and you can use auto reload to set up recurring charges.",
                  [s._param("payment method name", t)],
                )
            : s._(
                /*BTDS*/ "{payment method name} is now saved to your account.",
                [s._param("payment method name", t)],
              );
      },
      T = 10,
      D = s._(/*BTDS*/ "Try again"),
      x = function (t, n) {
        return n
          ? s._(
              /*BTDS*/ "Your {Local payment method name} info may not have been saved",
              [s._param("Local payment method name", t)],
            )
          : s._(
              /*BTDS*/ "Your {Local payment method name} may not have been charged",
              [s._param("Local payment method name", t)],
            );
      },
      $ = function (t, n) {
        return n
          ? s._(
              /*BTDS*/ "If you scanned the QR code, your {Local payment method name} info may have been saved to your ad account in Payment settings. You can also check your {Local payment method name} account for pending transactions.",
              [s._param("Local payment method name", t)],
            )
          : s._(
              /*BTDS*/ "If you scanned the QR code, your {Local payment method name} may have been charged. You can check your {Local payment method name} account for pending transactions.",
              [s._param("Local payment method name", t)],
            );
      },
      P = s._(/*BTDS*/ "Save for future payments"),
      N = s._(/*BTDS*/ "Recommended"),
      M = function (t, n, r, o, a, i) {
        if (r === "ACTIVE") {
          if (i === "WITH_DRAFT_AUTO_RELOAD")
            return "SUCCESS_DRAFT_AUTO_RELOAD_SAVED";
          if (o != null && o.isZero())
            return t === !0 ? "SUCCESS_TO_AUTO_RELOAD" : "SUCCESS";
        }
        return n === "CANCELED" || n === "DECLINED" || n === "EXPIRED"
          ? r === "ACTIVE"
            ? "CHARGE_FAILED_CONSENT_ACTIVE"
            : "FAILED"
          : n === "COMPLETED" && r === "ACTIVE"
            ? t === !0
              ? "SUCCESS_TO_AUTO_RELOAD"
              : "SUCCESS"
            : n === "COMPLETED" && r === "FAILED"
              ? "SUCCESS"
              : (a === "SUCCESS" &&
                    n == null &&
                    o != null &&
                    o.isZero() &&
                    r === "INITIATED") ||
                  (a === "SUCCESS" && n === "PENDING" && r === "INITIATED") ||
                  a === "PENDING_USER_ACTION"
                ? "PENDING_USER_ACTION"
                : "RECURRING_LPM_PENDING";
      },
      w = function (t, n) {
        if (t === "LPM_PENDING_VERIFICATION")
          return s._(
            /*BTDS*/ "Pending verification from {payment method name}",
            [s._param("payment method name", n)],
          );
        if (t === "UNUSABLE") return s._(/*BTDS*/ "Disabled");
        if (t === "UNSUPPORTED_FOR_BILLING_SAFE_MODE")
          return s._(/*BTDS*/ "Unavailable");
      },
      A = function (t) {
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("react-strict-dom").html.div, {
              style: c.iconSpacing,
              children: u.jsx(r("XMDSIcon.react"), {
                icon: r("MetaBrandICircleOutline16Icon.react"),
                size: 16,
              }),
            }),
            u.jsx(r("BillingWizardText.react"), {
              body: s._(
                /*BTDS*/ "To use UPI AutoPay, enter an amount less than {mandate max}.",
                [s._param("mandate max", t)],
              ),
              bodyColor: "primary",
              level: 4,
            }),
          ],
        });
      };
    function F(e, t, n, r) {
      return e != null && t != null && n && r === "WITH_DRAFT_AUTO_RELOAD"
        ? (e == null ? void 0 : e.compare(t)) > 0
        : !1;
    }
    function O(e, t, n, r, a, i) {
      var l = o("BillingCurrencyAmount").getFromPaymentAmountInput(t),
        s = (e == null ? void 0 : e.lpmSupportsRecurring) === !0,
        u = n != null && r != null && s === !0,
        c = !1;
      u && a === "WITH_DRAFT_AUTO_RELOAD" && (c = i());
      var d = c && r != null,
        m = o("BillingCurrencyAmount").getFromPECurrencyAmountFragment(
          e == null ? void 0 : e.maxMandateAmountRaw,
        ),
        p = "";
      if (m != null)
        try {
          p = m.toString();
        } catch (e) {
          p = "";
        }
      var _ = F(l, m, d, a);
      return {
        isHigherThanMaxMandate: _,
        maxMandateAmountString: p,
        showRecurringLPMCheckbox: d,
      };
    }
    ((l.getQRCodeViewInstructionHeadline = p),
      (l.getQRCodeViewInstructionSteps = h),
      (l.SEE_ALL_SUPPORTED_APPS = y),
      (l.getSupportedAppLink = b),
      (l.QRCODE_EXPIRE_WARNING_HEADLINE = v),
      (l.getQRCodeExpireWarningBody = S),
      (l.QRCODE_FAILURE_HEADLINE_ADD_PM = R),
      (l.getQRCodeFailureBody = L),
      (l.getLPMSavedChargeFailedStatus = E),
      (l.getRecurringLPMSuccessHeadline = k),
      (l.getRecurringLPMSuccessBody = I),
      (l.QR_CODE_EXPIRATION_TIME_IN_MINUTES = T),
      (l.TRY_AGAIN_BUTTON_LABEL = D),
      (l.getOnCloseQRCodeWarningMessageHeadline = x),
      (l.getOnCloseQRCodeWarningMessageBody = $),
      (l.getSaveRecurringLPMCheckboxHeadline = P),
      (l.getSaveCheckboxRecommendedChipLabel = N),
      (l.getRequestStatusForRecurringLPM = M),
      (l.getPaymentMethodUsabilityLabelForRecurringLPM = w),
      (l.maxMandateExceededDisclaimer = A),
      (l.getRecurringLPMCheckboxState = O));
  },
  226,
);
