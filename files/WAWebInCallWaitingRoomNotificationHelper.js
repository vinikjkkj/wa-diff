__d(
  "WAWebInCallWaitingRoomNotificationHelper",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebNotificationBackend",
    "WAWebNotificationController",
    "WAWebVoipPopoutWindowState",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "enable_waiting_room_admin_ui";
    function u(t) {
      var n = t.callId,
        a = t.waitingRoomUsers,
        i = t.waitingRoomUsersCount;
      if (o("WAWebABProps").getABPropConfigValue(s)) {
        if (i === 0) {
          c(n);
          return;
        }
        o("WAWebNotificationBackend")
          .showWaitingRoomNotification({
            callId: n,
            linkToken: "",
            waitingRoomUserWids: a,
            onOpenWaitingRoom: d,
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to show in-call waiting-room notification",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-in-call-waiting-room-notif");
          });
      }
    }
    function c(e) {
      o("WAWebABProps").getABPropConfigValue(s) &&
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification(
          "waiting-room:" + e,
        );
    }
    function d() {
      if (o("WAWebVoipPopoutWindowState").isPopoutWindowAlive()) {
        var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
        if (e != null)
          try {
            e.focus();
            return;
          } catch (e) {}
      }
      try {
        window.focus();
      } catch (e) {}
    }
    ((l.maybeShowOrCloseInCallWaitingRoomNotification = u),
      (l.closeInCallWaitingRoomNotification = c));
  },
  98,
);
