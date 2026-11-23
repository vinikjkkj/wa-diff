__d(
  "WAWebFormatE2ENotification",
  [
    "fbt",
    "WALogger",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatE2ENotificationForDeviceChange",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSupportChatStrings",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserUtils",
    "WAWebWamEnumSystemMessageTypeType",
    "WAWebWid",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t) {
      var n = o(
        "WAWebSystemMessageGatingUtils",
      ).systemMessageActionTextStylingEnabled();
      switch (t.subtype) {
        case "identity": {
          var a =
            t.body == null
              ? null
              : o("WAWebContactCollection").ContactCollection.get(t.body);
          if (a != null && o("WAWebContactGetters").getIsMe(a)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateE2ENotification: self identity notif",
                  ])),
              )
              .sendLogs("SelfIdentityNotificationError");
            var i = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
            if (o("WAWebChatGetters").getIsUser(i)) {
              var l = i.contact
                ? o("WAWebFrontendContactGetters").getFormattedName(i.contact)
                : o("WAWebWidFormat").widToFormattedUser(i.id);
              return {
                text: n
                  ? s._(/*BTDS*/ "", [s._param("contactName", l)])
                  : s._(/*BTDS*/ "", [s._param("contactName", l)]),
              };
            } else {
              if (o("WAWebChatGetters").getIsGroup(i))
                return { text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "") };
              if (o("WAWebChatGetters").getIsBroadcast(i))
                return { text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "") };
            }
          }
          var u = a
            ? o("WAWebFrontendContactGetters").getFormattedName(a)
            : o("WAWebWidFormat").widToFormattedUser(t.body);
          return {
            text: n
              ? s._(/*BTDS*/ "", [s._param("contactName", u)])
              : s._(/*BTDS*/ "", [s._param("contactName", u)]),
          };
        }
        case "device":
          return {
            text: o(
              "WAWebFormatE2ENotificationForDeviceChange",
            ).formatE2ENotificationForDeviceChange(t),
            enumType: o(
              "WAWebFormatE2ENotificationForDeviceChange",
            ).getE2ENotificationForDeviceChangeEnum(t),
          };
        case "encrypt": {
          var c = t.id.remote;
          return r("WAWebWid").isGroup(c)
            ? o("WAWebChatGroupUtils").isSupportGroup(
                o("WAWebFrontendMsgGetters").getMaybeChat(t.unsafe()),
              )
              ? {
                  text: o("WAWebSupportChatStrings").SupportChatSystemMessage(),
                }
              : {
                  text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES,
                }
            : o("WAWebMsgGetters").getIsCAPISupport(t.unsafe()) ||
                c.isSupportAgentBot()
              ? {
                  text: o("WAWebSupportChatStrings").SupportChatSystemMessage(),
                }
              : r("WAWebWid").isBroadcast(c)
                ? {
                    text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                    enumType: o("WAWebWamEnumSystemMessageTypeType")
                      .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_BROADCAST_LIST,
                  }
                : o("WAWebUserUtils").isMeAccount(c)
                  ? {
                      text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                      enumType: o("WAWebWamEnumSystemMessageTypeType")
                        .SYSTEM_MESSAGE_TYPE_TYPE
                        .E2E_ENCRYPTED_MESSAGE_YOURSELF,
                    }
                  : {
                      text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                      enumType: o("WAWebWamEnumSystemMessageTypeType")
                        .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES,
                    };
        }
        case "encrypt_now":
          return {
            text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
            enumType: o("WAWebWamEnumSystemMessageTypeType")
              .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES_CALLS,
          };
        case "e2e_identity_unavailable":
          return { text: s._(/*BTDS*/ "") };
        case "chat_psa":
          return {
            text: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
            enumType: o("WAWebWamEnumSystemMessageTypeType")
              .SYSTEM_MESSAGE_TYPE_TYPE.OFFICIAL_ACCOUNT_INFO,
          };
        case "group_transition_to_tee_bot_group":
          return {
            text: s._(/*BTDS*/ ""),
            enumType: o("WAWebWamEnumSystemMessageTypeType")
              .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES_CALLS,
          };
        default:
          return { text: "" };
      }
    }
    function c(e) {
      return u(e).text;
    }
    function d(e) {
      return u(e).enumType;
    }
    ((l.formatE2ENotification = c), (l.getE2ENotificationEnum = d));
  },
  226,
);
