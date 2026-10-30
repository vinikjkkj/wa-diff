__d(
  "WAWebSelfReminderWatcher",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebHandleSelfReminderPostAction",
    "WAWebMsgCollection",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "offline_delivery_end_from_bridge";
    function u() {
      var e = function (t) {
          o("WAWebHandleSelfReminderPostAction")
            .handleSelfReminderMsgAdded(t)
            .catch(c);
        },
        t = function () {
          o("WAWebHandleSelfReminderPostAction")
            .processPostedSelfReminders()
            .catch(c);
        };
      return (
        o("WAWebMsgCollection").MsgCollection.on("add", e),
        o("WAWebCmd").Cmd.on(s, t),
        o("WAWebCmd").Cmd.isOfflineDeliveryEnd && t(),
        function () {
          (o("WAWebMsgCollection").MsgCollection.off("add", e),
            o("WAWebCmd").Cmd.off(s, t));
        }
      );
    }
    function c(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[self_reminder] watcher failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("self-reminder-watcher-failed");
    }
    l.startSelfReminderWatcher = u;
  },
  98,
);
