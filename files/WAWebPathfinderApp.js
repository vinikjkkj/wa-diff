__d(
  "WAWebPathfinderApp",
  ["WAWebPathfinderLogger", "WAWebPathfinderUserTouch"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "ALERT_SHOWN",
        screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
        timestampMs: Date.now(),
      });
    }
    function s() {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "ALERT_CLOSED",
        screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
        timestampMs: Date.now(),
      });
    }
    ((l.handleAlertShown = e), (l.handleAlertClosed = s));
  },
  98,
);
