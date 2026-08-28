__d(
  "BizInboxGating",
  [
    "BizInboxSurfaceUtils",
    "gkx",
    "justknobx",
    "qex",
    "useBizKitPageNullable",
    "usePageGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !o("BizInboxSurfaceUtils").isBizSuiteSurface();
    }
    function s() {
      return r("gkx")("22410");
    }
    function u() {
      return r("gkx")("22417");
    }
    function c() {
      return !0;
    }
    function d() {
      return r("gkx")("22414");
    }
    function m() {
      return r("qex")._("1407") === !0;
    }
    function p() {
      return r("justknobx")._("45");
    }
    function _() {
      return r("justknobx")._("1133");
    }
    function f() {
      return r("gkx")("5588");
    }
    function g() {
      var e,
        t = r("useBizKitPageNullable")(),
        n = r("usePageGating")("qe");
      return t == null
        ? !1
        : (e = n.getBool(
              t,
              "ad_comments_usability_improvement_page_id",
              "enabled",
              { silent: !0 },
            )) != null
          ? e
          : !1;
    }
    function h(e) {
      var t = r("useBizKitPageNullable")(),
        n = r("usePageGating")("qe");
      e &&
        t != null &&
        n.expose(
          t,
          "ad_comments_usability_folder_filter_type_dummy",
          "enabled",
        );
    }
    function y(e) {
      var t = r("useBizKitPageNullable")(),
        n = r("usePageGating")("qe");
      e &&
        t != null &&
        n.expose(
          t,
          "ad_comments_usability_comm_status_action_params_dummy",
          "enabled",
        );
    }
    function C(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("1582")) != null ? n : !1;
      }
      return (t = r("qex")._("5458")) != null ? t : !1;
    }
    ((l.getShowNewIAModal = e),
      (l.getCTSSuggestionBar = s),
      (l.getIsEligibleForRemovePageDependencyInboxPhase1 = u),
      (l.getShouldUseClientSideCalculation = c),
      (l.getUseSPMigration = d),
      (l.shouldLoadIGDOnMsys = m),
      (l.getIsPinnedThreadsEnabled = p),
      (l.shouldShowAYMTOnTests = _),
      (l.shouldEnableBizwebIGDIncomingTypingIndicator = f),
      (l.useShouldEnableCommentUsabilityImprovements = g),
      (l.useLogCommentFolderFilterTypeDummyExposure = h),
      (l.useLogCommentCommStatusActionParamsDummyExposure = y),
      (l.isLabelPreloadPreImprovementEnabled = C));
  },
  98,
);
