__d(
  "WAWebPathfinderApp",
  ["WAWebPathfinderLogger", "WAWebPathfinderScreenName"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "ALERT_SHOWN",
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
        timestampMs: Date.now(),
      });
    }
    function s() {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "ALERT_CLOSED",
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
        timestampMs: Date.now(),
      });
    }
    ((l.handleAlertShown = e), (l.handleAlertClosed = s));
  },
  98,
);
