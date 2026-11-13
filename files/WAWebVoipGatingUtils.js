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
      f = 2,
      g = f,
      h = !1;
    function y() {
      if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) return !0;
      var e = navigator.userAgent;
      return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(e);
    }
    var C = null;
    function b() {
      if (C != null) return C;
      if (
        ((C = !1),
        !y() || window.OffscreenCanvas === void 0 || document === void 0)
      )
        return !1;
      try {
        var t = document.createElement("canvas");
        C = t.getContext("bitmaprenderer") != null;
      } catch (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [portal-mode] bitmaprenderer probe failed",
              ])),
          )
          .catching(r("getErrorSafe")(t)),
          (C = !1));
      }
      return C;
    }
    function v(e) {
      return (e.isContextInPopoutWindow && e.windowEl !== window) || b();
    }
    function S() {
      var e = Reflect.get(window, "crossOriginIsolated");
      return typeof e == "boolean" ? e : null;
    }
    var R = r("WAOnceWithReset")(function () {
      var e = S(),
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
    function L() {
      return R() != null;
    }
    function E() {
      if (r("WAWebEnvironment").isWindows)
        return (
          h ||
            ((h = !0),
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
      if ($())
        return (
          h ||
            ((h = !0),
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
        h ||
          ((h = !0),
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
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "cloud_api_calling_alpha_ui_enabled",
        ) >= g
      );
    }
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "cloud_api_calling_alpha_ui_enabled",
        ) >= f
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function $() {
      return r("WAWebEnvironment").isGuest;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_smooth_call_link_lobby",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_experience",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_compact_affordance",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_input_level",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_speaker_menu_split",
      );
    }
    var F = 250;
    function O() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_device_menu_animation_stagger_ms",
      );
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, F);
    }
    function B(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function W() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !L() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    var q = 2;
    function U() {
      var e = r("WAWebEnvironment").isWindows ? re() : W();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "voice_chat_companion_experience_version",
        ) >= q
      );
    }
    function V() {
      return (
        W() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function H() {
      return (
        W() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function G() {
      return (
        W() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_missed_call_banner",
      );
    }
    function j() {
      var e = E() && !L();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function K() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : L()
          ? !1
          : $()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    var Q = !1;
    function X(e) {
      Q = e;
    }
    var Y = !1;
    function J(e) {
      Y = e;
    }
    function Z() {
      return Y;
    }
    function ee(e) {
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
    function te() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function ne() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_screen_share_receiver_zoom_enabled",
        ) === !0
      );
    }
    function re() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (te() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    function oe() {
      return (
        re() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_callee_version",
        ) >= 1
      );
    }
    var ae = !1;
    function ie() {
      ae = !0;
    }
    function le() {
      ae = !1;
    }
    function se() {
      var e = r("justknobx")._("1929");
      return e && !te();
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function ce() {
      return y() || (Q && !r("justknobx")._("7700")) || te() || ae ? !1 : ue();
    }
    function de() {
      return ue();
    }
    function me() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_av_sync_strict_fifo_drain",
        ) === !0
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "refresh_group_info_on_mismatch",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function Ce(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ye() : t ? he() : r ? ge() : fe();
    }
    function be() {
      var e = fe(),
        t = o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        );
      return e && t;
    }
    function ve(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ye() : t ? he() : r ? ge() : be();
    }
    function Se() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function Re() {
      return o("WAWebUA").UA.isSafari;
    }
    function Le() {
      return (
        "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip
      );
    }
    function Ee() {
      return (
        ke() &&
        o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video")
      );
    }
    function ke() {
      return o("WAWebUA").UA.isBlink && !y();
    }
    function Ie() {
      return E() && r("justknobx")._("4943");
    }
    ((l.isWebKitBrowser = y),
      (l.shouldUsePortalModeForSafari = b),
      (l.shouldUsePortalMode = v),
      (l.getCrossOriginIsolatedState = S),
      (l.getUnsupportedBrowserReason = R),
      (l.isUnsupportedBrowserForWebCalling = L),
      (l.isCallingEnabled = E),
      (l.isCoexCallingPermissionsEnabled = k),
      (l.isCapiCallingEntryPointEnabled = I),
      (l.isCapiDialpadEnabled = T),
      (l.canCreateGuestCallLinks = D),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = x),
      (l.isGuestViewer = $),
      (l.isSmoothCallLinkLobbyEnabled = P),
      (l.isMicrophoneHealthExperienceEnabled = N),
      (l.isMicrophoneHealthCompactAffordanceEnabled = M),
      (l.isMicrophoneDeviceMenuLevelEnabled = w),
      (l.isAudioDeviceMenuSplitEnabled = A),
      (l.getDeviceMenuAnimationStaggerMs = O),
      (l.isGroupCallMessage = B),
      (l.isWebGroupCallingUsable = W),
      (l.isWebVoiceChatEnabled = U),
      (l.isWebIntroPanelCallingChangeEnabled = V),
      (l.isWhatsNewCallingHighlightEnabled = H),
      (l.isChatlistCallingBannerEnabled = G),
      (l.isChatlistMissedCallCallbackEnabled = z),
      (l.isCallsTabEmptyStateUpdateEnabled = j),
      (l.isVoipDownloadEnabled = K),
      (l.markCurrentCallAsFna = X),
      (l.markCurrentCallAsGroup = J),
      (l.isCurrentCallGroup = Z),
      (l.hasFnaRelay = ee),
      (l.isWinHybridPlusEnabled = te),
      (l.isScreenShareReceiverZoomEnabled = ne),
      (l.isWebCallingUiEnabled = re),
      (l.isCallScreeningCalleeEnabled = oe),
      (l.markWebTransportFellBack = ie),
      (l.resetWebTransportFallbackState = le),
      (l.shouldUseOriginalRelayPort = se),
      (l.isWebTransportConfigured = ue),
      (l.isWebTransportEnabled = ce),
      (l.isWebTransportFastSetupEnabled = de),
      (l.isAvSyncStrictFifoDrainEnabled = me),
      (l.isDeviceSwitchingEnabled = pe),
      (l.isRefreshGroupInfoOnMismatchEnabled = _e),
      (l.isCallInfoOptimizationsEnabledFor1to1 = fe),
      (l.isCallInfoOptimizationsEnabledForLGC = ge),
      (l.isCallInfoOptimizationsEnabledForAHGC = he),
      (l.isCallInfoOptimizationsEnabledForCallLink = ye),
      (l.isCallInfoOptimizationsEnabledForCallType = Ce),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = be),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = ve),
      (l.isPopoutReuseCaptureEnabled = Se),
      (l.doesPopoutEndMainWindowScreenShare = Re),
      (l.isDocPipEnabled = Le),
      (l.isAutoPopoutVideoEnabled = Ee),
      (l.isAutoPopoutVideoBrowser = ke),
      (l.areRichCallNotificationsEnabled = Ie));
  },
  98,
);
