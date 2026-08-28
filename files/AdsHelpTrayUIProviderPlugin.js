__d(
  "AdsHelpTrayUIProviderPlugin",
  [
    "AdsAIUtils",
    "AdsHelpTrayNavigationHelper",
    "AdsHelpTrayUtils",
    "AdsOsmipChatTypeUtils",
    "CSS",
    "ExecutionEnvironment",
    "ServerJsRuntimeEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 374,
      u = g(),
      c = {
        articleLoaded: !1,
        bizSitePageTypeFromButton: null,
        currentQuery: "",
        isEligibleForAdsAINux: !1,
        isTrayOpen: !1,
        navigationStack: [],
        openModalSource: null,
        openModalType: null,
        recentlyViewed: [],
        routeName: null,
        searchIssueID: "",
        showToast: !1,
        source: "other",
        startedQuickCreation: !1,
        supportContactFormData: null,
        helpTrayOpenWidth: u,
      },
      d = { articleLoaded: !1, helpTrayOpenWidth: u };
    if (!o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()) {
      var m = null;
      (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        (m =
          (window.sessionStorage &&
            window.sessionStorage.getItem(
              o("AdsHelpTrayUtils").HELP_TRAY_STATE_LOCAL_STORAGE_KEY,
            )) ||
          null);
      var p = null;
      if (
        (m != null && (p = JSON.parse(m)),
        p != null && (c = babelHelpers.extends({}, c, p, d)),
        o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
          "AdsHelpTrayUIProviderPlugin::initialState",
        ) && (c = f(c)),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM && document.body)
      ) {
        var _;
        o("CSS").conditionClass(
          document.body,
          "has-helptray",
          ((_ = c) == null ? void 0 : _.isTrayOpen) === !0,
        );
      }
    }
    function f(e) {
      var t = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(e),
        n = o("AdsOsmipChatTypeUtils").getOsmipChatType(t);
      if (n == null) return e;
      var r = t.id === "";
      if (r) {
        if (n === o("AdsOsmipChatTypeUtils").OSMIPChatType.AI_MESSENGER)
          return babelHelpers.extends({}, e, {
            navigationStack: [{ contentType: "HOME", shouldReturnToHome: !0 }],
          });
      } else
        return babelHelpers.extends({}, e, {
          navigationStack: o(
            "AdsHelpTrayNavigationHelper",
          ).replaceLastInNavigationStack(
            e.navigationStack,
            babelHelpers.extends({}, t, {
              osmipExtraData: babelHelpers.extends({}, t.osmipExtraData, {
                isNewThread: !1,
              }),
            }),
          ),
        });
      return e;
    }
    function g() {
      var t = s;
      return (
        o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() ||
          ((e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            document.documentElement.style.setProperty(
              "--ads-help-tray-v4-width",
              t + "px",
            )),
        t
      );
    }
    var h = { initialState: c },
      y = h;
    l.default = y;
  },
  98,
);
