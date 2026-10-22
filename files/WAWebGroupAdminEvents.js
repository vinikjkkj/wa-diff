__d(
  "WAWebGroupAdminEvents",
  ["WAWebEventUtils", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    var e = [
      "add",
      "remove",
      "reset",
      "change:isEventCanceled",
      "change:eventStartTime",
      "change:eventEndTime",
    ];
    function s(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (e) {
          c(e).forEach(function (r) {
            (u(r) ? t : n).push({ chat: e, msg: r });
          });
        }),
        t.sort(function (e, t) {
          return e.msg.eventStartTime - t.msg.eventStartTime;
        }),
        n.sort(function (e, t) {
          return t.msg.eventStartTime - e.msg.eventStartTime;
        }),
        { past: n, upcoming: t }
      );
    }
    function u(e) {
      return (
        e.isEventCanceled !== !0 &&
        !o("WAWebEventUtils").shouldShowEventAsPassed(
          e.eventStartTime,
          e.eventEndTime,
        )
      );
    }
    function c(e) {
      return e.getEventMsgs().reduce(function (e, t) {
        var n = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
        return (n != null && e.push(n), e);
      }, []);
    }
    function d(e) {
      return e.getEventMsgs().some(function (e) {
        var t = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
        return t != null && u(t);
      });
    }
    ((l.EVENT_COLLECTION_EVENTS = e),
      (l.getAdminGroupEvents = s),
      (l.isUpcomingEvent = u),
      (l.hasUpcomingEvent = d));
  },
  98,
);
