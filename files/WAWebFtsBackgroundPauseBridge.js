__d(
  "WAWebFtsBackgroundPauseBridge",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebBackgroundPauseGating",
    "WAWebBackgroundPauseState",
    "WAWebInvocationInterface",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u() {
      s ||
        ((s = !0),
        o("WAWebBackgroundPauseState").backgroundPauseState.onSet(c),
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(c),
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(c),
        c());
    }
    function c() {
      var t =
        o("WAWebBackgroundPauseState").backgroundPauseState.get() &&
        o("WAWebBackgroundPauseGating").isVoipPauseFtsEnabled();
      o("WAWebInvocationInterface")
        .setBackgroundPause(t)
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[fts] failed to push background-pause state to the worker",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("fts-bg-pause-push-fail");
        });
    }
    l.setupFtsBackgroundPause = u;
  },
  98,
);
