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
      f = !1;
    function g() {
      if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) return !0;
      var e = navigator.userAgent;
      return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(e);
    }
    var h = null;
    function y() {
      if (h != null) return h;
      if (
        ((h = !1),
        !g() || window.OffscreenCanvas === void 0 || document === void 0)
      )
        return !1;
      try {
        var t = document.createElement("canvas");
        h = t.getContext("bitmaprenderer") != null;
      } catch (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [portal-mode] bitmaprenderer probe failed",
              ])),
          )
          .catching(r("getErrorSafe")(t)),
          (h = !1));
      }
      return h;
    }
    function C() {
      var e = Reflect.get(window, "crossOriginIsolated");
      return typeof e == "boolean" ? e : null;
    }
    var b = r("WAOnceWithReset")(function () {
      var e = C(),
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
    function v() {
      return b() != null;
    }
    function S() {
      if (r("WAWebEnvironment").isWindows)
        return (
          f ||
            ((f = !0),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [gating] win=true ab=",
                  " ",
                  "/",
                  " ",
                  "/",
                  "",
                ])),
              o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
              o("WAWebUA").UA.browser,
              o("WAWebUA").UA.browserVersion,
              o("WAWebUA").UA.os,
              o("WAWebUA").UA.osVersion,
            )),
          !0
        );
      if (T())
        return (
          f ||
            ((f = !0),
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
        f ||
          ((f = !0),
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
    function R() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    function L() {
      return W();
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function T() {
      return r("WAWebEnvironment").isGuest;
    }
    function D() {
      return r("WAWebEnvironment").isWindows
        ? R()
        : r("WAWebEnvironment").isWeb
          ? L()
          : !1;
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
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_audio_device_list_dedupe",
      );
    }
    var A = 250;
    function F() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_device_menu_animation_stagger_ms",
      );
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, A);
    }
    function O() {
      return $() || N();
    }
    function B(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function W() {
      return (
        r("WAWebEnvironment").isWindows ||
        T() ||
        (S() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function q() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !v() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling") &&
        o("WAWebABProps").getABPropConfigValue("enable_web_group_calling")
      );
    }
    function U() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function V() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function H() {
      return (
        q() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function G() {
      var e = W() && !v();
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
        : v()
          ? !1
          : T()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function j() {
      return (
        r("WAWebEnvironment").isWeb &&
        !r("WAWebEnvironment").isWindows &&
        !T() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    function K() {
      return (
        j() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_early_module_prefetch",
        ) === !0
      );
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
      return te();
    }
    function re() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (te() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    var oe = !1;
    function ae() {
      oe = !0;
    }
    function ie() {
      oe = !1;
    }
    function le() {
      var e = r("justknobx")._("1929");
      return e && !te();
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function ue() {
      return g() ||
        Q ||
        te() ||
        (Y &&
          !o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_webtransport_group_calls",
          )) ||
        oe
        ? !1
        : se();
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport_fast_setup",
      );
    }
    var de = 4;
    function me() {
      var e = navigator.hardwareConcurrency;
      return typeof e == "number" && e > 0 ? e : 8;
    }
    function pe() {
      return (
        me() <= de &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_adaptive_sctp_prewarm",
        ) === !0
      );
    }
    function _e() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function Ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function be(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? Ce() : t ? ye() : r ? he() : ge();
    }
    function ve() {
      return (
        ge() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        )
      );
    }
    function Se(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? Ce() : t ? ye() : r ? he() : ve();
    }
    function Re() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function Le() {
      return o("WAWebUA").UA.isSafari;
    }
    function Ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_screen_share_dual_stream_app_update_dialog_enabled",
      );
    }
    function ke() {
      return (
        "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip
      );
    }
    ((l.isWebKitBrowser = g),
      (l.shouldUsePortalModeForSafari = y),
      (l.getCrossOriginIsolatedState = C),
      (l.getUnsupportedBrowserReason = b),
      (l.isUnsupportedBrowserForWebCalling = v),
      (l.isCallingEnabled = S),
      (l.callLinksEnabledOnWindowsHybrid = R),
      (l.callLinksEnabledForWeb = L),
      (l.isCoexCallingPermissionsEnabled = E),
      (l.canCreateGuestCallLinks = k),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = I),
      (l.isGuestViewer = T),
      (l.callLinksEnabled = D),
      (l.isSmoothCallLinkLobbyEnabled = x),
      (l.isMicrophoneHealthExperienceEnabled = $),
      (l.isMicrophoneHealthCompactAffordanceEnabled = P),
      (l.isMicrophoneDeviceMenuLevelEnabled = N),
      (l.isAudioDeviceMenuSplitEnabled = M),
      (l.isAudioDeviceListDedupeEnabled = w),
      (l.getDeviceMenuAnimationStaggerMs = F),
      (l.isMicrophoneSignalMonitoringEnabled = O),
      (l.isGroupCallMessage = B),
      (l.isGroupCallingEnabled = W),
      (l.isWebGroupCallingUsable = q),
      (l.isWebIntroPanelCallingChangeEnabled = U),
      (l.isWhatsNewCallingHighlightEnabled = V),
      (l.isChatlistCallingBannerEnabled = H),
      (l.isCallsTabEmptyStateUpdateEnabled = G),
      (l.isVoipDownloadEnabled = z),
      (l.isDeferredVoipBootInitEnabled = j),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = K),
      (l.markCurrentCallAsFna = X),
      (l.markCurrentCallAsGroup = J),
      (l.isCurrentCallGroup = Z),
      (l.hasFnaRelay = ee),
      (l.isWinHybridPlusEnabled = te),
      (l.isWinHybridPlusIncomingPopoutEnabled = ne),
      (l.isWebCallingUiEnabled = re),
      (l.markWebTransportFellBack = ae),
      (l.resetWebTransportFallbackState = ie),
      (l.shouldUseOriginalRelayPort = le),
      (l.isWebTransportConfigured = se),
      (l.isWebTransportEnabled = ue),
      (l.isWebTransportFastSetupEnabled = ce),
      (l.getVoipCpuCoreCount = me),
      (l.shouldSkipEagerSctpPrewarm = pe),
      (l.isWinHybridJoinableCallsEnabled = _e),
      (l.isDeviceSwitchingEnabled = fe),
      (l.isCallInfoOptimizationsEnabledFor1to1 = ge),
      (l.isCallInfoOptimizationsEnabledForLGC = he),
      (l.isCallInfoOptimizationsEnabledForAHGC = ye),
      (l.isCallInfoOptimizationsEnabledForCallLink = Ce),
      (l.isCallInfoOptimizationsEnabledForCallType = be),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = ve),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = Se),
      (l.isPopoutReuseCaptureEnabled = Re),
      (l.doesPopoutEndMainWindowScreenShare = Le),
      (l.isScreenShareDualStreamAppUpdateDialogEnabled = Ee),
      (l.isDocPipEnabled = ke));
  },
  98,
);
