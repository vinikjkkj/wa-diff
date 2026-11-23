__d(
  "WhatsAppWebGuestEventsServiceWorker",
  [
    "WAWebGuestEventsSwNotificationClickHandler",
    "WAWebGuestEventsSwPushHandler",
    "WAWebLoggerWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        init: function () {
          try {
            return (
              o("WAWebLoggerWorker").initializeWAWebLogger(),
              self.addEventListener("push", function (t) {
                t instanceof PushEvent &&
                  o("WAWebGuestEventsSwPushHandler").guestEventsPushHandler(
                    t,
                    u(t),
                  );
              }),
              self.addEventListener("notificationclick", function (t) {
                t instanceof NotificationEvent &&
                  o(
                    "WAWebGuestEventsSwNotificationClickHandler",
                  ).guestEventsNotificationClickHandler(t);
              }),
              self.addEventListener("install", function (t) {
                t instanceof ExtendableEvent && t.waitUntil(self.skipWaiting());
              }),
              !0
            );
          } catch (e) {
            return !1;
          }
        },
      },
      s = e.init();
    function u(e) {
      try {
        var t;
        return (t = e.data) == null ? void 0 : t.json();
      } catch (e) {
        return null;
      }
    }
    var c = s;
    l.default = c;
  },
  98,
);
