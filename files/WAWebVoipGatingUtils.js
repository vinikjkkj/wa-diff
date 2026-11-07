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
      g = !1;
    function h() {
      if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) return !0;
      var e = navigator.userAgent;
      return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(e);
    }
    var y = null;
    function C() {
      if (y != null) return y;
      if (
        ((y = !1),
        !h() || window.OffscreenCanvas === void 0 || document === void 0)
      )
        return !1;
      try {
        var t = document.createElement("canvas");
        y = t.getContext("bitmaprenderer") != null;
      } catch (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [portal-mode] bitmaprenderer probe failed",
              ])),
          )
          .catching(r("getErrorSafe")(t)),
          (y = !1));
      }
      return y;
    }
    function b(e) {
      return (e.isContextInPopoutWindow && e.windowEl !== window) || C();
    }
    function v() {
      var e = Reflect.get(window, "crossOriginIsolated");
      return typeof e == "boolean" ? e : null;
    }
    var S = r("WAOnceWithReset")(function () {
      var e = v(),
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
    function R() {
      return S() != null;
    }
    function L() {
      if (r("WAWebEnvironment").isWindows)
        return (
          g ||
            ((g = !0),
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
      if (D())
        return (
          g ||
            ((g = !0),
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
        g ||
          ((g = !0),
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
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "cloud_api_calling_alpha_ui_enabled",
        ) >= f
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function D() {
      return r("WAWebEnvironment").isGuest;
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_smooth_call_link_lobby",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_experience",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_compact_affordance",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_input_level",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_speaker_menu_split",
      );
    }
    var w = 250;
    function A() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_device_menu_animation_stagger_ms",
      );
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, w);
    }
    function F(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function O() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !R() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    var B = 2;
    function W() {
      var e = r("WAWebEnvironment").isWindows ? te() : O();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "voice_chat_companion_experience_version",
        ) >= B
      );
    }
    function q() {
      return (
        O() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function U() {
      return (
        O() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function V() {
      return (
        O() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_missed_call_banner",
      );
    }
    function G() {
      var e = L() && !R();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function z() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : R()
          ? !1
          : D()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    var j = !1;
    function K(e) {
      j = e;
    }
    var Q = !1;
    function X(e) {
      Q = e;
    }
    function Y() {
      return Q;
    }
    function J(e) {
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
    function Z() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function ee() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_screen_share_receiver_zoom_enabled",
        ) === !0
      );
    }
    function te() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (Z() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    function ne() {
      return (
        te() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_callee_version",
        ) >= 1
      );
    }
    var re = !1;
    function oe() {
      re = !0;
    }
    function ae() {
      re = !1;
    }
    function ie() {
      var e = r("justknobx")._("1929");
      return e && !Z();
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function se() {
      return h() || j || Z() || re ? !1 : le();
    }
    function ue() {
      return le();
    }
    function ce() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_av_sync_strict_fifo_drain",
        ) === !0
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "refresh_group_info_on_mismatch",
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function he(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ge() : t ? fe() : r ? _e() : pe();
    }
    function ye() {
      var e = pe(),
        t = o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        );
      return e && t;
    }
    function Ce(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ge() : t ? fe() : r ? _e() : ye();
    }
    function be() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function ve() {
      return o("WAWebUA").UA.isSafari;
    }
    function Se() {
      return (
        "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip
      );
    }
    function Re() {
      return (
        Le() &&
        o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video")
      );
    }
    function Le() {
      return o("WAWebUA").UA.isBlink && !h();
    }
    function Ee() {
      return L() && r("justknobx")._("4943");
    }
    ((l.isWebKitBrowser = h),
      (l.shouldUsePortalModeForSafari = C),
      (l.shouldUsePortalMode = b),
      (l.getCrossOriginIsolatedState = v),
      (l.getUnsupportedBrowserReason = S),
      (l.isUnsupportedBrowserForWebCalling = R),
      (l.isCallingEnabled = L),
      (l.isCoexCallingPermissionsEnabled = E),
      (l.isCapiDialpadEnabled = k),
      (l.canCreateGuestCallLinks = I),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = T),
      (l.isGuestViewer = D),
      (l.isSmoothCallLinkLobbyEnabled = x),
      (l.isMicrophoneHealthExperienceEnabled = $),
      (l.isMicrophoneHealthCompactAffordanceEnabled = P),
      (l.isMicrophoneDeviceMenuLevelEnabled = N),
      (l.isAudioDeviceMenuSplitEnabled = M),
      (l.getDeviceMenuAnimationStaggerMs = A),
      (l.isGroupCallMessage = F),
      (l.isWebGroupCallingUsable = O),
      (l.isWebVoiceChatEnabled = W),
      (l.isWebIntroPanelCallingChangeEnabled = q),
      (l.isWhatsNewCallingHighlightEnabled = U),
      (l.isChatlistCallingBannerEnabled = V),
      (l.isChatlistMissedCallCallbackEnabled = H),
      (l.isCallsTabEmptyStateUpdateEnabled = G),
      (l.isVoipDownloadEnabled = z),
      (l.markCurrentCallAsFna = K),
      (l.markCurrentCallAsGroup = X),
      (l.isCurrentCallGroup = Y),
      (l.hasFnaRelay = J),
      (l.isWinHybridPlusEnabled = Z),
      (l.isScreenShareReceiverZoomEnabled = ee),
      (l.isWebCallingUiEnabled = te),
      (l.isCallScreeningCalleeEnabled = ne),
      (l.markWebTransportFellBack = oe),
      (l.resetWebTransportFallbackState = ae),
      (l.shouldUseOriginalRelayPort = ie),
      (l.isWebTransportConfigured = le),
      (l.isWebTransportEnabled = se),
      (l.isWebTransportFastSetupEnabled = ue),
      (l.isAvSyncStrictFifoDrainEnabled = ce),
      (l.isDeviceSwitchingEnabled = de),
      (l.isRefreshGroupInfoOnMismatchEnabled = me),
      (l.isCallInfoOptimizationsEnabledFor1to1 = pe),
      (l.isCallInfoOptimizationsEnabledForLGC = _e),
      (l.isCallInfoOptimizationsEnabledForAHGC = fe),
      (l.isCallInfoOptimizationsEnabledForCallLink = ge),
      (l.isCallInfoOptimizationsEnabledForCallType = he),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = ye),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = Ce),
      (l.isPopoutReuseCaptureEnabled = be),
      (l.doesPopoutEndMainWindowScreenShare = ve),
      (l.isDocPipEnabled = Se),
      (l.isAutoPopoutVideoEnabled = Re),
      (l.isAutoPopoutVideoBrowser = Le),
      (l.areRichCallNotificationsEnabled = Ee));
  },
  98,
);
