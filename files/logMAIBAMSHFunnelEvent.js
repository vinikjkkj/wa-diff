__d(
  "logMAIBAMSHFunnelEvent",
  [
    "CurrentUser",
    "MAIBAMSHFunnelCurrentTool",
    "MAIBAUGPAdsManagerTools",
    "MaibaMshFunnelFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["reason"],
      s = new Set(r("MAIBAUGPAdsManagerTools"));
    function u() {
      var e = r("MAIBAMSHFunnelCurrentTool")();
      return e != null && s.has(e)
        ? "ads_manager"
        : e === "Commerce Manager"
          ? "commerce_manager"
          : e === "MBS" || e === "MBS (Android)" || e === "MBS (iOS)"
            ? "mbs"
            : null;
    }
    function c(e, t, n) {
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
          render_surface: n.renderSurface,
          stage: e,
          status: n.status,
          surface: u(),
        };
      });
    }
    function d(e) {
      c("cta_render_attempted", "js_cta", e);
    }
    function m(e) {
      c("cta_render_loading", "js_cta", e);
    }
    function p(e) {
      c("cta_rendered", "js_cta", e);
    }
    function _(t) {
      var n = t.reason,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      c(
        "cta_render_blocked",
        "js_cta",
        babelHelpers.extends({}, r, { errorCode: n }),
      );
    }
    function f(e) {
      c("cta_clicked", "js_cta", e);
    }
    function g(e) {
      c(
        "synthetic_started",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "started" }),
      );
    }
    function h(e) {
      c(
        "msh_complete",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "complete" }),
      );
    }
    function y(e) {
      c(
        "msh_cancel",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "cancel" }),
      );
    }
    function C(e) {
      c(
        "msh_error",
        "js_bridge",
        babelHelpers.extends({}, e, { status: "error" }),
      );
    }
    function b(e) {
      c("msh_dropped_invalid", "js_bridge", e);
    }
    ((l.logMAIBAMSHFunnelCTARenderAttempted = d),
      (l.logMAIBAMSHFunnelCTARenderLoading = m),
      (l.logMAIBAMSHFunnelCTARendered = p),
      (l.logMAIBAMSHFunnelCTARenderBlocked = _),
      (l.logMAIBAMSHFunnelCTAClicked = f),
      (l.logMAIBAMSHFunnelSyntheticStarted = g),
      (l.logMAIBAMSHFunnelMSHComplete = h),
      (l.logMAIBAMSHFunnelMSHCancel = y),
      (l.logMAIBAMSHFunnelMSHError = C),
      (l.logMAIBAMSHFunnelMSHDroppedInvalid = b));
  },
  98,
);
