__d(
  "WAWebSyncOnABProps",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsWamGlobals",
    "WAWebProtobufsE2E.pb",
    "WAWebStoreSpecialAbProps",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsUiRefresh",
    "asyncToGeneratorRuntime",
    "cr:254",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:254")) != null ? e : {},
      c = u.sendPeerDataOperationRequest;
    function d(e) {
      e !==
        o("WAWebABProps").getABPropConfigValue(
          "service_improvement_opt_out_flag",
        ) &&
        o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes();
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebUserPrefsAppStateSync",
          ).getNonCriticalDataSyncStatus();
          (e == null
            ? void 0
            : e[
                o("WAWebUserPrefsTypes").NonCriticalDataSyncStatusType
                  .RECENT_STICKER_INITIALIZED
              ]) ===
            o("WAWebUserPrefsTypes").RecentStickerInitializedStatusType
              .NEED_REQUEST_BOOTSTRAP &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[RecentStickers] req peer msg for bootstrap",
                ])),
            ),
            yield c == null
              ? void 0
              : c(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .SEND_RECENT_STICKER_BOOTSTRAP,
                  {},
                ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_token_storage_kill_switch_web",
      );
      t === !0 && e === !1 && o("WAWebUserPrefsCTWA").clearAdAccountToken();
    }
    function f(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_ui_refresh_m1");
      e === !0 &&
        t === !1 &&
        (o("WAWebUserPrefsUiRefresh").resetNuxViewCount(),
        o("WAWebUserPrefsUiRefresh").setUiRefreshNuxAcked(!1),
        o("WAWebStoreSpecialAbProps").storeSpecialAbProps());
    }
    ((l.handleServiceImprovementOptOutFlagABPropConfigValueChange = d),
      (l.ensureNonCriticalDataSyncIsInitialized = m),
      (l.handleAdAccountTokenStorageKillSwitchABPropConfigValueChange = _),
      (l.handleUIRefreshNuxOnABPropConfigValueChange = f));
  },
  98,
);
