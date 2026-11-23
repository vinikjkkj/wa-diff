__d(
  "WAWebFormatUnknownMsg",
  [
    "fbt",
    "WAWebCommonMsgUtils",
    "WAWebFbtAppName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t ? s._(/*BTDS*/ "") : c();
    }
    function m(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t ? s._(/*BTDS*/ "") : c();
    }
    function p(e) {
      var t = o("WAWebMsgGetters").getIsNewsletterMsg(e);
      return t ? s._(/*BTDS*/ "") : c();
    }
    function _(e) {
      return o("WAWebMsgGetters").getIsSentByMe(e) ? m(e) : d(e);
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g(e) {
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION)
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      if (
        e.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        e.futureproofSubtype === "message_edit"
      )
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT)
        return o("WAWebMsgGetters").getIsSentByMe(e) ? _(e) : s._(/*BTDS*/ "");
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE)
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM)
        return s._(/*BTDS*/ "");
      if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE)
        return c();
      if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type)) return f();
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
        e.futureproofType === o("WAWebMsgType").MSG_TYPE.CALL_LOG
      )
        return s._(/*BTDS*/ "");
      if (
        e.futureproofType ===
        o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED
      )
        return o("WAWebMsgGetters").getIsSentByMe(e)
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
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
    function h(e) {
      if (e.futureproofType === o("WAWebMsgType").MSG_TYPE.REACTION)
        return s._(/*BTDS*/ "");
      switch (e.subtype) {
        case "phone":
          return p(e);
        case "phone_only_feature":
          return s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m1",
              u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
        default:
          return d(e);
      }
    }
    ((l.defaultFutureproofMsgText = _),
      (l.richResponseUnsupportedMsgText = f),
      (l.formatUnknownMsgText = g),
      (l.formatUnknownMsgNotification = h));
  },
  226,
);
