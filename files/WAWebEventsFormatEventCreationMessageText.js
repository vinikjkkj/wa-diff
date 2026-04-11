__d(
  "WAWebEventsFormatEventCreationMessageText",
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
          o("WAWebFrontendMsgGetters").getAsEventCreation(t),
        );
      if (n.formatAsLastMsg === !0)
        return o("WAWebMsgGetters").getIsSentByMe(a)
          ? s._(/*BTDS*/ "created an event: {event-name}", [
              s._param("event-name", a.eventName),
            ])
          : s._(/*BTDS*/ "invited you to an event: {event-name}", [
              s._param("event-name", a.eventName),
            ]);
      var i = a.eventStartTime;
      return i
        ? s._(/*BTDS*/ "{event-name} \u2022 {event-time}", [
            s._param("event-name", a.eventName),
            s._param(
              "event-time",
              o("WAWebFormatEventDateString").getEventDateStringFor(i),
            ),
          ])
        : a.eventName;
    }
    l.default = e;
  },
  226,
);
