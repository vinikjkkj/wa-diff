__d(
  "WAWebWindowsBackgroundRun",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebProtobufsWa6.pb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "backgroundRun",
      u = {
        1: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
        2: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
      },
      c = !1,
      d = o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
      m = null,
      p = 0;
    function _() {
      var e;
      return (
        !c &&
        r("WAWebEnvironment").isWindows &&
        new URLSearchParams((e = self.location.search) != null ? e : "").get(
          s,
        ) === "1"
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!_())
            try {
              (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
                o("WAWebABProps").getABPropConfigValue(
                  "win_hybrid_background_message_sync",
                ));
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsBackgroundRun: background message sync exposure failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("windows-bgrun-exposure-failed");
            }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return _() ? d : null;
    }
    function y(e) {
      var t = u[e];
      return t == null ? !1 : ((d = t), !0);
    }
    function C() {
      c = !0;
    }
    function b(e) {
      ((m = e), p++);
    }
    function v() {
      return p;
    }
    function S() {
      var e;
      return (
        m != null &&
        m !==
          ((e = h()) != null
            ? e
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED)
      );
    }
    ((l.isWindowsBackgroundRun = _),
      (l.logBackgroundMessageSyncExposureInUserSession = f),
      (l.getWindowsBackgroundRunConnectReason = h),
      (l.applyWindowsBackgroundRunConnectReason = y),
      (l.endWindowsBackgroundRun = C),
      (l.recordWindowsLoginConnectReason = b),
      (l.getWindowsLoginCount = v),
      (l.hasLoggedInWithOtherConnectReason = S));
  },
  98,
);
