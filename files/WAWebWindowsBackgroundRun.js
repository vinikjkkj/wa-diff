__d(
  "WAWebWindowsBackgroundRun",
  ["WAWebEnvironment", "WAWebProtobufsWa6.pb"],
  function (t, n, r, o, a, i, l) {
    var e = "backgroundRun",
      s = {
        1: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
        2: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
      },
      u = !1,
      c = o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH,
      d = null;
    function m() {
      var t;
      return (
        !u &&
        r("WAWebEnvironment").isWindows &&
        new URLSearchParams((t = self.location.search) != null ? t : "").get(
          e,
        ) === "1"
      );
    }
    function p() {
      return m() ? c : null;
    }
    function _(e) {
      var t = s[e];
      return t == null ? !1 : ((c = t), !0);
    }
    function f() {
      u = !0;
    }
    function g(e) {
      d = e;
    }
    function h() {
      var e;
      return (
        d != null &&
        d !==
          ((e = p()) != null
            ? e
            : o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
                .USER_ACTIVATED)
      );
    }
    function y() {
      ((u = !1),
        (c = o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason.PUSH),
        (d = null));
    }
    ((l.isWindowsBackgroundRun = m),
      (l.getWindowsBackgroundRunConnectReason = p),
      (l.applyWindowsBackgroundRunConnectReason = _),
      (l.endWindowsBackgroundRun = f),
      (l.recordWindowsLoginConnectReason = g),
      (l.hasLoggedInWithOtherConnectReason = h),
      (l.resetWindowsBackgroundRunForTesting = y));
  },
  98,
);
