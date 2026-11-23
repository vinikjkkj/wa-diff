__d(
  "WAWebSyncOnABProps",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsWamGlobals",
    "WAWebLocalStorage",
    "WAWebProtobufsE2E.pb",
    "WAWebStoreSpecialAbProps",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsCTWA",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsUiRefresh",
    "cr:254",
    "nullthrows",
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
    async function m() {
      var e = await o(
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
        await (c == null
          ? void 0
          : c(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .SEND_RECENT_STICKER_BOOTSTRAP,
              {},
            )));
    }
    function p(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_token_storage_kill_switch_web",
      );
      t === !0 && e === !1 && o("WAWebUserPrefsCTWA").clearAdAccountToken();
    }
    function _(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_ui_refresh_m1");
      e === !0 &&
        t === !1 &&
        (o("WAWebUserPrefsUiRefresh").resetNuxViewCount(),
        o("WAWebUserPrefsUiRefresh").setUiRefreshNuxAcked(!1),
        o("WAWebStoreSpecialAbProps").storeSpecialAbProps());
    }
    function f() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "smb_qp_emergency_force_fetch_nonce",
      );
      if (e === "") return !1;
      var t = r("nullthrows")(r("WAWebLocalStorage")).getItem(
        o("WAWebUserPrefsKeys").KEYS
          .QP_EMERGENCY_FORCE_FETCH_LAST_HANDLED_NONCE,
      );
      return e === t
        ? !1
        : (r("nullthrows")(r("WAWebLocalStorage")).setItem(
            o("WAWebUserPrefsKeys").KEYS
              .QP_EMERGENCY_FORCE_FETCH_LAST_HANDLED_NONCE,
            e,
          ),
          !0);
    }
    ((l.handleServiceImprovementOptOutFlagABPropConfigValueChange = d),
      (l.ensureNonCriticalDataSyncIsInitialized = m),
      (l.handleAdAccountTokenStorageKillSwitchABPropConfigValueChange = p),
      (l.handleUIRefreshNuxOnABPropConfigValueChange = _),
      (l.consumeQpEmergencyForceFetchNonce = f));
  },
  98,
);
