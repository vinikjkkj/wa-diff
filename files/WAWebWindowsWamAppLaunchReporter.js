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
    "WAWebWindowsHybridBridgeCommon",
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
    async function S(t) {
      var n;
      if (!t) {
        var r = !0;
        if (!b) {
          var a = ++C;
          if (((r = await y.promise), a !== C)) return;
        }
        if (r) {
          var i = Date.now(),
            l =
              (n = o(
                "WAWebWindowsHybridBridgeCommon",
              ).WAWebWindowsGetBridge()) == null
                ? void 0
                : n.nativeAppStateBridge;
          if (l == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "onAppStateChanged: ignoring: bridge is null",
                ])),
            );
            return;
          }
          var c = l.detectNativeClockSkew();
          if (c != null && c > h) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "commitEventAsync: large clock skew: ",
                    "",
                  ])),
                c,
              )
              .sendLogs("native-clock-skew");
            return;
          }
          var d = l.getLastAppRestoreTimeStamp();
          if (d === 0) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "onAppStateChanged: ignoring: appRestoreT not available",
                ])),
            );
            return;
          }
          var m = i - d,
            p = new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)({
              appLaunchTypeT: o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE
                .WARM,
              appLaunchT: i - d,
            });
          (o("WAWebAppTracker").attachWAMAppContext(p, m),
            p.commit(),
            (b = !0));
        }
      }
    }
    function R() {
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
        t.getEvents().on("appStateChanged", S),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function L(e) {
      E(e).catch(r("WAWebNoop"));
    }
    async function E(e) {
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
          a,
          i,
          l,
          s = o("WAWebABProps").getABPropConfigValue(
            "web_anr_async_native_app_state_bridge_enabled",
          )
            ? await n.takeAppLaunchSnapshotAsync()
            : null;
        s != null
          ? ((a = s.appLaunchTimeStamp),
            (i = s.firstAppRestoreTimeStamp),
            (l = s.nativeClockSkew))
          : ((a = n.takeAppLaunchTimeStamp()),
            (i = n.getFirstAppRestoreTimeStamp()),
            (l = n.detectNativeClockSkew()));
        var u = n.isMinimizedToTray();
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
        if (u || a === 0) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "commitEventAsync: deferring: tray=",
                `,
      appLaunchT=`,
                "",
              ])),
            u,
            a,
          ),
            y.resolve(a !== 0));
          return;
        }
        if (r < i) {
          var c = Date.now() - i;
          ((e.appLaunchT = c),
            (e.appLaunchTypeT = o(
              "WAWebWamEnumAppLaunchType",
            ).APP_LAUNCH_TYPE.WARM),
            o("WAWebAppTracker").attachWAMAppContext(e, c),
            e.commit(),
            (b = !0),
            y.resolve(!1));
          return;
        }
        var C = Math.max(a, i),
          S = r - C;
        if (S > 6e5) {
          var R = function (t) {
              try {
                return new Date(t).toISOString();
              } catch (e) {
                return t.toString();
              }
            },
            L = R(a),
            E = R(i),
            I = R(C),
            T = R(r),
            D = R(self.performance.timing.fetchStart);
          (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "commitEventAsync: appLaunchT large t=",
                  " launch=",
                  " restore=",
                  "",
                ])),
              S,
              L,
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
                I,
                T,
                D,
              )
              .sendLogs("app_launch_time_is_large"));
        }
        ((e.appLaunchT = S),
          (e.appLaunchTypeT = v(a, i)),
          o("WAWebAppTracker").attachWAMAppContext(e, S),
          k(e),
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
    function k(e) {
      var t,
        n,
        r = new URLSearchParams((t = self.location.search) != null ? t : ""),
        o = (n = r.get("launchContext")) != null ? n : "";
      o !== "" &&
        (e.appContext == null
          ? (e.appContext = o)
          : (e.appContext = e.appContext + "+launch:" + o));
    }
    var I = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(
      R,
      L,
    );
    l.WAWebWindowsWamAppLaunchReporter = I;
  },
  98,
);
