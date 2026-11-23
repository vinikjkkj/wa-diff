__d(
  "MAIBAGKUtils",
  [
    "MAIBAChainOfThoughtToolActivityEnabled",
    "MAIBARedesignToolActivityEnabled",
    "MAIBASurfacesUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("10635");
    }
    function s() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return (
        e != null &&
        o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e) &&
        r("qex")._("5817") === !0
      );
    }
    function u() {
      return s() && r("qex")._("5800") === "quick_reply";
    }
    function c() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return (
        e != null &&
        o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e) &&
        r("justknobx")._("126") === !0 &&
        r("qex")._("2100") === "vfs_pdf_generation"
      );
    }
    function d() {
      return r("gkx")("7682");
    }
    function m() {
      return r("gkx")("1224");
    }
    function p() {
      return r("gkx")("25503");
    }
    function _() {
      return r("gkx")("14672");
    }
    function f() {
      return r("qex")._("2028") === "maiba_r23_workspace_boost_v1_muse_cli";
    }
    function g() {
      return r("qex")._("2037") === "maiba_r23_workspace_boost_v1_muse_low_cli";
    }
    function h() {
      return r("gkx")("25056") || r("qex")._("3082") === !0;
    }
    function y() {
      return r("gkx")("27140");
    }
    function C() {
      return r("gkx")("21092");
    }
    function b() {
      return (
        (r("gkx")("27140") &&
          r("qex")._("5817") === !0 &&
          r("qex")._("5396") === !0) ||
        r("gkx")("4683") ||
        r("qex")._("5148") === "transfer_preamble_progress_cards"
      );
    }
    function v() {
      return r("gkx")("10680");
    }
    function S() {
      return (
        r("gkx")("11769") ||
        r("qex")._("195") === "maiba_a2ui_asa_omnibot_widgets"
      );
    }
    function R() {
      return r("gkx")("23779") || r("qex")._("6142") === !0;
    }
    function L() {
      return R() && r("justknobx")._("5962");
    }
    function E() {
      return r("gkx")("6003");
    }
    function k() {
      return r("justknobx")._("5829");
    }
    ((l.isMAIBAChainOfThoughtToolActivityEnabled = r(
      "MAIBAChainOfThoughtToolActivityEnabled",
    )),
      (l.isMAIBARedesignToolActivityEnabled = r(
        "MAIBARedesignToolActivityEnabled",
      )),
      (l.isMAIBAMidChatPromptsWebGKEnabled = e),
      (l.isMAIBAAxonRoutedAccount = s),
      (l.isMAIBAQuickReplyEnabled = u),
      (l.isMAIBAGeneratePdfButtonEnabled = c),
      (l.isMAIBAComparisonModeEnabled = d),
      (l.isMAIBATaskPromptFirstEnabled = m),
      (l.isMAIBAClientContextSendFallbackEnabled = p),
      (l.isMAIBAOnlineShadowTrafficEnabled = _),
      (l.isMAIBAR23BoostV1MuseShadowEnabled = f),
      (l.isMAIBAR23BoostV1MuseLowShadowEnabled = g),
      (l.isMAIBADesignFixathonEnabled = h),
      (l.isMAIBAIGBoostContextCompletionEnabled = y),
      (l.isMAIBAPreviewPublishRenderPathProbeEnabled = C),
      (l.isMAIBAInlineProgressTimelineEnabled = b),
      (l.isMAIBAVerificationProgressEnabled = v),
      (l.isMAIBAA2UIOmnibotWidgetEnabled = S),
      (l.isMAIBAMuseInCreativeGuidanceEnabled = R),
      (l.isMAIBAMuseCTAEnabled = L),
      (l.isMAIBAMuseCTAOpenModalEnabled = E),
      (l.isMAIBAWidgetTurnScrollLockDisabled = k));
  },
  98,
);
