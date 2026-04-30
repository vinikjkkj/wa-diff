__d(
  "WAWebWindowsWamAppLaunchReporter",
  [
    "WALogger",
    "WAResolvable",
    "WAWebAppLaunchWamEvent",
    "WAWebAppTracker",
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
      y = new (o("WAResolvable").Resolvable)(),
      C = 0,
      b = !1;
    function v(e, t) {
      return t > e
        ? o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.LUKEWARM
        : o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (!e) {
            var n = !0;
            if (!b) {
              var r = ++C;
              if (((n = yield y.promise), r !== C)) return;
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
                (b = !0));
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
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
        n.getEvents().on("appStateChanged", S),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function E(e) {
      k(e).catch(r("WAWebNoop"));
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              a = yield n.takeAppLaunchTimeStamp(),
              i = yield n.getFirstAppRestoreTimeStamp(),
              l = n.isMinimizedToTray(),
              s = n.detectNativeClockSkew();
            if (s != null && s > h) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "commitEventAsync: large clock skew: ",
                      "",
                    ])),
                  s,
                )
                .sendLogs("native-clock-skew");
              return;
            }
            if (l || a === 0) {
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "commitEventAsync: deferring: tray=",
                    ",\n      appLaunchT=",
                    "",
                  ])),
                l,
                a,
              ),
                y.resolve(a !== 0));
              return;
            }
            if (r < i) {
              var u = Date.now() - i;
              ((e.appLaunchT = u),
                (e.appLaunchTypeT = o(
                  "WAWebWamEnumAppLaunchType",
                ).APP_LAUNCH_TYPE.WARM),
                o("WAWebAppTracker").attachWAMAppContext(e, u),
                e.commit(),
                (b = !0),
                y.resolve(!1));
              return;
            }
            var c = Math.max(a, i),
              C = r - c;
            if (C > 6e5) {
              var S = function (t) {
                  try {
                    return new Date(t).toISOString();
                  } catch (e) {
                    return t.toString();
                  }
                },
                R = S(a),
                L = S(i),
                E = S(c),
                k = S(r),
                I = S(self.performance.timing.fetchStart);
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "commitEventAsync: appLaunchT large t=",
                      " launch=",
                      " restore=",
                      "",
                    ])),
                  C,
                  R,
                  L,
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
                    E,
                    k,
                    I,
                  )
                  .sendLogs("app_launch_time_is_large"));
            }
            ((e.appLaunchT = C),
              (e.appLaunchTypeT = v(a, i)),
              o("WAWebAppTracker").attachWAMAppContext(e, C),
              T(e),
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t,
        n,
        r = new URLSearchParams((t = self.location.search) != null ? t : ""),
        o = (n = r.get("launchContext")) != null ? n : "";
      o !== "" &&
        (e.appContext == null
          ? (e.appContext = o)
          : (e.appContext = e.appContext + "+launch:" + o));
    }
    var D = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(
      L,
      E,
    );
    l.WAWebWindowsWamAppLaunchReporter = D;
  },
  98,
);
