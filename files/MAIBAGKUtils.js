__d(
  "MAIBAGKUtils",
  ["MAIBASurfacesUtils", "gkx", "justknobx", "qex"],
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
        r("justknobx")._("126") === !0 &&
        r("qex")._("2100") === "vfs_pdf_generation"
      );
    }
    function u() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return e != null && o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e);
    }
    function c() {
      return u() && r("qex")._("3958") === !0;
    }
    function d() {
      return r("gkx")("7682");
    }
    function m() {
      return r("gkx")("14672");
    }
    function p() {
      return r("qex")._("2028") === "maiba_r23_workspace_boost_v1_muse_cli";
    }
    function _() {
      return r("qex")._("2037") === "maiba_r23_workspace_boost_v2_muse_cli";
    }
    function f() {
      return r("gkx")("25056") || r("qex")._("3082") === !0;
    }
    function g() {
      return r("gkx")("17878") || r("gkx")("11533") || r("gkx")("4683");
    }
    function h() {
      return String(r("qex")._("3548")).includes("maiba_redesign_v0");
    }
    function y() {
      return (
        r("gkx")("11769") ||
        r("qex")._("195") === "maiba_a2ui_asa_omnibot_widgets"
      );
    }
    ((l.isMAIBAMidChatPromptsWebGKEnabled = e),
      (l.isMAIBAGeneratePdfButtonEnabled = s),
      (l.isMAIBAMemoryImportSurfaceEligible = u),
      (l.isMAIBAMemoryImportEnabled = c),
      (l.isMAIBAComparisonModeEnabled = d),
      (l.isMAIBAOnlineShadowTrafficEnabled = m),
      (l.isMAIBAR23BoostV1MuseShadowEnabled = p),
      (l.isMAIBAR23BoostV2MuseShadowEnabled = _),
      (l.isMAIBADesignFixathonEnabled = f),
      (l.isMAIBAInlineProgressTimelineEnabled = g),
      (l.isMAIBARedesignToolActivityEnabled = h),
      (l.isMAIBAA2UIOmnibotWidgetEnabled = y));
  },
  98,
);
