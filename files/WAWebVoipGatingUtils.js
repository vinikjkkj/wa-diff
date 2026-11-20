__d(
  "WAWebVoipGatingUtils",
  [
    "WALogger",
    "WAOnceWithReset",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebUA",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 500,
      g = 2,
      h = g,
      y = !1;
    function C() {
      if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) return !0;
      var e = navigator.userAgent;
      return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(e);
    }
    var b = null;
    function v() {
      if (b != null) return b;
      if (
        ((b = !1),
        !C() || window.OffscreenCanvas === void 0 || document === void 0)
      )
        return !1;
      try {
        var t = document.createElement("canvas");
        b = t.getContext("bitmaprenderer") != null;
      } catch (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [portal-mode] bitmaprenderer probe failed",
              ])),
          )
          .catching(r("getErrorSafe")(t)),
          (b = !1));
      }
      return b;
    }
    function S(e) {
      return (e.isContextInPopoutWindow && e.windowEl !== window) || v();
    }
    function R() {
      var e = Reflect.get(window, "crossOriginIsolated");
      return typeof e == "boolean" ? e : null;
    }
    var L = r("WAOnceWithReset")(function () {
      var e = R(),
        t = Reflect.get(window, "isSecureContext") === !0,
        n = String(e);
      return window.SharedArrayBuffer === void 0
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [browser] no SharedArrayBuffer coi=",
                " sec=",
                " ",
                "/",
                " ",
                "/",
                "",
              ])),
            n,
            t,
            o("WAWebUA").UA.browser,
            o("WAWebUA").UA.browserVersion,
            o("WAWebUA").UA.os,
            o("WAWebUA").UA.osVersion,
          ),
          "missing_shared_array_buffer")
        : window.Atomics === void 0
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [browser] no Atomics coi=",
                  " sec=",
                  " ",
                  "/",
                  " ",
                  "/",
                  "",
                ])),
              n,
              t,
              o("WAWebUA").UA.browser,
              o("WAWebUA").UA.browserVersion,
              o("WAWebUA").UA.os,
              o("WAWebUA").UA.osVersion,
            ),
            "missing_atomics")
          : window.RTCPeerConnection === void 0
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [browser] no RTCPeerConnection coi=",
                    " sec=",
                    " ",
                    "/",
                    " ",
                    "/",
                    "",
                  ])),
                n,
                t,
                o("WAWebUA").UA.browser,
                o("WAWebUA").UA.browserVersion,
                o("WAWebUA").UA.os,
                o("WAWebUA").UA.osVersion,
              ),
              "missing_rtc_peer_connection")
            : o("WAWebUA").UA.isBrokenVoipWasm
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [browser] Safari ",
                      " broken WASM coi=",
                      " sec=",
                      " ",
                      "/",
                      " ",
                      "/",
                      "",
                    ])),
                  o("WAWebUA").UA.browserVersion,
                  n,
                  t,
                  o("WAWebUA").UA.browser,
                  o("WAWebUA").UA.browserVersion,
                  o("WAWebUA").UA.os,
                  o("WAWebUA").UA.osVersion,
                ),
                "broken_voip_wasm")
              : null;
    });
    function E() {
      return L() != null;
    }
    function k() {
      if (r("WAWebEnvironment").isWindows)
        return (
          y ||
            ((y = !0),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [gating] win=true ",
                  "/",
                  " ",
                  "/",
                  "",
                ])),
              o("WAWebUA").UA.browser,
              o("WAWebUA").UA.browserVersion,
              o("WAWebUA").UA.os,
              o("WAWebUA").UA.osVersion,
            )),
          !0
        );
      if (P())
        return (
          y ||
            ((y = !0),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [gating] guest=true ab=true ",
                  "/",
                  " ",
                  "/",
                  "",
                ])),
              o("WAWebUA").UA.browser,
              o("WAWebUA").UA.browserVersion,
              o("WAWebUA").UA.os,
              o("WAWebUA").UA.osVersion,
            )),
          !0
        );
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling");
      return (
        y ||
          ((y = !0),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [gating] win=false ab=",
                " ",
                "/",
                " ",
                "/",
                "",
              ])),
            e,
            o("WAWebUA").UA.browser,
            o("WAWebUA").UA.browserVersion,
            o("WAWebUA").UA.os,
            o("WAWebUA").UA.osVersion,
          )),
        e
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "cloud_api_calling_alpha_ui_enabled",
        ) >= h
      );
    }
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "cloud_api_calling_alpha_ui_enabled",
        ) >= g
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function P() {
      return r("WAWebEnvironment").isGuest;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_smooth_call_link_lobby",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_experience",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_compact_affordance",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_input_level",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_speaker_menu_split",
      );
    }
    var O = 250;
    function B() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_device_menu_animation_stagger_ms",
      );
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, O);
    }
    function W(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function q() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !E() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    var U = 2;
    function V() {
      var e = r("WAWebEnvironment").isWindows ? oe() : q();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "voice_chat_companion_experience_version",
        ) >= U
      );
    }
    function H() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function G() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function z() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_missed_call_banner",
      );
    }
    function K() {
      var e = k() && !E();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function Q() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : E()
          ? !1
          : P()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    var X = !1;
    function Y(e) {
      X = e;
    }
    var J = !1;
    function Z(e) {
      J = e;
    }
    function ee() {
      return J;
    }
    function te(e) {
      return e
        .mapChildrenWithTag("relay", function (e) {
          return e
            .mapChildrenWithTag("te2", function (e) {
              return e.hasAttr("is_fna");
            })
            .some(Boolean);
        })
        .some(Boolean);
    }
    function ne() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function re() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_screen_share_receiver_zoom_enabled",
        ) === !0
      );
    }
    function oe() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (ne() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    function ae() {
      return (
        oe() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_callee_version",
        ) >= 1
      );
    }
    var ie = !1;
    function le() {
      ie = !0;
    }
    function se() {
      ie = !1;
    }
    function ue() {
      var e = r("justknobx")._("1929");
      return e && !ne();
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function de() {
      return C() || (X && !r("justknobx")._("7700")) || ne() || ie ? !1 : ce();
    }
    function me() {
      return ce();
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport_until_accept",
      );
    }
    function _e() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_voip_webtransport_timeout_before_sctp_fallback_ms",
      );
      return e > 0 ? e : f;
    }
    function fe() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_av_sync_strict_fifo_drain",
        ) === !0
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "refresh_group_info_on_mismatch",
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function Ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function be() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function Se(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ve() : t ? be() : r ? Ce() : ye();
    }
    function Re() {
      var e = ye(),
        t = o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        );
      return e && t;
    }
    function Le(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ve() : t ? be() : r ? Ce() : Re();
    }
    function Ee() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function ke() {
      return o("WAWebUA").UA.isSafari;
    }
    function Ie() {
      return (
        "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip
      );
    }
    function Te() {
      return (
        De() &&
        o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video")
      );
    }
    function De() {
      return o("WAWebUA").UA.isBlink && !C();
    }
    function xe() {
      return k() && r("justknobx")._("4943");
    }
    ((l.isWebKitBrowser = C),
      (l.shouldUsePortalModeForSafari = v),
      (l.shouldUsePortalMode = S),
      (l.getCrossOriginIsolatedState = R),
      (l.getUnsupportedBrowserReason = L),
      (l.isUnsupportedBrowserForWebCalling = E),
      (l.isCallingEnabled = k),
      (l.isCoexCallingPermissionsEnabled = I),
      (l.isCapiCallingEntryPointEnabled = T),
      (l.isCapiDialpadEnabled = D),
      (l.canCreateGuestCallLinks = x),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = $),
      (l.isGuestViewer = P),
      (l.isSmoothCallLinkLobbyEnabled = N),
      (l.isMicrophoneHealthExperienceEnabled = M),
      (l.isMicrophoneHealthCompactAffordanceEnabled = w),
      (l.isMicrophoneDeviceMenuLevelEnabled = A),
      (l.isAudioDeviceMenuSplitEnabled = F),
      (l.getDeviceMenuAnimationStaggerMs = B),
      (l.isGroupCallMessage = W),
      (l.isWebGroupCallingUsable = q),
      (l.isWebVoiceChatEnabled = V),
      (l.isWebIntroPanelCallingChangeEnabled = H),
      (l.isWhatsNewCallingHighlightEnabled = G),
      (l.isChatlistCallingBannerEnabled = z),
      (l.isChatlistMissedCallCallbackEnabled = j),
      (l.isCallsTabEmptyStateUpdateEnabled = K),
      (l.isVoipDownloadEnabled = Q),
      (l.markCurrentCallAsFna = Y),
      (l.markCurrentCallAsGroup = Z),
      (l.isCurrentCallGroup = ee),
      (l.hasFnaRelay = te),
      (l.isWinHybridPlusEnabled = ne),
      (l.isScreenShareReceiverZoomEnabled = re),
      (l.isWebCallingUiEnabled = oe),
      (l.isCallScreeningCalleeEnabled = ae),
      (l.markWebTransportFellBack = le),
      (l.resetWebTransportFallbackState = se),
      (l.shouldUseOriginalRelayPort = ue),
      (l.isWebTransportConfigured = ce),
      (l.isWebTransportEnabled = de),
      (l.isWebTransportFastSetupEnabled = me),
      (l.isWebTransportUntilAcceptEnabled = pe),
      (l.getWebTransportSctpFallbackTimeoutMs = _e),
      (l.isAvSyncStrictFifoDrainEnabled = fe),
      (l.isDeviceSwitchingEnabled = ge),
      (l.isRefreshGroupInfoOnMismatchEnabled = he),
      (l.isCallInfoOptimizationsEnabledFor1to1 = ye),
      (l.isCallInfoOptimizationsEnabledForLGC = Ce),
      (l.isCallInfoOptimizationsEnabledForAHGC = be),
      (l.isCallInfoOptimizationsEnabledForCallLink = ve),
      (l.isCallInfoOptimizationsEnabledForCallType = Se),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = Re),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = Le),
      (l.isPopoutReuseCaptureEnabled = Ee),
      (l.doesPopoutEndMainWindowScreenShare = ke),
      (l.isDocPipEnabled = Ie),
      (l.isAutoPopoutVideoEnabled = Te),
      (l.isAutoPopoutVideoBrowser = De),
      (l.areRichCallNotificationsEnabled = xe));
  },
  98,
);
