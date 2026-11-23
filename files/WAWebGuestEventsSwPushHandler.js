__d(
  "WAWebGuestEventsSwPushHandler",
  [
    "WALogger",
    "WAWebGuestEventsNotificationTokenStore",
    "WAWebGuestEventsSwInitDb",
    "WAWebSwResources",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.body,
        n = e.id,
        r = e.title,
        o = e.type;
      return (o === "EVENT_DETAIL_CHANGED" || o === "EVENT_REMINDER") &&
        typeof t == "string" &&
        typeof n == "string"
        ? {
            type: o,
            body: t,
            title: typeof r == "string" && r !== "" ? r : null,
            id: n,
          }
        : null;
    }
    function d(e) {
      return c(e) != null;
    }
    function m(e, t) {
      var n, r;
      return (n = (r = e.title) != null ? r : t == null ? void 0 : t.name) !=
        null
        ? n
        : "WhatsApp";
    }
    function p(e, t) {
      var n;
      return {
        body: e.body,
        icon:
          (n = t == null ? void 0 : t.coverImageUrl) != null
            ? n
            : r("WAWebSwResources").wa_default_notification_icon,
        actions: [],
        data: { type: e.type, id: e.id },
      };
    }
    function _(t, n) {
      var r = c(n);
      if (r == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sw][guest-events] dropped push with invalid payload",
            ])),
        );
        return;
      }
      t.waitUntil(f(r));
    }
    async function f(e) {
      var t = await g(e.id);
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[sw][guest-events] showing notification ",
            "",
          ])),
        e.type,
      ),
        await (self.registration.showNotification == null
          ? void 0
          : self.registration.showNotification(m(e, t), p(e, t))));
    }
    async function g(e) {
      try {
        return (await o("WAWebGuestEventsSwInitDb").initGuestEventsSwDb())
          ? await o(
              "WAWebGuestEventsNotificationTokenStore",
            ).getGuestEventNotificationDetails(e)
          : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw][guest-events] failed to read notification details: ",
                  "",
                ])),
              e,
            )
            .sendLogs("guest-events-notif-details-read-error"),
          null
        );
      }
    }
    ((l.parseGuestEventNotificationPayload = c),
      (l.isGuestEventNotificationPayload = d),
      (l.getGuestEventNotificationTitle = m),
      (l.getGuestEventNotificationOptions = p),
      (l.guestEventsPushHandler = _),
      (l.showGuestEventNotification = f));
  },
  98,
);
