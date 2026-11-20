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
      s,
      u = "backgroundRun",
      c = {
        1: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
        2: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
      },
      d = !1,
      m = o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
      p = null,
      _ = null,
      f = 0,
      g = new Set();
    function h() {
      return !d && y();
    }
    function y() {
      var e;
      return (
        r("WAWebEnvironment").isWindows &&
        new URLSearchParams((e = self.location.search) != null ? e : "").get(
          u,
        ) === "1"
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (h()) return null;
          try {
            return (
              yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              o("WAWebABProps").getABPropConfigValue(
                "win_hybrid_background_message_sync",
              ),
              o("WAWebABPropsCache").getABPropExpoKey(
                "win_hybrid_background_message_sync",
              )
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsBackgroundRun: background message sync exposure failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("windows-bgrun-exposure-failed"),
              null
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return h() ? m : null;
    }
    function S(e) {
      var t = c[e];
      return t == null ? !1 : ((m = t), !0);
    }
    function R() {
      ((d = !0),
        g.forEach(function (t) {
          try {
            t();
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[background-run] end listener failed",
                ])),
            );
          }
        }));
    }
    function L(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function E(e) {
      ((p = e), (_ = Date.now()), f++);
    }
    function k() {
      return f;
    }
    function I() {
      var e;
      return (
        p != null &&
        p !==
          ((e = v()) != null
            ? e
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED)
      );
    }
    function T() {
      var e = _;
      return {
        lastLoginAgeMs: e == null ? null : Date.now() - e,
        lastLoginReason: p,
        loadedForRun: y(),
        loginCount: f,
        runEnded: d,
      };
    }
    ((l.isWindowsBackgroundRun = h),
      (l.wasPageLoadedForWindowsBackgroundRun = y),
      (l.logBackgroundMessageSyncExposureInUserSession = C),
      (l.getWindowsBackgroundRunConnectReason = v),
      (l.applyWindowsBackgroundRunConnectReason = S),
      (l.endWindowsBackgroundRun = R),
      (l.onWindowsBackgroundRunEnd = L),
      (l.recordWindowsLoginConnectReason = E),
      (l.getWindowsLoginCount = k),
      (l.hasLoggedInWithOtherConnectReason = I),
      (l.getWindowsBackgroundRunLogContext = T));
  },
  98,
);
