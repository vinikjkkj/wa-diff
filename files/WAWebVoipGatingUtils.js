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
          .catching(r("getErrorSafe")(t)),
          (g = !1));
      }
      return g;
    }
    function y() {
      var e = Reflect.get(window, "crossOriginIsolated");
      return typeof e == "boolean" ? e : null;
    }
    var C = r("WAOnceWithReset")(function () {
      var e = y(),
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
    function b() {
      return C() != null;
    }
    function v() {
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
    function S() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    function R() {
      return $();
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function E() {
      return (
        o("WAWebABProps").getABPropConfigValue("calling_lid_version") === 1 &&
        o("WAWebABProps").getABPropConfigValue("enable_calling_username")
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_calling_phone_number_privacy",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_guest_calling_representation_enabled",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "calls_tab_username_global_search_enabled",
      );
    }
    function D() {
      return r("WAWebEnvironment").isWindows
        ? S()
        : r("WAWebEnvironment").isWeb
          ? R()
          : !1;
    }
    function x(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function $() {
      return (
        r("WAWebEnvironment").isWindows ||
        (v() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function P() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : b()
          ? !1
          : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_web_voip_webtransport",
      );
    }
    function M() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_call_transfer_notification",
      );
    }
    function F() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_1on1",
        ) ||
        o("WAWebABProps").getABPropConfigValue("call_info_optimizations_lgc") ||
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_ahgc_call_link",
        )
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_1on1",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_lgc",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_info_optimizations_ahgc_call_link",
      );
    }
    function U(e) {
      var t = e.isAdHocGroupCall,
        n = e.isCallLink,
        r = e.isGroup;
      return n === !0 ? q() : t ? W() : r ? B() : O();
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_calling_full_screen_toggle_enabled",
      );
    }
    ((l.isWebKitBrowser = f),
      (l.shouldUsePortalModeForSafari = h),
      (l.getCrossOriginIsolatedState = y),
      (l.getUnsupportedBrowserReason = C),
      (l.isUnsupportedBrowserForWebCalling = b),
      (l.isCallingEnabled = v),
      (l.callLinksEnabledOnWindowsHybrid = S),
      (l.callLinksEnabledForWeb = R),
      (l.isCoexCallingPermissionsEnabled = L),
      (l.usernameCallingEnabled = E),
      (l.usernameCallingPhoneNumberPrivacyEnabled = k),
      (l.isGuestCallingRepresentationEnabled = I),
      (l.usernameSearchEnabledOnCallsTab = T),
      (l.callLinksEnabled = D),
      (l.isGroupCallMessage = x),
      (l.isGroupCallingEnabled = $),
      (l.isVoipDownloadEnabled = P),
      (l.isWebTransportEnabled = N),
      (l.isWinHybridJoinableCallsEnabled = M),
      (l.isDeviceSwitchingEnabled = w),
      (l.isCallTransferNotificationEnabled = A),
      (l.isCallInfoOptimizationsEnabled = F),
      (l.isCallInfoOptimizationsEnabledFor1to1 = O),
      (l.isCallInfoOptimizationsEnabledForLGC = B),
      (l.isCallInfoOptimizationsEnabledForAHGC = W),
      (l.isCallInfoOptimizationsEnabledForCallLink = q),
      (l.isCallInfoOptimizationsEnabledForCallType = U),
      (l.isFullScreenToggleEnabled = V));
  },
  98,
);
