__d(
  "WAWebCallBackgroundPauseController",
  [
    "WAWebBackgroundPauseState",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s() {
      e ||
        ((e = !0),
        r("WAWebCallCollection").on(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          u,
        ),
        u());
    }
    function u() {
      var e = r("WAWebCallCollection").activeCall != null;
      o("WAWebBackgroundPauseState").backgroundPauseState.get() !== e &&
        o("WAWebBackgroundPauseState").backgroundPauseState.set(e);
    }
    l.setupCallBackgroundPause = s;
  },
  98,
);
