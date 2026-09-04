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
      if (D())
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
      return N();
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
    function I(e) {
      return !1;
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_guest_calling_waiting_room_admin_xp_enabled",
      );
    }
    function D() {
      return r("WAWebEnvironment").isGuest;
    }
    function x() {
      return r("WAWebEnvironment").isWindows
        ? R()
        : r("WAWebEnvironment").isWeb
          ? L()
          : !1;
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_smooth_call_link_lobby",
      );
    }
    function P(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function N() {
      return (
        r("WAWebEnvironment").isWindows ||
        D() ||
        (S() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function M() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !v() &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling") &&
        o("WAWebABProps").getABPropConfigValue("enable_web_group_calling")
      );
    }
    function w() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function A() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        )
      );
    }
    function F() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chatlist_activation_banner_enabled",
        )
      );
    }
    function O() {
      var e = N() && !v();
      return (
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_empty_state_update_enabled",
        )
      );
    }
    function B() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : v()
          ? !1
          : D()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function W() {
      return (
        r("WAWebEnvironment").isWeb &&
        !r("WAWebEnvironment").isWindows &&
        !D() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    function q() {
      return (
        W() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_early_module_prefetch",
        ) === !0
      );
    }
    var U = !1;
    function V(e) {
      U = e;
    }
    var H = !1;
    function G(e) {
      H = e;
    }
    function z(e) {
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
    function j() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    function K() {
      return j();
    }
    function Q() {
      return (
        !r("WAWebEnvironment").isWindows ||
        (j() && r("WAWebEnvironment").getEnvironment() !== "prod")
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
      return e && !j();
    }
    function ee() {
      return g() ||
        U ||
        j() ||
        (H &&
          !o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_webtransport_group_calls",
          )) ||
        X
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_webtransport",
          );
    }
    var te = 4;
    function ne() {
      var e = navigator.hardwareConcurrency;
      return typeof e == "number" && e > 0 ? e : 8;
    }
    function re() {
      return (
        ne() <= te &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_adaptive_sctp_prewarm",
        ) === !0
      );
    }
    function oe() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
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
      return (
        ie() &&
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1_context_menu",
        )
      );
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
      return o("WAWebABProps").getABPropConfigValue(
        "call_screen_share_dual_stream_app_update_dialog_enabled",
      );
    }
    function fe() {
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
      (l.isCallLinkGuestEligible = I),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = T),
      (l.isGuestViewer = D),
      (l.callLinksEnabled = x),
      (l.isSmoothCallLinkLobbyEnabled = $),
      (l.isGroupCallMessage = P),
      (l.isGroupCallingEnabled = N),
      (l.isWebGroupCallingUsable = M),
      (l.isWebIntroPanelCallingChangeEnabled = w),
      (l.isWhatsNewCallingHighlightEnabled = A),
      (l.isChatlistCallingBannerEnabled = F),
      (l.isCallsTabEmptyStateUpdateEnabled = O),
      (l.isVoipDownloadEnabled = B),
      (l.isDeferredVoipBootInitEnabled = W),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = q),
      (l.markCurrentCallAsFna = V),
      (l.markCurrentCallAsGroup = G),
      (l.hasFnaRelay = z),
      (l.isWinHybridPlusEnabled = j),
      (l.isWinHybridPlusIncomingPopoutEnabled = K),
      (l.isWebCallingUiEnabled = Q),
      (l.markWebTransportFellBack = Y),
      (l.resetWebTransportFallbackState = J),
      (l.shouldUseOriginalRelayPort = Z),
      (l.isWebTransportEnabled = ee),
      (l.getVoipCpuCoreCount = ne),
      (l.shouldSkipEagerSctpPrewarm = re),
      (l.isWinHybridJoinableCallsEnabled = oe),
      (l.isDeviceSwitchingEnabled = ae),
      (l.isCallInfoOptimizationsEnabledFor1to1 = ie),
      (l.isCallInfoOptimizationsEnabledForLGC = le),
      (l.isCallInfoOptimizationsEnabledForAHGC = se),
      (l.isCallInfoOptimizationsEnabledForCallLink = ue),
      (l.isCallInfoOptimizationsEnabledForCallType = ce),
      (l.isCallInfoOptimizations1to1ContextMenuEnabled = de),
      (l.isCallInfoOptimizationsContextMenuEnabledForCallType = me),
      (l.isPopoutReuseCaptureEnabled = pe),
      (l.isScreenShareDualStreamAppUpdateDialogEnabled = _e),
      (l.isDocPipEnabled = fe));
  },
  98,
);
