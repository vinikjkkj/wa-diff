__d(
  "WAWebVoipMoveCallHere",
  ["WAWebVoipUiDocPipPortalContainer.react", "WAWebVoipUiManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (window.focus(),
        o("WAWebVoipUiManager").closeVoipUiPopoutWindow({ callEnded: !1 }),
        o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen() &&
          o(
            "WAWebVoipUiDocPipPortalContainer.react",
          ).WAWebVoipUiDocPipEventEmitter.trigger("docPipOpenFailed"));
    }
    l.moveCallHere = e;
  },
  98,
);
