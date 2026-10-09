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
      return q();
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
        "wa_web_calling_notification_icons_enabled",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_calling_incoming_call_tab_indicator_enabled",
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
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_voip_audio_device_list_dedupe",
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
      return S();
    }
    function U() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !v() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    function V() {
      return (
        U() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function H() {
      return (
        U() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function G() {
      return (
        U() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function z() {
      var e = q() && !v();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function j() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : v()
          ? !1
          : T()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function K() {
      return (
        r("WAWebEnvironment").isWeb &&
        !r("WAWebEnvironment").isWindows &&
        !T() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    function Q() {
      return (
        K() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_early_module_prefetch",
        ) === !0
      );
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
        !r("WAWebEnvironment").isWindows ||
        (ne() && r("WAWebEnvironment").getEnvironment() !== "prod")
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
      return e && !ne();
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function ue() {
      return g() || X || ne() || oe ? !1 : se();
    }
    function ce() {
      return se();
    }
    function de() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_av_sync_strict_fifo_drain",
        ) === !0
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
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
      return (
        pe() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        )
      );
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
      return S() && r("justknobx")._("4943");
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
      (l.areCallNotificationIconsEnabled = P),
      (l.isIncomingCallTabIndicatorEnabled = N),
      (l.isMicrophoneHealthCompactAffordanceEnabled = M),
      (l.isMicrophoneDeviceMenuLevelEnabled = w),
      (l.isAudioDeviceMenuSplitEnabled = A),
      (l.isAudioDeviceListDedupeEnabled = F),
      (l.getDeviceMenuAnimationStaggerMs = B),
      (l.isGroupCallMessage = W),
      (l.isGroupCallingEnabled = q),
      (l.isWebGroupCallingUsable = U),
      (l.isWebIntroPanelCallingChangeEnabled = V),
      (l.isWhatsNewCallingHighlightEnabled = H),
      (l.isChatlistCallingBannerEnabled = G),
      (l.isCallsTabEmptyStateUpdateEnabled = z),
      (l.isVoipDownloadEnabled = j),
      (l.isDeferredVoipBootInitEnabled = K),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = Q),
      (l.markCurrentCallAsFna = Y),
      (l.markCurrentCallAsGroup = Z),
      (l.isCurrentCallGroup = ee),
      (l.hasFnaRelay = te),
      (l.isWinHybridPlusEnabled = ne),
      (l.isWebCallingUiEnabled = re),
      (l.markWebTransportFellBack = ae),
      (l.resetWebTransportFallbackState = ie),
      (l.shouldUseOriginalRelayPort = le),
      (l.isWebTransportConfigured = se),
      (l.isWebTransportEnabled = ue),
      (l.isWebTransportFastSetupEnabled = ce),
      (l.isAvSyncStrictFifoDrainEnabled = de),
      (l.isDeviceSwitchingEnabled = me),
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
      (l.areRichCallNotificationsEnabled = Re));
  },
  98,
);
