__d(
  "WAWebFormatUnknownMsg",
  [
    "fbt",
    "WAWebCommonMsgUtils",
    "WAWebFbtAppName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRichResponseStrings",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(
        /*BTDS*/ "This message couldn't load. Open the message on your phone to view it.",
      );
    }
    function d(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t
        ? s._(
            /*BTDS*/ "You received a channel update which couldn't load. Open the message on your phone to view it.",
          )
        : c();
    }
    function m(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t
        ? s._(
            /*BTDS*/ "You sent a channel update which couldn't load. Open the message on your phone to view it.",
          )
        : c();
    }
    function p(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t
        ? s._(
            /*BTDS*/ "You received a channel update which couldn't load. Open the message on your phone to view it.",
          )
        : c();
    }
    function _(e) {
      return o("WAWebMsgGetters").getIsSentByMe(e) ? m(e) : d(e);
    }
    function f(e) {
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION)
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(
              /*BTDS*/ "Your reaction couldn't load. Open the message on your phone to view it.",
            )
          : s._(
              /*BTDS*/ "This reaction couldn't load. Open the message on your phone to view it.",
            );
      if (
        e.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        e.futureproofSubtype === "message_edit"
      )
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(
              /*BTDS*/ "Your edited message couldn't load. Open the message on your phone to view it.",
            )
          : s._(
              /*BTDS*/ "This edited message couldn't load. Open the message on your phone to view it.",
            );
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT)
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? _(e)
          : s._(
              /*BTDS*/ "A message in this chat was kept from disappearing. Open the message on your phone to view it.",
            );
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE)
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(
              /*BTDS*/ "Your pinned message couldn't load. Open the message on your phone to view it.",
            )
          : s._(
              /*BTDS*/ "This pinned message couldn't load. Open the message on your phone to view it.",
            );
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM)
        return s._(/*BTDS*/ "Media files");
      if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE)
        return c();
      if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type))
        return o(
          "WAWebRichResponseStrings",
        ).getWholeRichResponseUnsupportedText();
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
        e.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG
      )
        return s._(
          /*BTDS*/ "This call couldn't load. Open the message on your phone to view it.",
        );
      if (
        e.futureproofType ===
        o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED
      )
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(
              /*BTDS*/ "You added an option to a poll, but this version of WhatsApp doesn't support it.",
            )
          : s._(
              /*BTDS*/ "Someone added an option to a poll, but this version of WhatsApp doesn't support it.",
            );
      if (o("WAWebMsgGetters").getIsSentByMe(e)) return _(e);
      switch (e.subtype) {
        case "phone":
          return p(e);
        case "phone_only_feature":
          return c();
        default:
          return _(e);
      }
    }
    function g(e) {
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION)
        return s._(
          /*BTDS*/ "You received a reaction. Update your version of WhatsApp to see reactions.",
        );
      switch (e.subtype) {
        case "phone":
          return p(e);
        case "phone_only_feature":
          return s._(
            /*BTDS*/ "This message can't be shown on {=m1}. Open WhatsApp on your phone to view.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ],
          );
        default:
          return d(e);
      }
    }
    ((l.defaultFutureproofMsgText = _),
      (l.formatUnknownMsgText = f),
      (l.formatUnknownMsgNotification = g));
  },
  226,
);
