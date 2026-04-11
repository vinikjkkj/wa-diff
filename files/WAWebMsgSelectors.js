__d(
  "WAWebMsgSelectors",
  ["WAWebFrontendMsgGetters", "WAWebMsgGetters", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebStateUtils").unproxy(e).unsafe();
      return (
        o("WAWebMsgGetters").getNumTimesForwarded(t) > 0 &&
        !o("WAWebFrontendMsgGetters").getAsRevoked(t)
      );
    }
    l.showForwarded = e;
  },
  98,
);
