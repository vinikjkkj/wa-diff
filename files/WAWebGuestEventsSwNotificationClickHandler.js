__d(
  "WAWebGuestEventsSwNotificationClickHandler",
  [
    "WALogger",
    "WAWebGuestCoreRoutes",
    "WAWebGuestEventsConsts",
    "WAWebGuestEventsNotificationTokenStore",
    "WAWebGuestEventsSwInitDb",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      var n,
        r = new URLSearchParams(
          ((n = { token: e }),
          (n[o("WAWebGuestEventsConsts").GUEST_EVENTS_ENTRY_SOURCE_PARAM] = o(
            "WAWebGuestEventsConsts",
          ).GUEST_EVENTS_NOTIFICATION_ENTRY_SOURCE),
          n),
        );
      return (
        t != null &&
          r.set(
            o("WAWebGuestEventsConsts").GUEST_EVENTS_NOTIFICATION_TYPE_PARAM,
            t,
          ),
        "" +
          self.location.origin +
          o("WAWebGuestCoreRoutes").GUEST_EVENTS_PATH +
          "?" +
          r.toString()
      );
    }
    function d(e, t) {
      try {
        var n = new URL(e);
        return (
          n.pathname === o("WAWebGuestCoreRoutes").GUEST_EVENTS_PATH &&
          n.searchParams.get("token") === t
        );
      } catch (e) {
        return !1;
      }
    }
    function m(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.id;
      return typeof t == "string" ? t : null;
    }
    function p(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.type;
      return typeof t == "string" ? t : null;
    }
    function _(e) {
      (e.notification.close(), e.waitUntil(f(e.notification.data)));
    }
    async function f(t) {
      var n = m(t);
      if (n == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sw][guest-events] notification click missing event id",
            ])),
        );
        return;
      }
      await o("WAWebGuestEventsSwInitDb").initGuestEventsSwDb();
      var r = await o(
        "WAWebGuestEventsNotificationTokenStore",
      ).getGuestEventTokenForId(n);
      if (r == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sw][guest-events] no token mapped for clicked event",
            ])),
        );
        return;
      }
      var a = c(r, p(t));
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[sw][guest-events] opening event landing page",
          ])),
      ),
        await self.clients.openWindow(a));
    }
    ((l.getGuestEventNotificationUrl = c),
      (l.isMatchingGuestEventClientUrl = d),
      (l.guestEventsNotificationClickHandler = _));
  },
  98,
);
