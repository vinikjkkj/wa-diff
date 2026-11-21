__d(
  "WAWebWindowsAppLaunchWebviewState",
  ["WAWebWamEnumAppLaunchWebviewStateType"],
  function (t, n, r, o, a, i, l) {
    var e = 2e3;
    function s(t) {
      var n;
      if (t.openStartedProcess)
        return o("WAWebWamEnumAppLaunchWebviewStateType")
          .APP_LAUNCH_WEBVIEW_STATE_TYPE.NO_PROCESS;
      if (t.wasShownBefore)
        return o("WAWebWamEnumAppLaunchWebviewStateType")
          .APP_LAUNCH_WEBVIEW_STATE_TYPE.WINDOW_RESTORE;
      var r = t.mainUiMountT,
        a = t.openT,
        i = t.pageStartT;
      return !d(a) ||
        !d(r) ||
        Math.abs((n = t.nativeClockSkew) != null ? n : 0) > e
        ? o("WAWebWamEnumAppLaunchWebviewStateType")
            .APP_LAUNCH_WEBVIEW_STATE_TYPE.UNKNOWN
        : r <= a
          ? o("WAWebWamEnumAppLaunchWebviewStateType")
              .APP_LAUNCH_WEBVIEW_STATE_TYPE.WEBVIEW_READY_HIDDEN
          : d(i)
            ? i > a
              ? o("WAWebWamEnumAppLaunchWebviewStateType")
                  .APP_LAUNCH_WEBVIEW_STATE_TYPE.PROCESS_NO_WEBVIEW
              : o("WAWebWamEnumAppLaunchWebviewStateType")
                  .APP_LAUNCH_WEBVIEW_STATE_TYPE.WEBVIEW_STARTING
            : o("WAWebWamEnumAppLaunchWebviewStateType")
                .APP_LAUNCH_WEBVIEW_STATE_TYPE.UNKNOWN;
    }
    function u() {
      var e;
      if (c()) return null;
      var t = (e = self.performance) == null ? void 0 : e.timeOrigin;
      return d(t) ? Math.round(t) : null;
    }
    function c() {
      var e;
      if (!("PerformanceNavigationTiming" in self)) return !1;
      var t =
        (e = self.performance) == null || e.getEntriesByType == null
          ? void 0
          : e.getEntriesByType("navigation")[0];
      return t instanceof PerformanceNavigationTiming && t.type === "reload";
    }
    function d(e) {
      return e != null && Number.isFinite(e) && e > 0;
    }
    ((l.MAX_NATIVE_CLOCK_SKEW_MS = e),
      (l.getAppLaunchWebviewState = s),
      (l.getPageStartTime = u));
  },
  98,
);
