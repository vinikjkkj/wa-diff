__d(
  "WAWebRecordNotificationInteraction",
  ["WALogger", "WAWebCmd", "WAWebUserPrefsNotifications", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      try {
        o("WAWebUserPrefsNotifications").saveNotificationInteractionTime();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "failed to save a notification interaction",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("save-notification-interaction-failed");
      }
      try {
        o("WAWebCmd").Cmd.onNotificationInteraction();
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "a notification interaction listener failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("notification-interaction-listener-failed");
      }
    }
    l.recordNotificationInteraction = u;
  },
  98,
);
