__d(
  "WAWebCommonMsgUtils",
  ["$InternalEnum", "WALogger", "WAWebMsgType", "WAWebRichResponse.flow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        DEFAULT: "d",
        SIGNIFICANT: "s",
        AMBIENT: "a",
        NOTEWORTHY: "n",
        IGNORE: "i",
      });
    function u(e, t) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.GP2:
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE:
        case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
          return !0;
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
          return (
            t === "ephemeral_setting" ||
            t === "share_phone_number" ||
            t === "event_edit_decrypted" ||
            t === "limit_sharing_system_message"
          );
        default:
          return !1;
      }
    }
    function c(e) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT ||
        e === o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER
      );
    }
    function d(e) {
      return e === o("WAWebMsgType").MSG_TYPE.QUARANTINED;
    }
    function m(e) {
      return e === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function p(e) {
      return e === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE;
    }
    function _(e) {
      var t;
      if (!p(e.type)) return !1;
      var n = (t = e.richResponse) == null ? void 0 : t.parseState;
      return (
        n === o("WAWebRichResponse.flow").RichResponseParseState.Partial ||
        n === o("WAWebRichResponse.flow").RichResponseParseState.Parsed
      );
    }
    function f(e) {
      return e === o("WAWebMsgType").MSG_TYPE.CALL_LOG;
    }
    function g(t) {
      var n = [],
        r = 0;
      (t.forEach(function (e) {
        e.type === void 0 && (r++, n.length < 3 && n.push(e.id));
      }),
        r > 0 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "undefined message type count::",
                  " msgIds::",
                  "",
                ])),
              r,
              n,
            )
            .sendLogs("undefined-msg-type", { sampling: 0.01 }));
    }
    ((l.EventType = s),
      (l.isNotificationType = u),
      (l.isPlaceholderMsg = c),
      (l.isQuarantinedMsg = d),
      (l.isFutureproofMsg = m),
      (l.isRichResponseMsg = p),
      (l.isSomewhatParsedRichResponseMsg = _),
      (l.isCallLogMsg = f),
      (l.logUndefinedMessage = g));
  },
  98,
);
