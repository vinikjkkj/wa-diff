__d(
  "WAWebGuestEventsNotificationTokenStore",
  ["WALogger", "WAWebApiLocalStorage", "WAWebWorkerStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n) {
      try {
        await o("WAWebWorkerStorage")
          .getLocalStorageTable()
          .createOrReplace({ key: t, value: n });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[guest_events] failed to persist event id->token mapping",
              ])),
          )
          .sendLogs("guest-events-id-token-map-write-error");
      }
    }
    async function c(e) {
      var t = await o("WAWebApiLocalStorage").getLocalStorageValue(e);
      return t != null ? t : null;
    }
    async function d(e, t) {
      try {
        await o("WAWebWorkerStorage")
          .getLocalStorageTable()
          .createOrReplace({ key: p(e), value: JSON.stringify(t) });
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[guest_events] failed to persist event notification details",
              ])),
          )
          .sendLogs("guest-events-notif-details-write-error");
      }
    }
    async function m(e) {
      var t = await o("WAWebApiLocalStorage").getLocalStorageValue(p(e));
      return t == null ? null : _(t);
    }
    function p(e) {
      return "guest_event_notif_details:" + e;
    }
    function _(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object") return null;
      var n = t,
        r = n.coverImageUrl,
        o = n.name;
      return { name: f(o), coverImageUrl: f(r) };
    }
    function f(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    ((l.setGuestEventTokenForId = u),
      (l.getGuestEventTokenForId = c),
      (l.storeGuestEventNotificationDetails = d),
      (l.getGuestEventNotificationDetails = m));
  },
  98,
);
