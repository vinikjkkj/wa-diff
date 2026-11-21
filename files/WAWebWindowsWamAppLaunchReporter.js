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
    "asyncToGeneratorRuntime",
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (!e) {
            M();
            var n = !0;
            if (!b) {
              var r = ++C;
              if (((n = yield y.promise), r !== C)) return;
            }
            if (n) {
              var a = w(),
                i = Date.now(),
                l =
                  o(
                    "WAWebAppTracker",
                  ).AppTracker.captureAppContextWithLookback(),
                s =
                  (t = o(
                    "WAWebWindowsHybridBridgeCommon",
                  ).WAWebWindowsGetBridge()) == null
                    ? void 0
                    : t.nativeAppStateBridge;
              if (s == null) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "onAppStateChanged: ignoring: bridge is null",
                    ])),
                );
                return;
              }
              if (!O()) {
                I(
                  i,
                  l,
                  V(s),
                  function () {
                    return s.getLastAppRestoreTimeStamp();
                  },
                  a,
                );
                return;
              }
              var u = yield q(s);
              u != null &&
                I(
                  i,
                  l,
                  u.nativeClockSkew,
                  function () {
                    return u.lastAppRestoreTimeStamp;
                  },
                  a,
                );
            }
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(t, n, r, a, i) {
      if (
        r != null &&
        r > o("WAWebWindowsAppLaunchWebviewState").MAX_NATIVE_CLOCK_SKEW_MS
      ) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "commitEventAsync: large clock skew: ",
                "",
              ])),
            r,
          )
          .sendLogs("native-clock-skew");
        return;
      }
      var l = a();
      if (l === 0) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "onAppStateChanged: ignoring: appRestoreT not available",
            ])),
        );
        return;
      }
      var u = t - l,
        c = new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)({
          appLaunchTypeT: o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.WARM,
          appLaunchT: t - l,
          appLaunchWebviewState: A(l, r, i),
        });
      (o("WAWebAppTracker").attachCapturedWAMAppContext(c, n, u),
        c.commit(),
        (b = !0));
    }
    function T() {
      var e,
        t =
          (e = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) ==
          null
            ? void 0
            : e.nativeAppStateBridge;
      if (t == null) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "initializeEvent: ignoring: bridge is null",
            ])),
        );
        return;
      }
      return (
        t.getEvents().on("appStateChanged", E),
        t.getAppState() != null && !t.isMinimizedToTray() && M(),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function D(e) {
      (o("WAWebWindowsStartupTraceReporter").startReportingStartupTrace(),
        x(e).catch(r("WAWebNoop")));
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n =
                (t = o(
                  "WAWebWindowsHybridBridgeCommon",
                ).WAWebWindowsGetBridge()) == null
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
              a =
                o("WAWebAppTracker").AppTracker.captureAppContextWithLookback(),
              i = n.isMinimizedToTray(),
              l = yield B(n),
              s = l.nativeAppLaunchT,
              u = l.nativeAppRestoreT,
              c = l.nativeSkew;
            if (
              c != null &&
              c >
                o("WAWebWindowsAppLaunchWebviewState").MAX_NATIVE_CLOCK_SKEW_MS
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
                    ",\n      appLaunchT=",
                    "",
                  ])),
                i,
                s,
              ),
                P(s, u, r),
                y.resolve(s !== 0));
              return;
            }
            if (r < u) {
              var h = Date.now() - u;
              ((e.appLaunchT = h),
                (e.appLaunchTypeT = o(
                  "WAWebWamEnumAppLaunchType",
                ).APP_LAUNCH_TYPE.WARM),
                (e.appLaunchWebviewState = N(!1, u, r, c)),
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
              (e.appLaunchWebviewState = N(
                e.appLaunchTypeT ===
                  o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD,
                u,
                r,
                c,
              )),
              o("WAWebAppTracker").attachCapturedWAMAppContext(e, a, v),
              G(e),
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
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      e !== 0 && (v = { mainUiMountT: n, firstAppRestoreT: t });
    }
    function N(e, t, n, r) {
      return o("WAWebWindowsAppLaunchWebviewState").getAppLaunchWebviewState({
        openStartedProcess: e,
        wasShownBefore: !1,
        openT: t,
        pageStartT: o("WAWebWindowsAppLaunchWebviewState").getPageStartTime(),
        mainUiMountT: n,
        nativeClockSkew: r,
      });
    }
    function M() {
      R != null || (R = Date.now());
    }
    function w() {
      var e = b || S;
      return ((S = !0), e);
    }
    function A(e, t, n) {
      var r;
      return o("WAWebWindowsAppLaunchWebviewState").getAppLaunchWebviewState({
        openStartedProcess: !1,
        wasShownBefore: n || F(e),
        openT: e,
        pageStartT: o("WAWebWindowsAppLaunchWebviewState").getPageStartTime(),
        mainUiMountT: (r = v) == null ? void 0 : r.mainUiMountT,
        nativeClockSkew: t,
      });
    }
    function F(e) {
      if (v == null) return !1;
      var t = v,
        n = t.firstAppRestoreT,
        r = t.mainUiMountT;
      return (n !== 0 && n < e) || (R != null && R < r && (n === 0 || R < n));
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_anr_native_app_state_async_reads_enabled",
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!O())
            return {
              nativeAppLaunchT: e.takeAppLaunchTimeStamp(),
              nativeAppRestoreT: e.getFirstAppRestoreTimeStamp(),
              nativeSkew: V(e),
            };
          var t = yield e.takeAppLaunchTimesAsync();
          return {
            nativeAppLaunchT: t.appLaunchTimeStamp,
            nativeAppRestoreT: t.firstAppRestoreTimeStamp,
            nativeSkew: H(t.nativeClockSkew, t.nativeClockSkewRoundTripMs),
          };
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield e.getAppRestoreTimesAsync();
            return {
              lastAppRestoreTimeStamp: t.lastAppRestoreTimeStamp,
              nativeClockSkew: H(
                t.nativeClockSkew,
                t.nativeClockSkewRoundTripMs,
              ),
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
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      var t = Date.now(),
        n = e.detectNativeClockSkew();
      return H(n, Date.now() - t);
    }
    function H(e, t) {
      return e == null ||
        e <= o("WAWebWindowsAppLaunchWebviewState").MAX_NATIVE_CLOCK_SKEW_MS ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_anr_app_launch_skew_rtt_guard_enabled",
        )
        ? e
        : Math.max(0, e - t);
    }
    function G(e) {
      var t,
        n = o("WAWebWindowsAppLaunchContext").getNativeLaunchAppContext(
          e.appContext,
          (t = self.location.search) != null ? t : "",
        );
      n != null && (e.appContext = n);
    }
    var z = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(
      T,
      D,
    );
    l.WAWebWindowsWamAppLaunchReporter = z;
  },
  98,
);
