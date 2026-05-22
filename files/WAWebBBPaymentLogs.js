__d(
  "WAWebBBPaymentLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.PAYMENT_METHOD_CHANGE_BUTTON,
      });
    }
    function s(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .PAYMENT_REQUIRED_ACTION_BUTTON,
      });
    }
    function u(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: n,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_WIZARD,
      });
    }
    function c(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: n,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_WIZARD,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ADD_FUNDS_WIZARD,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_INFO_FETCH,
      });
    }
    function p(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BUSINESS_INFO_FETCH,
      });
    }
    function _(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EMAIL_ONBOARDING,
      });
    }
    function f(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: {
          error_code: n != null ? String(n) : "unknown",
          error_type: t,
        },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CHECKOUT_FETCH,
      });
    }
    function g(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.QUOTA_FETCH,
      });
    }
    function h(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_FAQ_LINK,
      });
    }
    function y(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_TOS_LINK,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_PRIVACY_POLICY_LINK,
      });
    }
    function b(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: n,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.PAYMENT_METHOD_SECTION,
      });
    }
    function v(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: { error_type: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BILLING_WIZARD_FAILED,
      });
    }
    ((l.paymentMethodChangeClicked = e),
      (l.paymentRequiredActionClicked = s),
      (l.billingWizardOpened = u),
      (l.billingWizardCompleted = c),
      (l.addFundsWizardOpened = d),
      (l.billingInfoFetchFailed = m),
      (l.businessInfoFetchFailed = p),
      (l.emailOnboardingCheckFailed = _),
      (l.checkoutFetchFailed = f),
      (l.quotaFetchFailed = g),
      (l.billingSummaryFaqLinkClicked = h),
      (l.billingSummaryTosLinkClicked = y),
      (l.billingSummaryPrivacyPolicyLinkClicked = C),
      (l.paymentMethodSectionViewed = b),
      (l.billingWizardFailed = v));
  },
  98,
);
