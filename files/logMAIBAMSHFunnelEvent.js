__d(
  "logMAIBAMSHFunnelEvent",
  ["CurrentUser", "MaibaMshFunnelFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["reason"];
    function s(e, t, n) {
      r("MaibaMshFunnelFalcoEvent").log(function () {
        return {
          action: n.action,
          ad_account_id: n.adAccountId,
          application_id: n.applicationId,
          business_id: n.businessId,
          conversation_id: n.conversationId,
          error_code: n.errorCode,
          error_message: n.errorMessage,
          flow_id: n.flowId,
          is_employee: r("CurrentUser").isEmployee(),
          is_test_user: r("CurrentUser").isTestUser(),
          layer: t,
          maiba_request_id: n.maibaRequestId,
          partner: n.partner,
          pixel_id: n.pixelId,
          stage: e,
          status: n.status,
          surface: n.surface,
        };
      });
    }
    function u(e) {
      s("cta_render_attempted", "js_cta", e);
    }
    function c(e) {
      s("cta_render_loading", "js_cta", e);
    }
    function d(e) {
      s("cta_rendered", "js_cta", e);
    }
    function m(t) {
      var n = t.reason,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      s(
        "cta_render_blocked",
        "js_cta",
        babelHelpers.extends({}, r, { errorCode: n }),
      );
    }
    function p(e) {
      s("cta_clicked", "js_cta", e);
    }
    function _(e) {
      s(
        "synthetic_started",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "started" }),
      );
    }
    function f(e) {
      s(
        "msh_complete",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "complete" }),
      );
    }
    function g(e) {
      s(
        "msh_cancel",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "cancel" }),
      );
    }
    function h(e) {
      s(
        "msh_error",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "error" }),
      );
    }
    function y(e) {
      s("msh_dropped_invalid", "js_bridge", e);
    }
    ((l.logMAIBAMSHFunnelCTARenderAttempted = u),
      (l.logMAIBAMSHFunnelCTARenderLoading = c),
      (l.logMAIBAMSHFunnelCTARendered = d),
      (l.logMAIBAMSHFunnelCTARenderBlocked = m),
      (l.logMAIBAMSHFunnelCTAClicked = p),
      (l.logMAIBAMSHFunnelSyntheticStarted = _),
      (l.logMAIBAMSHFunnelMSHComplete = f),
      (l.logMAIBAMSHFunnelMSHCancel = g),
      (l.logMAIBAMSHFunnelMSHError = h),
      (l.logMAIBAMSHFunnelMSHDroppedInvalid = y));
  },
  98,
);
