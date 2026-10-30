__d(
  "WAWebVoipMainThreadLockFixes",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebVoipMainThreadLockArm",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipQplHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t =
          o("WAWebABProps").getABPropConfigValue(
            "web_voip_main_thread_lock_fixes",
          ) === !0,
        n = c(t);
      return (
        o("WAWebVoipMainThreadLockArm").setMainThreadLockArm(n),
        e != null &&
          o("WAWebVoipMainThreadLockODS").logMainThreadLockReached(e, n),
        t
      );
    }
    function u() {
      var t = s(),
        n = o("WAWebVoipMainThreadLockArm").getMainThreadLockArm();
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: main thread lock fixes enabled=",
            " arm=",
            "",
          ])),
        String(t),
        n,
      ),
        o("WAWebVoipMainThreadLockODS").logMainThreadLockBoot(n),
        o("WAWebVoipQplHelpers").voipInitQplAnnotateMainLockFixArm(n));
    }
    function c(e) {
      return o("WAWebABPropsCache").getABPropExpoKey(
        "web_voip_main_thread_lock_fixes",
      ) == null
        ? "none"
        : e
          ? "test"
          : "control";
    }
    ((l.readMainThreadLockFix = s), (l.readMainThreadLockFixAtBoot = u));
  },
  98,
);
