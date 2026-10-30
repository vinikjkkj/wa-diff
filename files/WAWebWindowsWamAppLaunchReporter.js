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
      y = 2e3,
      C = new (o("WAResolvable").Resolvable)(),
      b = 0,
      v = !1;
    function S(e, t) {
      return t > e
        ? o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.LUKEWARM
        : o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD;
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (!e) {
            var n = !0;
            if (!v) {
              var r = ++b;
              if (((n = yield C.promise), r !== b)) return;
            }
            if (n) {
              var a = Date.now(),
                i =
                  o(
                    "WAWebAppTracker",
                  ).AppTracker.captureAppContextWithLookback(),
                l =
                  (t = o(
                    "WAWebWindowsHybridBridgeCommon",
                  ).WAWebWindowsGetBridge()) == null
                    ? void 0
                    : t.nativeAppStateBridge;
              if (l == null) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "onAppStateChanged: ignoring: bridge is null",
                    ])),
                );
                return;
              }
              if (!x()) {
                E(a, i, w(l), function () {
                  return l.getLastAppRestoreTimeStamp();
                });
                return;
              }
              var s = yield N(l);
              s != null &&
                E(a, i, s.nativeClockSkew, function () {
                  return s.lastAppRestoreTimeStamp;
                });
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(t, n, r, a) {
      if (r != null && r > y) {
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
      var i = a();
      if (i === 0) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "onAppStateChanged: ignoring: appRestoreT not available",
            ])),
        );
        return;
      }
      var l = t - i,
        u = new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)({
          appLaunchTypeT: o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.WARM,
          appLaunchT: t - i,
        });
      (o("WAWebAppTracker").attachCapturedWAMAppContext(u, n, l),
        u.commit(),
        (v = !0));
    }
    function k() {
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
        t.getEvents().on("appStateChanged", R),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function I(e) {
      (o("WAWebWindowsStartupTraceReporter").startReportingStartupTrace(),
        T(e).catch(r("WAWebNoop")));
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              l = yield $(n),
              s = l.nativeAppLaunchT,
              u = l.nativeAppRestoreT,
              c = l.nativeSkew;
            if (c != null && c > y) {
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
                C.resolve(s !== 0));
              return;
            }
            if (r < u) {
              var h = Date.now() - u;
              ((e.appLaunchT = h),
                (e.appLaunchTypeT = o(
                  "WAWebWamEnumAppLaunchType",
                ).APP_LAUNCH_TYPE.WARM),
                o("WAWebAppTracker").attachWAMAppContext(e, h),
                e.commit(),
                (v = !0),
                C.resolve(!1));
              return;
            }
            var b = Math.max(s, u),
              R = r - b;
            if (R > 6e5) {
              var L = function (t) {
                  try {
                    return new Date(t).toISOString();
                  } catch (e) {
                    return t.toString();
                  }
                },
                E = L(s),
                k = L(u),
                I = L(b),
                T = L(r),
                D = L(self.performance.timing.fetchStart);
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "commitEventAsync: appLaunchT large t=",
                      " launch=",
                      " restore=",
                      "",
                    ])),
                  R,
                  E,
                  k,
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
                    I,
                    T,
                    D,
                  )
                  .sendLogs("app_launch_time_is_large"));
            }
            ((e.appLaunchT = R),
              (e.appLaunchTypeT = S(s, u)),
              o("WAWebAppTracker").attachCapturedWAMAppContext(e, a, R),
              F(e),
              e.commit(),
              (v = !0),
              C.resolve(!1));
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
        D.apply(this, arguments)
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_anr_native_app_state_async_reads_enabled",
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!x())
            return {
              nativeAppLaunchT: e.takeAppLaunchTimeStamp(),
              nativeAppRestoreT: e.getFirstAppRestoreTimeStamp(),
              nativeSkew: w(e),
            };
          var t = yield e.takeAppLaunchTimesAsync();
          return {
            nativeAppLaunchT: t.appLaunchTimeStamp,
            nativeAppRestoreT: t.firstAppRestoreTimeStamp,
            nativeSkew: A(t.nativeClockSkew, t.nativeClockSkewRoundTripMs),
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield e.getAppRestoreTimesAsync();
            return {
              lastAppRestoreTimeStamp: t.lastAppRestoreTimeStamp,
              nativeClockSkew: A(
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
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t = Date.now(),
        n = e.detectNativeClockSkew();
      return A(n, Date.now() - t);
    }
    function A(e, t) {
      return e == null ||
        e <= y ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_anr_app_launch_skew_rtt_guard_enabled",
        )
        ? e
        : Math.max(0, e - t);
    }
    function F(e) {
      var t,
        n = o("WAWebWindowsAppLaunchContext").getNativeLaunchAppContext(
          e.appContext,
          (t = self.location.search) != null ? t : "",
        );
      n != null && (e.appContext = n);
    }
    var O = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(
      k,
      I,
    );
    l.WAWebWindowsWamAppLaunchReporter = O;
  },
  98,
);
