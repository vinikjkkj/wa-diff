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
      return w();
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
        "wa_web_voip_mic_input_level",
      );
    }
    function N() {
      return $() || P();
    }
    function M(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function w() {
      return (
        r("WAWebEnvironment").isWindows ||
        T() ||
        (S() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function A() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !v() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling") &&
        o("WAWebABProps").getABPropConfigValue("enable_web_group_calling")
      );
    }
    function F() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function O() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function B() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function W() {
      var e = w() && !v();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function q() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : v()
          ? !1
          : T()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function U() {
      return (
        r("WAWebEnvironment").isWeb &&
        !r("WAWebEnvironment").isWindows &&
        !T() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    function V() {
      return (
        U() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_early_module_prefetch",
        ) === !0
      );
    }
    var H = !1;
    function G(e) {
      H = e;
    }
    var z = !1;
    function j(e) {
      z = e;
    }
    function K(e) {
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
    function Q() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function X() {
      return Q();
    }
    function Y() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (Q() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    var J = !1;
    function Z() {
      J = !0;
    }
    function ee() {
      J = !1;
    }
    function te() {
      var e = r("justknobx")._("1929");
      return e && !Q();
    }
    function ne() {
      return g() ||
        H ||
        Q() ||
        (z &&
          !o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_webtransport_group_calls",
          )) ||
        J
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_webtransport",
          );
    }
    function re() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport_fast_setup",
      );
    }
    var oe = 4;
    function ae() {
      var e = navigator.hardwareConcurrency;
      return typeof e == "number" && e > 0 ? e : 8;
    }
    function ie() {
      return (
        ae() <= oe &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_adaptive_sctp_prewarm",
        ) === !0
      );
    }
    function le() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function pe(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? me() : t ? de() : r ? ce() : ue();
    }
    function _e() {
      return (
        ue() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        )
      );
    }
    function fe(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? me() : t ? de() : r ? ce() : _e();
    }
    function ge() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_screen_share_dual_stream_app_update_dialog_enabled",
      );
    }
    function ye() {
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
      (l.isMicrophoneDeviceMenuLevelEnabled = P),
      (l.isMicrophoneSignalMonitoringEnabled = N),
      (l.isGroupCallMessage = M),
      (l.isGroupCallingEnabled = w),
      (l.isWebGroupCallingUsable = A),
      (l.isWebIntroPanelCallingChangeEnabled = F),
      (l.isWhatsNewCallingHighlightEnabled = O),
      (l.isChatlistCallingBannerEnabled = B),
      (l.isCallsTabEmptyStateUpdateEnabled = W),
      (l.isVoipDownloadEnabled = q),
      (l.isDeferredVoipBootInitEnabled = U),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = V),
      (l.markCurrentCallAsFna = G),
      (l.markCurrentCallAsGroup = j),
      (l.hasFnaRelay = K),
      (l.isWinHybridPlusEnabled = Q),
      (l.isWinHybridPlusIncomingPopoutEnabled = X),
      (l.isWebCallingUiEnabled = Y),
      (l.markWebTransportFellBack = Z),
      (l.resetWebTransportFallbackState = ee),
      (l.shouldUseOriginalRelayPort = te),
      (l.isWebTransportEnabled = ne),
      (l.isWebTransportFastSetupEnabled = re),
      (l.getVoipCpuCoreCount = ae),
      (l.shouldSkipEagerSctpPrewarm = ie),
      (l.isWinHybridJoinableCallsEnabled = le),
      (l.isDeviceSwitchingEnabled = se),
      (l.isCallInfoOptimizationsEnabledFor1to1 = ue),
      (l.isCallInfoOptimizationsEnabledForLGC = ce),
      (l.isCallInfoOptimizationsEnabledForAHGC = de),
      (l.isCallInfoOptimizationsEnabledForCallLink = me),
      (l.isCallInfoOptimizationsEnabledForCallType = pe),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = _e),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = fe),
      (l.isPopoutReuseCaptureEnabled = ge),
      (l.isScreenShareDualStreamAppUpdateDialogEnabled = he),
      (l.isDocPipEnabled = ye));
  },
  98,
);
