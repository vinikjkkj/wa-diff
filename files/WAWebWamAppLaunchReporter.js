__d(
  "WAWebWamAppLaunchReporter",
  [
    "WALogger",
    "WAWebAppLaunchWamEvent",
    "WAWebAppTracker",
    "WAWebEnvironment",
    "WAWebWamBaseAppLaunchReporter",
    "WAWebWamEnumAppLaunchType",
    "cr:9467",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:9467")) != null ? e : {},
      c = u.WAWebWindowsWamAppLaunchReporter,
      d = new (o("WAWebWamBaseAppLaunchReporter").BaseAppLaunchReporter)(p, _),
      m = !1;
    function p() {
      return (
        window.document &&
          ((m = !document.hidden),
          document.addEventListener("visibilitychange", f)),
        new (o("WAWebAppLaunchWamEvent").AppLaunchWamEvent)()
      );
    }
    function _(e) {
      if (!m) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "commitEvent: skip, loaded before doc visible",
            ])),
        );
        return;
      }
      var t = Math.ceil(self.performance.now());
      ((e.appLaunchTypeT = o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD),
        (e.appLaunchT = t),
        o("WAWebAppTracker").attachWAMAppContext(e, t),
        e.commit(),
        window.document && document.removeEventListener("visibilitychange", f));
    }
    function f() {
      document.hidden ||
        ((m = !0), document.removeEventListener("visibilitychange", f));
    }
    function g() {
      return r("WAWebEnvironment").isWindows ? c : d;
    }
    l.getAppLaunchReporter = g;
  },
  98,
);
