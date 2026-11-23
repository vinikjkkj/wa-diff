__d(
  "WAWebWindowsWamAppLaunchReporter",
  [
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAppLaunchWamEvent",
    "WAWebAppTracker",
    "WAWebNoop",
    "WAWebWamBaseAppLaunchReporter",
    "WAWebWamEnumAppLaunchType",
    "WAWebWindowsAppLaunchContext",
    "WAWebWindowsAppLaunchWebviewState",
    "WAWebWindowsHybridBridgeCommon",
    "WAWebWindowsStartupTraceReporter",
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
      f,
      g,
      h,
      y = new (o("WAResolvable").Resolvable)(),
      C = 0,
      b = !1,
      v = null,
      S = !1,
      R = null;
    function L(e, t) {
      return t > e
        ? o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.LUKEWARM
        : o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD;
    }
    async function E(t) {
      var n;
      if (!t) {
        P();
        var r = !0;
        if (!b) {
          var a = ++C;
          if (((r = await y.promise), a !== C)) return;
        }
        if (r) {
          var i = N(),
            l = Date.now(),
            s = o("WAWebAppTracker").AppTracker.captureAppContextWithLookback(),
            u =
              (n = o(
                "WAWebWindowsHybridBridgeCommon",
              ).WAWebWindowsGetBridge()) == null
                ? void 0
                : n.nativeAppStateBridge;
          if (u == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "onAppStateChanged: ignoring: bridge is null",
                ])),
            );
            return;
          }
          if (!A()) {
            k(
              l,
              s,
              B(u),
              function () {
                return u.getLastAppRestoreTimeStamp();
              },
              i,
            );
            return;
          }
          var c = await O(u);
          c != null &&
            k(
              l,
              s,
              c.nativeClockSkew,
              function () {
                return c.lastAppRestoreTimeStamp;
              },
              i,
            );
        }
      }
    }
    function k(e, t, n, r, a) {
      if (
        n != null &&
        n > o("WAWebWindowsAppLaunchWebviewState").MAX_NATIVE_CLOCK_SKEW_MS
      ) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "commitEventAsync: large clock skew: ",
                "",
              ])),
            n,
          )
          .sendLogs("native-clock-skew");
        return;
      }
      var i = r();
      if (i === 0) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "onAppStateChanged: ignoring: appRestoreT not available",
            ])),
        );
        return;
      }
      var l = e - i,
        c = new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)({
          appLaunchTypeT: o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.WARM,
          appLaunchT: e - i,
          appLaunchWebviewState: M(i, n, a),
        });
      (o("WAWebAppTracker").attachCapturedWAMAppContext(c, t, l),
        c.commit(),
        (b = !0));
    }
    function I() {
      var e,
        t =
          (e = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) ==
          null
            ? void 0
            : e.nativeAppStateBridge;
      if (t == null) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "initializeEvent: ignoring: bridge is null",
            ])),
        );
        return;
      }
      return (
        t.getEvents().on("appStateChanged", E),
        t.getAppState() != null && !t.isMinimizedToTray() && P(),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function T(e) {
      (o("WAWebWindowsStartupTraceReporter").startReportingStartupTrace(),
        D(e).catch(r("WAWebNoop")));
    }
    async function D(e) {
      try {
        var t,
          n =
            (t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) ==
            null
              ? void 0
              : t.nativeAppStateBridge;
        if (n == null) {
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "commitEventAsync: ignoring: bridge is null",
              ])),
          );
          return;
        }
        var r = Date.now(),
          a = o("WAWebAppTracker").AppTracker.captureAppContextWithLookback(),
          i = n.isMinimizedToTray(),
          l = await F(n),
          s = l.nativeAppLaunchT,
          u = l.nativeAppRestoreT,
          c = l.nativeSkew;
        if (
          c != null &&
          c > o("WAWebWindowsAppLaunchWebviewState").MAX_NATIVE_CLOCK_SKEW_MS
        ) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "commitEventAsync: large clock skew: ",
                  "",
                ])),
              c,
            )
            .sendLogs("native-clock-skew");
          return;
        }
        if (i || s === 0) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "commitEventAsync: deferring: tray=",
                `,
      appLaunchT=`,
                "",
              ])),
            i,
            s,
          ),
            x(s, u, r),
            y.resolve(s !== 0));
          return;
        }
        if (r < u) {
          var h = Date.now() - u;
          ((e.appLaunchT = h),
            (e.appLaunchTypeT = o(
              "WAWebWamEnumAppLaunchType",
            ).APP_LAUNCH_TYPE.WARM),
            (e.appLaunchWebviewState = $(!1, u, r, c)),
            o("WAWebAppTracker").attachWAMAppContext(e, h),
            e.commit(),
            (b = !0),
            y.resolve(!1));
          return;
        }
        var C = Math.max(s, u),
          v = r - C;
        if (v > 6e5) {
          var S = function (t) {
              try {
                return new Date(t).toISOString();
              } catch (e) {
                return t.toString();
              }
            },
            R = S(s),
            E = S(u),
            k = S(C),
            I = S(r),
            T = S(self.performance.timing.fetchStart);
          (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "commitEventAsync: appLaunchT large t=",
                  " launch=",
                  " restore=",
                  "",
                ])),
              v,
              R,
              E,
            )
            .sendLogs("app_launch_time_is_large"),
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "commitEventAsync: appLaunchT large start=",
                    " end=",
                    " fetch=",
                    "",
                  ])),
                k,
                I,
                T,
              )
              .sendLogs("app_launch_time_is_large"));
        }
        ((e.appLaunchT = v),
          (e.appLaunchTypeT = L(s, u)),
          (e.appLaunchWebviewState = $(
            e.appLaunchTypeT ===
              o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD,
            u,
            r,
            c,
          )),
          o("WAWebAppTracker").attachCapturedWAMAppContext(e, a, v),
          q(e),
          e.commit(),
          (b = !0),
          y.resolve(!1));
      } catch (e) {
        o("WALogger").WARN(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "commitEventAsync: failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function x(e, t, n) {
      e !== 0 && (v = { mainUiMountT: n, firstAppRestoreT: t });
    }
    function $(e, t, n, r) {
      return o("WAWebWindowsAppLaunchWebviewState").getAppLaunchWebviewState({
        openStartedProcess: e,
        wasShownBefore: !1,
        openT: t,
        pageStartT: o("WAWebWindowsAppLaunchWebviewState").getPageStartTime(),
        mainUiMountT: n,
        nativeClockSkew: r,
      });
    }
    function P() {
      R != null || (R = Date.now());
    }
    function N() {
      var e = b || S;
      return ((S = !0), e);
    }
    function M(e, t, n) {
      var r;
      return o("WAWebWindowsAppLaunchWebviewState").getAppLaunchWebviewState({
        openStartedProcess: !1,
        wasShownBefore: n || w(e),
        openT: e,
        pageStartT: o("WAWebWindowsAppLaunchWebviewState").getPageStartTime(),
        mainUiMountT: (r = v) == null ? void 0 : r.mainUiMountT,
        nativeClockSkew: t,
      });
    }
    function w(e) {
      if (v == null) return !1;
      var t = v,
        n = t.firstAppRestoreT,
        r = t.mainUiMountT;
      return (n !== 0 && n < e) || (R != null && R < r && (n === 0 || R < n));
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_anr_native_app_state_async_reads_enabled",
      );
    }
    async function F(e) {
      if (!A())
        return {
          nativeAppLaunchT: e.takeAppLaunchTimeStamp(),
          nativeAppRestoreT: e.getFirstAppRestoreTimeStamp(),
          nativeSkew: B(e),
        };
      var t = await e.takeAppLaunchTimesAsync();
      return {
        nativeAppLaunchT: t.appLaunchTimeStamp,
        nativeAppRestoreT: t.firstAppRestoreTimeStamp,
        nativeSkew: W(t.nativeClockSkew, t.nativeClockSkewRoundTripMs),
      };
    }
    async function O(e) {
      try {
        var t = await e.getAppRestoreTimesAsync();
        return {
          lastAppRestoreTimeStamp: t.lastAppRestoreTimeStamp,
          nativeClockSkew: W(t.nativeClockSkew, t.nativeClockSkewRoundTripMs),
        };
      } catch (e) {
        return (
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "onAppStateChanged: reading restore times failed: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function B(e) {
      var t = Date.now(),
        n = e.detectNativeClockSkew();
      return W(n, Date.now() - t);
    }
    function W(e, t) {
      return e == null ||
        e <= o("WAWebWindowsAppLaunchWebviewState").MAX_NATIVE_CLOCK_SKEW_MS ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_anr_app_launch_skew_rtt_guard_enabled",
        )
        ? e
        : Math.max(0, e - t);
    }
    function q(e) {
      var t,
        n = o("WAWebWindowsAppLaunchContext").getNativeLaunchAppContext(
          e.appContext,
          (t = self.location.search) != null ? t : "",
        );
      n != null && (e.appContext = n);
    }
    var U = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(
      I,
      T,
    );
    l.WAWebWindowsWamAppLaunchReporter = U;
  },
  98,
);
