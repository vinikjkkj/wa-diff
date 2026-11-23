__d(
  "WhatsAppWebGuestServiceWorker",
  [
    "WAWebGuestMessagingSwInitDb",
    "WAWebGuestMessagingSwNotificationClickHandler",
    "WAWebGuestMessagingSwPushHandler",
    "WAWebLoggerWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        init: function () {
          try {
            return (
              o("WAWebLoggerWorker").initializeWAWebLogger(),
              o("WAWebGuestMessagingSwInitDb").initDb(),
              self.addEventListener("push", function (t) {
                if (t instanceof PushEvent) {
                  var e,
                    n = (e = t.data) == null ? void 0 : e.json();
                  o("WAWebGuestMessagingSwPushHandler").guestPushHandler(t, n);
                }
              }),
              self.addEventListener("notificationclick", function (t) {
                t instanceof NotificationEvent &&
                  o(
                    "WAWebGuestMessagingSwNotificationClickHandler",
                  ).guestNotificationClickHandler(t);
              }),
              self.addEventListener("install", function (t) {
                t instanceof ExtendableEvent && t.waitUntil(self.skipWaiting());
              }),
              self.addEventListener("message", function (t) {
                t instanceof ExtendableMessageEvent &&
                  typeof t.data == "object" &&
                  t.data != null &&
                  "type" in t.data &&
                  t.data.type === "guest_tab_in_background_show_notif" &&
                  o("WAWebGuestMessagingSwPushHandler").guestPushHandler(t);
              }),
              !0
            );
          } catch (e) {
            return !1;
          }
        },
      },
      s = e.init(),
      u = s;
    l.default = u;
  },
  98,
);
