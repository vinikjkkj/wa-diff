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
      _ = !1;
    function f() {
      if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) return !0;
      var e = navigator.userAgent;
      return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(e);
    }
    var g = null;
    function h() {
      if (g != null) return g;
      if (
        ((g = !1),
        !f() ||
          !r("justknobx")._("193") ||
          window.OffscreenCanvas === void 0 ||
          document === void 0)
      )
        return !1;
      try {
        var t = document.createElement("canvas");
        g = t.getContext("bitmaprenderer") != null;
      } catch (t) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [portal-mode] bitmaprenderer probe failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("voip-portal-probe-fail"),
          (g = !1));
      }
      return g;
    }
    var y = r("WAOnceWithReset")(function () {
      return window.SharedArrayBuffer === void 0
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Browser Check] no SharedArrayBuffer",
              ])),
          ),
          "missing_shared_array_buffer")
        : window.Atomics === void 0
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Browser Check] Unsupported: Atomics is undefined",
                ])),
            ),
            "missing_atomics")
          : window.RTCPeerConnection === void 0
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Browser Check] no RTCPeerConnection",
                  ])),
              ),
              "missing_rtc_peer_connection")
            : o("WAWebUA").UA.isBrokenVoipWasm
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Browser Check] Safari ",
                      " broken WASM",
                    ])),
                  o("WAWebUA").UA.browserVersion,
                ),
                "broken_voip_wasm")
              : null;
    });
    function C() {
      return y() != null;
    }
    function b() {
      if (r("WAWebEnvironment").isWindows)
        return (
          _ ||
            ((_ = !0),
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
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling");
      return (
        _ ||
          ((_ = !0),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
    function v() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    function S() {
      return D();
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function L() {
      return (
        o("WAWebABProps").getABPropConfigValue("calling_lid_version") === 1 &&
        o("WAWebABProps").getABPropConfigValue("enable_calling_username")
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_calling_phone_number_privacy",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "calls_tab_username_global_search_enabled",
      );
    }
    function I() {
      return r("WAWebEnvironment").isWindows
        ? v()
        : r("WAWebEnvironment").isWeb
          ? S()
          : !1;
    }
    function T(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function D() {
      return (
        r("WAWebEnvironment").isWindows ||
        (b() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function x() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : C()
          ? !1
          : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function P() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_call_transfer_notification",
      );
    }
    function w() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_version",
        ) >= 1
      );
    }
    var A = 1,
      F = 2,
      O = 4,
      B = 8;
    function W(e, t) {
      return Math.floor(e / t) % 2 === 1;
    }
    function q() {
      return W(
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_version",
        ),
        A,
      );
    }
    function U() {
      return W(
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_version",
        ),
        F,
      );
    }
    function V() {
      return W(
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_version",
        ),
        O,
      );
    }
    function H() {
      return W(
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_version",
        ),
        B,
      );
    }
    function G(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? H() : t ? V() : r ? U() : q();
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_full_screen_toggle_enabled",
      );
    }
    ((l.isWebKitBrowser = f),
      (l.shouldUsePortalModeForSafari = h),
      (l.getUnsupportedBrowserReason = y),
      (l.isUnsupportedBrowserForWebCalling = C),
      (l.isCallingEnabled = b),
      (l.callLinksEnabledOnWindowsHybrid = v),
      (l.callLinksEnabledForWeb = S),
      (l.isCoexCallingPermissionsEnabled = R),
      (l.usernameCallingEnabled = L),
      (l.usernameCallingPhoneNumberPrivacyEnabled = E),
      (l.usernameSearchEnabledOnCallsTab = k),
      (l.callLinksEnabled = I),
      (l.isGroupCallMessage = T),
      (l.isGroupCallingEnabled = D),
      (l.isVoipDownloadEnabled = x),
      (l.isWebTransportEnabled = $),
      (l.isWinHybridJoinableCallsEnabled = P),
      (l.isDeviceSwitchingEnabled = N),
      (l.isCallTransferNotificationEnabled = M),
      (l.isCallInfoOptimizationsEnabled = w),
      (l.isCallInfoOptimizationsEnabledFor1to1 = q),
      (l.isCallInfoOptimizationsEnabledForLGC = U),
      (l.isCallInfoOptimizationsEnabledForAHGC = V),
      (l.isCallInfoOptimizationsEnabledForCallLink = H),
      (l.isCallInfoOptimizationsEnabledForCallType = G),
      (l.isFullScreenToggleEnabled = z));
  },
  98,
);
