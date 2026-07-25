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
        !g() ||
          !r("justknobx")._("193") ||
          window.OffscreenCanvas === void 0 ||
          document === void 0)
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
      return P();
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_guest_calling_waiting_room_approval_note_enabled",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_guest_calling_waiting_room_admin_xp_enabled",
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
    function $(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function P() {
      return (
        r("WAWebEnvironment").isWindows ||
        T() ||
        (S() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function N() {
      return (
        P() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_sidenav_calls_tab_nux_enabled",
        )
      );
    }
    function M() {
      return (
        D() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_chat_empty_state_update_enabled",
        )
      );
    }
    function w() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : v()
          ? !1
          : T()
            ? !0
            : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    var A = !1;
    function F(e) {
      A = e;
    }
    function O(e) {
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
    function B() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_win_hybrid_plus_enabled",
        ) === !0
      );
    }
    var W = !1;
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport_fallback",
      );
    }
    function U() {
      W = !0;
    }
    function V() {
      W = !1;
    }
    function H() {
      var e = r("justknobx")._("1929");
      return e && !B();
    }
    function G() {
      return g() || A || B() || (W && q())
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_webtransport",
          );
    }
    var z = 4;
    function j() {
      var e = navigator.hardwareConcurrency;
      return typeof e == "number" && e > 0 ? e : 8;
    }
    function K() {
      return (
        j() <= z &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_adaptive_sctp_prewarm",
        ) === !0
      );
    }
    function Q() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switch_show_entry_point",
      );
    }
    function J(e) {
      return X() && e && !Y();
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function te() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function re(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? ne() : t ? te() : r ? ee() : Z();
    }
    function oe() {
      return (
        r("justknobx")._("2102") &&
        (o("WAWebUA").UA.isSafari || o("WAWebUA").UA.isFirefox)
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_screen_share_dual_stream_app_update_dialog_enabled",
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
      (l.isWaitingRoomToggleApprovalNoteEnabled = k),
      (l.isGuestCallingWaitingRoomAdminXpEnabled = I),
      (l.isGuestViewer = T),
      (l.callLinksEnabled = D),
      (l.isSmoothCallLinkLobbyEnabled = x),
      (l.isGroupCallMessage = $),
      (l.isGroupCallingEnabled = P),
      (l.isCallingSideBarNuxEnabled = N),
      (l.isWebIntroPanelCallingChangeEnabled = M),
      (l.isVoipDownloadEnabled = w),
      (l.markCurrentCallAsFna = F),
      (l.hasFnaRelay = O),
      (l.isWinHybridPlusEnabled = B),
      (l.isWebTransportFallbackEnabled = q),
      (l.markWebTransportFellBack = U),
      (l.resetWebTransportFallbackState = V),
      (l.shouldUseOriginalRelayPort = H),
      (l.isWebTransportEnabled = G),
      (l.getVoipCpuCoreCount = j),
      (l.shouldSkipEagerSctpPrewarm = K),
      (l.isWinHybridJoinableCallsEnabled = Q),
      (l.isDeviceSwitchingEnabled = X),
      (l.isDeviceSwitchEntryPointShown = Y),
      (l.isDeviceSwitchEntryPointHidden = J),
      (l.isCallInfoOptimizationsEnabledFor1to1 = Z),
      (l.isCallInfoOptimizationsEnabledForLGC = ee),
      (l.isCallInfoOptimizationsEnabledForAHGC = te),
      (l.isCallInfoOptimizationsEnabledForCallLink = ne),
      (l.isCallInfoOptimizationsEnabledForCallType = re),
      (l.isPopoutReuseCaptureEnabled = oe),
      (l.isScreenShareDualStreamAppUpdateDialogEnabled = ae));
  },
  98,
);
