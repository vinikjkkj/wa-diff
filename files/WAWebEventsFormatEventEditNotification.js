__d(
  "WAWebEventsFormatEventEditNotification",
  [
    "fbt",
    "WANullthrows",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("WANullthrows")(
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
      var i = o("WAWebContactCollection").ContactCollection.gadd(a),
        l = o("WAWebContactGetters").getNotifyName(i),
        u;
      o("WAWebFrontendContactGetters").getIsMyContact(i)
        ? (u = o("WAWebFrontendContactGetters").getFormattedName(i))
        : l != null
          ? (u = o("WAWebChatContactUtils").getFormattedNotifyName(
              o("WAWebContactGetters").getNotifyName(i),
            ))
          : (u = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
              o("WAWebFrontendMsgGetters").getChat(e),
              i,
            )
              ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(i)
              : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(
                  i,
                ));
      var c = o("WAWebUserPrefsMeUser").isMeAccount(a),
        d = t.eventName;
      return t.isEventCanceled
        ? c
          ? s._(/*BTDS*/ "You canceled {event-name}", [
              s._param("event-name", d),
            ])
          : s._(/*BTDS*/ "{contact-name} canceled {event-name}", [
              s._param("contact-name", u),
              s._param("event-name", d),
            ])
        : c
          ? s._(/*BTDS*/ "You updated {event-name}", [
              s._param("event-name", d),
            ])
          : s._(/*BTDS*/ "{contact-name} updated {event-name}", [
              s._param("contact-name", u),
              s._param("event-name", d),
            ]);
    }
    l.formatEventEditNotification = e;
  },
  226,
);
