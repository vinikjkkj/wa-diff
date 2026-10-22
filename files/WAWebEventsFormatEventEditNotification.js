__d(
  "WAWebEventsFormatEventEditNotification",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSystemMsgContactName",
    "WAWebUserPrefsMeUser",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("nullthrows")(
          e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            e.subtype === "event_edit_decrypted"
            ? e
            : null,
        ),
        n = o("WAWebMsgCollection").MsgCollection.get(e.protocolMessageKey),
        a = n
          ? o("WAWebMsgGetters").getSender(n)
          : e.protocolMessageKey.participant;
      if (!a)
        return t.isEventCanceled
          ? s._(/*BTDS*/ "{event-name} was canceled", [
              s._param("event-name", t.eventName),
            ])
          : s._(/*BTDS*/ "{event-name} was updated", [
              s._param("event-name", t.eventName),
            ]);
      var i = o("WAWebSystemMsgContactName").getSystemMsgContactName(
          o("WAWebFrontendMsgGetters").getChat(e),
          o("WAWebContactCollection").ContactCollection.gadd(a),
        ),
        l = o("WAWebUserPrefsMeUser").isMeAccount(a),
        u = t.eventName;
      return t.isEventCanceled
        ? l
          ? s._(/*BTDS*/ "You canceled {event-name}", [
              s._param("event-name", u),
            ])
          : s._(/*BTDS*/ "{contact-name} canceled {event-name}", [
              s._param("contact-name", i),
              s._param("event-name", u),
            ])
        : l
          ? s._(/*BTDS*/ "You updated {event-name}", [
              s._param("event-name", u),
            ])
          : s._(/*BTDS*/ "{contact-name} updated {event-name}", [
              s._param("contact-name", i),
              s._param("event-name", u),
            ]);
    }
    l.formatEventEditNotification = e;
  },
  226,
);
