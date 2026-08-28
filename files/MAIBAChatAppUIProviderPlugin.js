__d(
  "MAIBAChatAppUIProviderPlugin",
  [
    "AdsAIUtils",
    "MAIBAChatAppUtils",
    "MAIBAChatConstants",
    "ServerJsRuntimeEnvironment",
    "WebStorage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        chatWindowWidth: o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH,
        isFullScreen: !1,
        isMAIBAChatAppOpen: !1,
        selectedChatState: {
          showConsentDisclaimer: void 0,
          externalConversationId: void 0,
          linkedAdAccountId: void 0,
        },
        shouldAutoExpandThreadList: !0,
        surfaceMode: "none",
      },
      u = s;
    if (!o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()) {
      var c,
        d =
          (c = (e || (e = r("WebStorage"))).getSessionStorageForRead()) == null
            ? void 0
            : c.getItem(
                o("MAIBAChatAppUtils").MAIBA_CHAT_APP_STATE_LOCAL_STORAGE_KEY,
              ),
        m = null;
      d != null && (m = JSON.parse(d));
      var p = m != null ? m : {},
        _ = p.pathname,
        f = p.state;
      ((u = o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
        "MAIBAChatAppUIProviderPlugin",
      )
        ? o("MAIBAChatAppUtils").processInitialStateForMAIBA(
            _ != null ? _ : "",
            babelHelpers.extends({}, s, f),
          )
        : s),
        (u = babelHelpers.extends({}, u, {
          chatWindowWidth:
            o("MAIBAChatAppUtils").getMAIBAChatWindowWidthForState(u),
        })));
    }
    var g = { initialState: u },
      h = g;
    l.default = h;
  },
  98,
);
