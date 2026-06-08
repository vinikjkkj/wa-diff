__d(
  "WAWebWindowsWamAppLaunchReporter",
  [
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAppLaunchWamEvent",
    "WAWebAppTracker",
    "WAWebBuildConstants",
    "WAWebNoop",
    "WAWebWamBaseAppLaunchReporter",
    "WAWebWamEnumAppLaunchType",
    "WAWebWindowsHybridBridgeCommon",
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
      h = 2e3,
      y = 262300,
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
                  (t = o(
                    "WAWebWindowsHybridBridgeCommon",
                  ).WAWebWindowsGetBridge()) == null
                    ? void 0
                    : t.nativeAppStateBridge;
              if (i == null) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "onAppStateChanged: ignoring: bridge is null",
                    ])),
                );
                return;
              }
              var l = i.detectNativeClockSkew();
              if (l != null && l > h) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "commitEventAsync: large clock skew: ",
                        "",
                      ])),
                    l,
                  )
                  .sendLogs("native-clock-skew");
                return;
              }
              var d = i.getLastAppRestoreTimeStamp();
              if (d === 0) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "onAppStateChanged: ignoring: appRestoreT not available",
                    ])),
                );
                return;
              }
              var m = a - d,
                p = new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)({
                  appLaunchTypeT: o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE
                    .WARM,
                  appLaunchT: a - d,
                });
              (o("WAWebAppTracker").attachWAMAppContext(p, m),
                p.commit(),
                (v = !0));
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      var t,
        n =
          (t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) ==
          null
            ? void 0
            : t.nativeAppStateBridge;
      if (n == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "initializeEvent: ignoring: bridge is null",
            ])),
        );
        return;
      }
      return (
        n.getEvents().on("appStateChanged", R),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function k(e) {
      I(e).catch(r("WAWebNoop"));
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              a,
              i,
              l,
              s = o("WAWebBuildConstants").getWindowsVersion(),
              u =
                s != null &&
                s >= y &&
                o("WAWebABProps").getABPropConfigValue(
                  "web_anr_async_native_app_state_bridge_enabled",
                )
                  ? yield n.takeAppLaunchSnapshotAsync()
                  : null;
            u != null
              ? ((a = u.appLaunchTimeStamp),
                (i = u.firstAppRestoreTimeStamp),
                (l = u.nativeClockSkew))
              : ((a = n.takeAppLaunchTimeStamp()),
                (i = n.getFirstAppRestoreTimeStamp()),
                (l = n.detectNativeClockSkew()));
            var c = n.isMinimizedToTray();
            if (l != null && l > h) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "commitEventAsync: large clock skew: ",
                      "",
                    ])),
                  l,
                )
                .sendLogs("native-clock-skew");
              return;
            }
            if (c || a === 0) {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "commitEventAsync: deferring: tray=",
                    ",\n      appLaunchT=",
                    "",
                  ])),
                c,
                a,
              ),
                C.resolve(a !== 0));
              return;
            }
            if (r < i) {
              var b = Date.now() - i;
              ((e.appLaunchT = b),
                (e.appLaunchTypeT = o(
                  "WAWebWamEnumAppLaunchType",
                ).APP_LAUNCH_TYPE.WARM),
                o("WAWebAppTracker").attachWAMAppContext(e, b),
                e.commit(),
                (v = !0),
                C.resolve(!1));
              return;
            }
            var R = Math.max(a, i),
              L = r - R;
            if (L > 6e5) {
              var E = function (t) {
                  try {
                    return new Date(t).toISOString();
                  } catch (e) {
                    return t.toString();
                  }
                },
                k = E(a),
                I = E(i),
                T = E(R),
                x = E(r),
                $ = E(self.performance.timing.fetchStart);
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "commitEventAsync: appLaunchT large t=",
                      " launch=",
                      " restore=",
                      "",
                    ])),
                  L,
                  k,
                  I,
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
                    T,
                    x,
                    $,
                  )
                  .sendLogs("app_launch_time_is_large"));
            }
            ((e.appLaunchT = L),
              (e.appLaunchTypeT = S(a, i)),
              o("WAWebAppTracker").attachWAMAppContext(e, L),
              D(e),
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t,
        n,
        r = new URLSearchParams((t = self.location.search) != null ? t : ""),
        o = (n = r.get("launchContext")) != null ? n : "";
      o !== "" &&
        (e.appContext == null
          ? (e.appContext = o)
          : (e.appContext = e.appContext + "+launch:" + o));
    }
    var x = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(
      E,
      k,
    );
    l.WAWebWindowsWamAppLaunchReporter = x;
  },
  98,
);
