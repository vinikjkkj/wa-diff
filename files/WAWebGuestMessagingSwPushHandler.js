__d(
  "WAWebGuestMessagingSwPushHandler",
  [
    "WALogger",
    "WAWebGuestMessagingBackendUtils",
    "WAWebGuestMessagingSwInitDb",
    "WAWebSwResources",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      var a = async function () {
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] Start processing guest push notification",
              ])),
          ),
          n == null)
        ) {
          var t, a, i, l;
          (await o("WAWebGuestMessagingSwInitDb").initDb(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] done initializing db",
                ])),
            ));
          var c = await o(
            "WAWebGuestMessagingBackendUtils",
          ).getOfflineNotificationContent();
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] fetched notif content from db",
              ])),
          );
          var d = {
              body:
                (t =
                  (a = c == null ? void 0 : c.notificationTextWithPushname) !=
                  null
                    ? a
                    : c == null
                      ? void 0
                      : c.notificationText) != null
                  ? t
                  : "You have a new message",
              icon:
                (i = c == null ? void 0 : c.inviterProfilePicUrl) != null
                  ? i
                  : r("WAWebSwResources").wa_default_notification_icon,
              actions: [],
            },
            m =
              (l = c == null ? void 0 : c.notificationTitle) != null
                ? l
                : "WhatsApp";
          return self.registration.showNotification == null
            ? void 0
            : self.registration.showNotification(m, d);
        }
        var p = {
          body: n.body,
          icon: r("WAWebSwResources").wa_default_notification_icon,
          actions: [],
        };
        return self.registration.showNotification == null
          ? void 0
          : self.registration.showNotification(n.title, p);
      };
      t.waitUntil(a());
    }
    l.guestPushHandler = c;
  },
  98,
);
