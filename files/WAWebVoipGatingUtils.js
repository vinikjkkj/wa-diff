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
      if (k())
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
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function k() {
      return r("WAWebEnvironment").isGuest;
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_smooth_call_link_lobby",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_experience",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_compact_affordance",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_input_level",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_speaker_menu_split",
      );
    }
    var P = 250;
    function N() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_device_menu_animation_stagger_ms",
      );
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, P);
    }
    function M(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function w() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !v() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    function A() {
      return (
        w() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function F() {
      return (
        w() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function O() {
      return (
        w() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_missed_call_banner",
      );
    }
    function W() {
      var e = S() && !v();
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
          : k()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    var U = !1;
    function V(e) {
      U = e;
    }
    var H = !1;
    function G(e) {
      H = e;
    }
    function z() {
      return H;
    }
    function j(e) {
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
    function K() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function Q() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (K() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    var X = !1;
    function Y() {
      X = !0;
    }
    function J() {
      X = !1;
    }
    function Z() {
      var e = r("justknobx")._("1929");
      return e && !K();
    }
    function ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function te() {
      return g() || U || K() || X ? !1 : ee();
    }
    function ne() {
      return ee();
    }
    function re() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_av_sync_strict_fifo_drain",
        ) === !0
      );
    }
    function oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "refresh_group_info_on_mismatch",
      );
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function ce(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ue() : t ? se() : r ? le() : ie();
    }
    function de() {
      var e = ie(),
        t = o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        );
      return e && t;
    }
    function me(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ue() : t ? se() : r ? le() : de();
    }
    function pe() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function _e() {
      return o("WAWebUA").UA.isSafari;
    }
    function fe() {
      return (
        "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip
      );
    }
    function ge() {
      return S() && r("justknobx")._("4943");
    }
    ((l.isWebKitBrowser = g),
      (l.shouldUsePortalModeForSafari = y),
      (l.getCrossOriginIsolatedState = C),
      (l.getUnsupportedBrowserReason = b),
      (l.isUnsupportedBrowserForWebCalling = v),
      (l.isCallingEnabled = S),
      (l.isCoexCallingPermissionsEnabled = R),
      (l.canCreateGuestCallLinks = L),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = E),
      (l.isGuestViewer = k),
      (l.isSmoothCallLinkLobbyEnabled = I),
      (l.isMicrophoneHealthExperienceEnabled = T),
      (l.isMicrophoneHealthCompactAffordanceEnabled = D),
      (l.isMicrophoneDeviceMenuLevelEnabled = x),
      (l.isAudioDeviceMenuSplitEnabled = $),
      (l.getDeviceMenuAnimationStaggerMs = N),
      (l.isGroupCallMessage = M),
      (l.isWebGroupCallingUsable = w),
      (l.isWebIntroPanelCallingChangeEnabled = A),
      (l.isWhatsNewCallingHighlightEnabled = F),
      (l.isChatlistCallingBannerEnabled = O),
      (l.isChatlistMissedCallBannerEnabled = B),
      (l.isCallsTabEmptyStateUpdateEnabled = W),
      (l.isVoipDownloadEnabled = q),
      (l.markCurrentCallAsFna = V),
      (l.markCurrentCallAsGroup = G),
      (l.isCurrentCallGroup = z),
      (l.hasFnaRelay = j),
      (l.isWinHybridPlusEnabled = K),
      (l.isWebCallingUiEnabled = Q),
      (l.markWebTransportFellBack = Y),
      (l.resetWebTransportFallbackState = J),
      (l.shouldUseOriginalRelayPort = Z),
      (l.isWebTransportConfigured = ee),
      (l.isWebTransportEnabled = te),
      (l.isWebTransportFastSetupEnabled = ne),
      (l.isAvSyncStrictFifoDrainEnabled = re),
      (l.isDeviceSwitchingEnabled = oe),
      (l.isRefreshGroupInfoOnMismatchEnabled = ae),
      (l.isCallInfoOptimizationsEnabledFor1to1 = ie),
      (l.isCallInfoOptimizationsEnabledForLGC = le),
      (l.isCallInfoOptimizationsEnabledForAHGC = se),
      (l.isCallInfoOptimizationsEnabledForCallLink = ue),
      (l.isCallInfoOptimizationsEnabledForCallType = ce),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = de),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = me),
      (l.isPopoutReuseCaptureEnabled = pe),
      (l.doesPopoutEndMainWindowScreenShare = _e),
      (l.isDocPipEnabled = fe),
      (l.areRichCallNotificationsEnabled = ge));
  },
  98,
);
