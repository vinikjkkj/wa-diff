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
    function C(e) {
      return (e.isContextInPopoutWindow && e.windowEl !== window) || y();
    }
    function b() {
      var e = Reflect.get(window, "crossOriginIsolated");
      return typeof e == "boolean" ? e : null;
    }
    var v = r("WAOnceWithReset")(function () {
      var e = b(),
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
    function S() {
      return v() != null;
    }
    function R() {
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
      if (I())
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
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_guest_calling_eligible",
      );
    }
    function I() {
      return r("WAWebEnvironment").isGuest;
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_smooth_call_link_lobby",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_experience",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_health_compact_affordance",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_mic_input_level",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_speaker_menu_split",
      );
    }
    var N = 250;
    function M() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_device_menu_animation_stagger_ms",
      );
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, N);
    }
    function w(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function A() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !S() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    var F = 2;
    function O() {
      var e = r("WAWebEnvironment").isWindows ? Z() : A();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "voice_chat_companion_experience_version",
        ) >= F
      );
    }
    function B() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function W() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function q() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_missed_call_banner",
      );
    }
    function V() {
      var e = R() && !S();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function H() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : S()
          ? !1
          : I()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    var G = !1;
    function z(e) {
      G = e;
    }
    var j = !1;
    function K(e) {
      j = e;
    }
    function Q() {
      return j;
    }
    function X(e) {
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
    function Y() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function J() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_screen_share_receiver_zoom_enabled",
        ) === !0
      );
    }
    function Z() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (Y() && r("WAWebEnvironment").getEnvironment() !== "prod")
      );
    }
    function ee() {
      return (
        Z() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_callee_version",
        ) >= 1
      );
    }
    var te = !1;
    function ne() {
      te = !0;
    }
    function re() {
      te = !1;
    }
    function oe() {
      var e = r("justknobx")._("1929");
      return e && !Y();
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function ie() {
      return g() || G || Y() || te ? !1 : ae();
    }
    function le() {
      return ae();
    }
    function se() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_av_sync_strict_fifo_drain",
        ) === !0
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "refresh_group_info_on_mismatch",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function fe(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? _e() : t ? pe() : r ? me() : de();
    }
    function ge() {
      var e = de(),
        t = o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        );
      return e && t;
    }
    function he(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? _e() : t ? pe() : r ? me() : ge();
    }
    function ye() {
      return r("justknobx")._("2102") && o("WAWebUA").UA.isFirefox;
    }
    function Ce() {
      return o("WAWebUA").UA.isSafari;
    }
    function be() {
      return (
        "documentPictureInPicture" in window && !o("WAWebUA").UA.isBrokenDocPip
      );
    }
    function ve() {
      return R() && r("justknobx")._("4943");
    }
    ((l.isWebKitBrowser = g),
      (l.shouldUsePortalModeForSafari = y),
      (l.shouldUsePortalMode = C),
      (l.getCrossOriginIsolatedState = b),
      (l.getUnsupportedBrowserReason = v),
      (l.isUnsupportedBrowserForWebCalling = S),
      (l.isCallingEnabled = R),
      (l.isCoexCallingPermissionsEnabled = L),
      (l.canCreateGuestCallLinks = E),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = k),
      (l.isGuestViewer = I),
      (l.isSmoothCallLinkLobbyEnabled = T),
      (l.isMicrophoneHealthExperienceEnabled = D),
      (l.isMicrophoneHealthCompactAffordanceEnabled = x),
      (l.isMicrophoneDeviceMenuLevelEnabled = $),
      (l.isAudioDeviceMenuSplitEnabled = P),
      (l.getDeviceMenuAnimationStaggerMs = M),
      (l.isGroupCallMessage = w),
      (l.isWebGroupCallingUsable = A),
      (l.isWebVoiceChatEnabled = O),
      (l.isWebIntroPanelCallingChangeEnabled = B),
      (l.isWhatsNewCallingHighlightEnabled = W),
      (l.isChatlistCallingBannerEnabled = q),
      (l.isChatlistMissedCallCallbackEnabled = U),
      (l.isCallsTabEmptyStateUpdateEnabled = V),
      (l.isVoipDownloadEnabled = H),
      (l.markCurrentCallAsFna = z),
      (l.markCurrentCallAsGroup = K),
      (l.isCurrentCallGroup = Q),
      (l.hasFnaRelay = X),
      (l.isWinHybridPlusEnabled = Y),
      (l.isScreenShareReceiverZoomEnabled = J),
      (l.isWebCallingUiEnabled = Z),
      (l.isCallScreeningCalleeEnabled = ee),
      (l.markWebTransportFellBack = ne),
      (l.resetWebTransportFallbackState = re),
      (l.shouldUseOriginalRelayPort = oe),
      (l.isWebTransportConfigured = ae),
      (l.isWebTransportEnabled = ie),
      (l.isWebTransportFastSetupEnabled = le),
      (l.isAvSyncStrictFifoDrainEnabled = se),
      (l.isDeviceSwitchingEnabled = ue),
      (l.isRefreshGroupInfoOnMismatchEnabled = ce),
      (l.isCallInfoOptimizationsEnabledFor1to1 = de),
      (l.isCallInfoOptimizationsEnabledForLGC = me),
      (l.isCallInfoOptimizationsEnabledForAHGC = pe),
      (l.isCallInfoOptimizationsEnabledForCallLink = _e),
      (l.isCallInfoOptimizationsEnabledForCallType = fe),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = ge),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = he),
      (l.isPopoutReuseCaptureEnabled = ye),
      (l.doesPopoutEndMainWindowScreenShare = Ce),
      (l.isDocPipEnabled = be),
      (l.areRichCallNotificationsEnabled = ve));
  },
  98,
);
