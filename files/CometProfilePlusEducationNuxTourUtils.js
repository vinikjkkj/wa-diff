__d(
  "CometProfilePlusEducationNuxTourUtils",
  [
    "fbt",
    "CometProfilePlusAdminEducationNuxTourStrings",
    "CometProfilePlusAdminEducationStrings",
    "CometRouteParams",
    "XCometProfileControllerRouteBuilder",
    "react-compiler-runtime",
    "useCometNUXTourInProgress",
    "useCometProfilePlusAdminActivitiesLogger.react",
    "useFDSCallout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { tooltipWithMaxWidth: { maxWidth: "xw5ewwj", $$css: !0 } };
    function u(e, t) {
      var n = [
        "PROFILE_SWITCH_SETTINGS_STEP",
        "MANAGE_STEP",
        "NEWSFEED_TAB_STEP",
      ];
      return (
        e && n.push("GLOBAL_PAGE_TAB_STEP"),
        t && n.push("LOCATION_PAGE_TAB_STEP"),
        n
      );
    }
    function c(e) {
      return e === "ADDITIONAL_PROFILE_CREATION"
        ? "ap_plus_creation_onboarding"
        : e === "PAGE_TO_ADDITIONAL_PROFILE"
          ? "adminless_transition_onboarding"
          : null;
    }
    function d(e, t) {
      return r("XCometProfileControllerRouteBuilder").buildURL(
        babelHelpers.extends({ id: e }, t),
      );
    }
    function m(t, n) {
      var a = o("react-compiler-runtime").c(12),
        i = "",
        l = o("CometRouteParams").useRouteParams(),
        u = r("useCometNUXTourInProgress")(),
        d = (l == null ? void 0 : l.is_tour_dismissed) === !0,
        m = !u && (l == null ? void 0 : l.is_tour_completed) === !0,
        p;
      a[0] !== n ? ((p = c(n)), (a[0] = n), (a[1] = p)) : (p = a[1]);
      var _ = p;
      if (d) {
        var f;
        (a[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = o(
              "CometProfilePlusAdminEducationNuxTourStrings",
            ).getContextualTooltipAfterDismissing()),
            (a[2] = f))
          : (f = a[2]),
          (i = f));
      } else if (m) {
        var g;
        (a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = o(
              "CometProfilePlusAdminEducationNuxTourStrings",
            ).getContextualTooltip()),
            (a[3] = g))
          : (g = a[3]),
          (i = g));
      }
      var h;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o(
            "CometProfilePlusAdminEducationStrings",
          ).getEventTargetForLogging(5)),
          (a[4] = h))
        : (h = a[4]);
      var y = h,
        C = t != null ? t : "",
        b;
      a[5] !== _ || a[6] !== C
        ? ((b = {
            additional_profile_id: C,
            event: "view",
            event_target: y,
            referrer_surface: _,
            surface: "admin_education_contextual_tooltip",
          }),
          (a[5] = _),
          (a[6] = C),
          (a[7] = b))
        : (b = a[7]);
      var v = r("useCometProfilePlusAdminActivitiesLogger.react")(b),
        S;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Profile Plus education tooltip")), (a[8] = S))
        : (S = a[8]);
      var R;
      a[9] !== v || a[10] !== i
        ? ((R = {
            "aria-label": S,
            arrowStyle: "inset",
            content: i,
            hasCloseButton: !0,
            onShow: v,
            position: "below",
            type: "accent",
            xstyle: e.tooltipWithMaxWidth,
          }),
          (a[9] = v),
          (a[10] = i),
          (a[11] = R))
        : (R = a[11]);
      var L = r("useFDSCallout")(R, d || m),
        E = L.anchorRef;
      return E;
    }
    ((l.getTourTargets = u),
      (l.getReferrerSurfaceByTransitionPath = c),
      (l.getURL = d),
      (l.useProfilePlusContextualTip = m));
  },
  226,
);
