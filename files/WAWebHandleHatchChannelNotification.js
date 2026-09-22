__d(
  "WAWebHandleHatchChannelNotification",
  ["WAWebHatchChannelNotificationBus", "WAWebHatchChannelNotificationDecoder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e.notificationType ===
        o("WAWebHatchChannelNotificationDecoder")
          .HATCH_NOTIFICATION_TYPE_APPROVAL_REQUEST &&
        r("WAWebHatchChannelNotificationBus").publish(e);
    }
    l.handleHatchChannelNotification = e;
  },
  98,
);
