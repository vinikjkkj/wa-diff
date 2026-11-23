__d(
  "WAWebWindowsBackgroundRun",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebProtobufsWa6.pb",
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
    async function C() {
      if (h()) return null;
      try {
        return (
          await o("WAWebABPropsCache").waitForABPropConfigsReady(),
          o("WAWebABProps").getABPropConfigValue(
            "win_hybrid_background_message_sync",
          ),
          o("WAWebABPropsCache").getABPropExpoKey(
            "win_hybrid_background_message_sync",
          )
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WindowsBackgroundRun: background message sync exposure failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("windows-bgrun-exposure-failed"),
          null
        );
      }
    }
    function b() {
      return h() ? m : null;
    }
    function v(e) {
      var t = c[e];
      return t == null ? !1 : ((m = t), !0);
    }
    function S() {
      ((d = !0),
        g.forEach(function (e) {
          try {
            e();
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[background-run] end listener failed",
                ])),
            );
          }
        }));
    }
    function R(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function L(e) {
      ((p = e), (_ = Date.now()), f++);
    }
    function E() {
      return f;
    }
    function k() {
      var e;
      return (
        p != null &&
        p !==
          ((e = b()) != null
            ? e
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED)
      );
    }
    function I() {
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
      (l.getWindowsBackgroundRunConnectReason = b),
      (l.applyWindowsBackgroundRunConnectReason = v),
      (l.endWindowsBackgroundRun = S),
      (l.onWindowsBackgroundRunEnd = R),
      (l.recordWindowsLoginConnectReason = L),
      (l.getWindowsLoginCount = E),
      (l.hasLoggedInWithOtherConnectReason = k),
      (l.getWindowsBackgroundRunLogContext = I));
  },
  98,
);
