__d(
  "WAWebVoipGatingUtils",
  [
    "WALogger",
    "WAOnceWithReset",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebUA",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = !1;
    function _() {
      if (o("WAWebUA").UA.isWebkit || o("WAWebUA").UA.isSafari) return !0;
      var e = navigator.userAgent;
      return !!/CriOS|FxiOS|iPhone|iPad|iPod/.test(e);
    }
    var f = r("WAOnceWithReset")(function () {
      return window.SharedArrayBuffer === void 0
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Browser Check] no SharedArrayBuffer",
              ])),
          ),
          "missing_shared_array_buffer")
        : window.Atomics === void 0
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [Browser Check] Unsupported: Atomics is undefined",
                ])),
            ),
            "missing_atomics")
          : window.RTCPeerConnection === void 0
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [Browser Check] no RTCPeerConnection",
                  ])),
              ),
              "missing_rtc_peer_connection")
            : o("WAWebUA").UA.isBrokenVoipWasm
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Browser Check] Safari ",
                      " broken WASM",
                    ])),
                  o("WAWebUA").UA.browserVersion,
                ),
                "broken_voip_wasm")
              : null;
    });
    function g() {
      return f() != null;
    }
    function h() {
      if (r("WAWebEnvironment").isWindows)
        return (
          p ||
            ((p = !0),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
        p ||
          ((p = !0),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function y() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    function C() {
      return k();
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "coex_calling_permissions_3p_enabled",
      );
    }
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue("calling_lid_version") === 1 &&
        o("WAWebABProps").getABPropConfigValue("enable_calling_username")
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_calling_phone_number_privacy",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "calls_tab_username_global_search_enabled",
      );
    }
    function L() {
      return r("WAWebEnvironment").isWindows
        ? y()
        : r("WAWebEnvironment").isWeb
          ? C()
          : !1;
    }
    function E(e) {
      return (
        e.group_jid != null ||
        (e.group_info_updates != null && e.group_info_updates.length > 0)
      );
    }
    function k() {
      return (
        r("WAWebEnvironment").isWindows ||
        (h() &&
          o("WAWebABProps").getABPropConfigValue("enable_web_group_calling"))
      );
    }
    function I() {
      return r("WAWebEnvironment").isWindows
        ? !0
        : g()
          ? !1
          : o("WAWebABProps").getABPropConfigValue("enable_web_calling");
    }
    function T() {
      return r("gkx")("21938");
    }
    function D() {
      var e = o("WAWebABProps").getABPropConfigValue("enable_web_calling"),
        t = o("WAWebABProps").getABPropConfigValue("enable_web_group_calling");
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "gc_device_switching_killswitch",
      );
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "call_info_optimizations_version",
        ) >= 1
      );
    }
    ((l.isWebKitBrowser = _),
      (l.getUnsupportedBrowserReason = f),
      (l.isUnsupportedBrowserForWebCalling = g),
      (l.isCallingEnabled = h),
      (l.callLinksEnabledOnWindowsHybrid = y),
      (l.callLinksEnabledForWeb = C),
      (l.isCoexCallingPermissionsEnabled = b),
      (l.usernameCallingEnabled = v),
      (l.usernameCallingPhoneNumberPrivacyEnabled = S),
      (l.usernameSearchEnabledOnCallsTab = R),
      (l.callLinksEnabled = L),
      (l.isGroupCallMessage = E),
      (l.isGroupCallingEnabled = k),
      (l.isVoipDownloadEnabled = I),
      (l.isWebTransportEnabled = T),
      (l.isWinHybridJoinableCallsEnabled = D),
      (l.isDeviceSwitchingEnabled = x),
      (l.isCallInfoOptimizationsEnabled = $));
  },
  98,
);
