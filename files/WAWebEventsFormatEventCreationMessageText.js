__d(
  "WAWebEventsFormatEventCreationMessageText",
  [
    "fbt",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        a = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsEventCreation(t));
      if (n.formatAsLastMsg === !0)
        return o("WAWebMsgGetters").getIsSentByMe(t)
          ? s._(/*BTDS*/ "", [s._param("event-name", a.eventName)])
          : s._(/*BTDS*/ "", [s._param("event-name", a.eventName)]);
      var i = a.eventStartTime;
      return i
        ? s._(/*BTDS*/ "", [
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
