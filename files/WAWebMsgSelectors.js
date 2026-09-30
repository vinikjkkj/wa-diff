__d(
  "WAWebMsgSelectors",
  ["WAWebFrontendMsgGetters", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebFrontendMsgGetters").getShouldShowForwarded(
        o("WAWebStateUtils").unproxy(e).unsafe(),
      );
    }
    l.showForwarded = e;
  },
  98,
);
