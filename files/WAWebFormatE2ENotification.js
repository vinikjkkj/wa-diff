__d(
  "WAWebFormatE2ENotification",
  [
    "fbt",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatE2ENotificationForDeviceChange",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgGetters",
    "WAWebSupportChatStrings",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserPrefsMeUser",
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
                  ? s._(
                      /*BTDS*/ "Your security code with {contactName} changed",
                      [s._param("contactName", l)],
                    )
                  : s._(
                      /*BTDS*/ "Your security code with {contactName} changed. Click to learn more",
                      [s._param("contactName", l)],
                    ),
              };
            } else {
              if (o("WAWebChatGetters").getIsGroup(i))
                return {
                  text: n
                    ? s._(
                        /*BTDS*/ "Your security code with all members changed",
                      )
                    : s._(
                        /*BTDS*/ "Your security code with all members changed. Click to learn more",
                      ),
                };
              if (o("WAWebChatGetters").getIsBroadcast(i))
                return {
                  text: n
                    ? s._(
                        /*BTDS*/ "Your security code with all recipients changed",
                      )
                    : s._(
                        /*BTDS*/ "Your security code with all recipients changed. Click to learn more",
                      ),
                };
            }
          }
          var u = a
            ? o("WAWebFrontendContactGetters").getFormattedName(a)
            : o("WAWebWidFormat").widToFormattedUser(t.body);
          return {
            text: n
              ? s._(/*BTDS*/ "Your security code with {contactName} changed", [
                  s._param("contactName", u),
                ])
              : s._(
                  /*BTDS*/ "Your security code with {contactName} changed. Click to learn more",
                  [s._param("contactName", u)],
                ),
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
              : o(
                    "WAWebLimitSharingGatingUtils",
                  ).isRenderUpdatedDisclosureGatingEnabled()
                ? {
                    text: n
                      ? s._(
                          /*BTDS*/ "Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them",
                        )
                      : s._(
                          /*BTDS*/ "Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them. Click to learn more",
                        ),
                    enumType: o("WAWebWamEnumSystemMessageTypeType")
                      .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES,
                  }
                : {
                    text: n
                      ? s._(
                          /*BTDS*/ "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them",
                        )
                      : s._(
                          /*BTDS*/ "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more",
                        ),
                    enumType: o("WAWebWamEnumSystemMessageTypeType")
                      .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES,
                  }
            : o("WAWebMsgGetters").getIsCAPISupport(t)
              ? {
                  text: o("WAWebSupportChatStrings").SupportChatSystemMessage(),
                }
              : r("WAWebWid").isBroadcast(c)
                ? {
                    text: n
                      ? s._(
                          /*BTDS*/ "Messages you send to this broadcast list are secured with end-to-end encryption",
                        )
                      : s._(
                          /*BTDS*/ "Messages you send to this broadcast list are secured with end-to-end encryption. Click to learn more",
                        ),
                    enumType: o("WAWebWamEnumSystemMessageTypeType")
                      .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_BROADCAST_LIST,
                  }
                : o("WAWebUserPrefsMeUser").isMeAccount(c)
                  ? o(
                      "WAWebLimitSharingGatingUtils",
                    ).isRenderUpdatedDisclosureGatingEnabled()
                    ? {
                        text: n
                          ? s._(
                              /*BTDS*/ "Messages to yourself are end-to-end encrypted. No one else, not even WhatsApp, can read, listen to, or share them",
                            )
                          : s._(
                              /*BTDS*/ "Messages to yourself are end-to-end encrypted. No one else, not even WhatsApp, can read, listen to, or share them. Click to learn more",
                            ),
                        enumType: o("WAWebWamEnumSystemMessageTypeType")
                          .SYSTEM_MESSAGE_TYPE_TYPE
                          .E2E_ENCRYPTED_MESSAGE_YOURSELF,
                      }
                    : {
                        text: n
                          ? s._(
                              /*BTDS*/ "Messages to yourself are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them",
                            )
                          : s._(
                              /*BTDS*/ "Messages to yourself are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more",
                            ),
                        enumType: o("WAWebWamEnumSystemMessageTypeType")
                          .SYSTEM_MESSAGE_TYPE_TYPE
                          .E2E_ENCRYPTED_MESSAGE_YOURSELF,
                      }
                  : o(
                        "WAWebLimitSharingGatingUtils",
                      ).isRenderUpdatedDisclosureGatingEnabled()
                    ? {
                        text: n
                          ? s._(
                              /*BTDS*/ "Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them",
                            )
                          : s._(
                              /*BTDS*/ "Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them. Click to learn more",
                            ),
                        enumType: o("WAWebWamEnumSystemMessageTypeType")
                          .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES,
                      }
                    : {
                        text: n
                          ? s._(
                              /*BTDS*/ "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them",
                            )
                          : s._(
                              /*BTDS*/ "Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more",
                            ),
                        enumType: o("WAWebWamEnumSystemMessageTypeType")
                          .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES,
                      };
        }
        case "encrypt_now":
          return o(
            "WAWebLimitSharingGatingUtils",
          ).isRenderUpdatedDisclosureGatingEnabled()
            ? {
                text: n
                  ? s._(
                      /*BTDS*/ "Messages and calls are now end-to-end encrypted. Only people in this chat can read, listen to, or share them",
                    )
                  : s._(
                      /*BTDS*/ "Messages and calls are now end-to-end encrypted. Only people in this chat can read, listen to, or share them. Click to learn more",
                    ),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES_CALLS,
              }
            : {
                text: n
                  ? s._(
                      /*BTDS*/ "Messages and calls are now end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them",
                    )
                  : s._(
                      /*BTDS*/ "Messages and calls are now end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Click to learn more",
                    ),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES_CALLS,
              };
        case "e2e_identity_unavailable":
          return {
            text: s._(
              /*BTDS*/ "Security code notifications are no longer available for this chat",
            ),
          };
        case "chat_psa":
          return {
            text: n
              ? s._(/*BTDS*/ "This is an official account of WhatsApp")
              : s._(
                  /*BTDS*/ "This is an official account of WhatsApp. Click to learn more",
                ),
            enumType: o("WAWebWamEnumSystemMessageTypeType")
              .SYSTEM_MESSAGE_TYPE_TYPE.OFFICIAL_ACCOUNT_INFO,
          };
        case "group_transition_to_tee_bot_group":
          return o(
            "WAWebBotGroupGatingUtils",
          ).isTEEGroupBotParticipantAddEnabled()
            ? {
                text: s._(
                  /*BTDS*/ "A group member added Meta AI to this chat. It's secured with Private Processing, so WhatsApp and Meta can't see the chat. Group admins can remove Meta AI at any time.",
                ),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.E2E_ENCRYPTED_MESSAGES_CALLS,
              }
            : { text: "" };
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
