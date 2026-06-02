__d(
  "WAWebSharableEventInviteFormatMessageText",
  [
    "fbt",
    "WANullthrows",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        a = r("WANullthrows")(
          o("WAWebFrontendMsgGetters").getAsSharableEventInvite(t),
        );
      if (n.formatAsLastMsg === !0)
        return o("WAWebMsgGetters").getIsSentByMe(a)
          ? s._(/*BTDS*/ "sent an event invitation: {event-title}", [
              s._param("event-title", a.sharableEventInviteTitle),
            ])
          : s._(/*BTDS*/ "invited you to an event: {event-title}", [
              s._param("event-title", a.sharableEventInviteTitle),
            ]);
      var i = a.sharableEventInviteStartTime;
      return i != null
        ? s._(/*BTDS*/ "{event-title} \u2022 {event-time}", [
            s._param("event-title", a.sharableEventInviteTitle),
            s._param(
              "event-time",
              o("WAWebFormatEventDateString").getEventDateStringFor(i),
            ),
          ])
        : a.sharableEventInviteTitle;
    }
    l.default = e;
  },
  226,
);
