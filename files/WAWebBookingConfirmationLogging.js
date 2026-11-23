__d(
  "WAWebBookingConfirmationLogging",
  [
    "WALogger",
    "WAWebBookingConfirmationGating",
    "WAWebBusinessTemplateBookingStatusWamEvent",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPrivacySettings",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmBookingStatusInteractionWamEvent",
    "WAWebUnifiedSession",
    "WAWebUserPrefsGeneral",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      if (
        o(
          "WAWebBookingConfirmationGating",
        ).isBookingConfirmationLoggingEnabled()
      ) {
        var a = o("WAWebFrontendMsgGetters").getChat(n);
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(n, a)
          .addCommonFields()
          .log(async function (i) {
            var l,
              u,
              c,
              d = o("WAWebFrontendContactGetters").getIsMyContact(a.contact),
              m = a.muteExpiration != null && a.muteExpiration > 0,
              p =
                o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                  .readReceipts !== o("WAWebPrivacySettings").ALL_NONE.none,
              _ =
                (l = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? l
                  : void 0,
              f = await Promise.all([
                o("WAWebChatThreadLogging")
                  .getMessageIDHMAC(n.id.toString())
                  .catch(function (t) {
                    return (
                      o("WALogger")
                        .WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[booking] message HMAC failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t))
                        .sendLogs("booking-status-msg-hmac-failed"),
                      null
                    );
                  }),
                o("WAWebChatThreadLogging")
                  .getChatThreadIDHMAC(a.id.toString())
                  .catch(function (e) {
                    return (
                      o("WALogger")
                        .WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[booking] thread HMAC failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("booking-status-thread-hmac-failed"),
                      null
                    );
                  }),
              ]),
              g = f[0],
              h = f[1];
            (new (o(
              "WAWebQbmBookingStatusInteractionWamEvent",
            ).QbmBookingStatusInteractionWamEvent)({
              actionTypeBookingStatus: t,
              chatsFolderType: i.chatsFolderType,
              contactType: i.contactType,
              deltaTime: i.deltaTime,
              deltaTimeReceived: i.deltaTimeReceived,
              isInsubContact: d,
              isMuted: m,
              messageIdHmac: g != null ? g : void 0,
              readReceiptsEnabled: p,
              threadIdHmac: h != null ? h : void 0,
              unifiedSessionId: _,
            }).commit(),
              new (o(
                "WAWebBusinessTemplateBookingStatusWamEvent",
              ).BusinessTemplateBookingStatusWamEvent)({
                actionTypeBookingStatus: t,
                businessJid:
                  (u = o("WAWebMsgGetters").getSender(n)) == null
                    ? void 0
                    : u.user,
                chatsFolderType: i.chatsFolderType,
                contactType: i.contactType,
                isInsubContact: d,
                isMuted: m,
                readReceiptsEnabled: p,
                templateId: (c = n.templateId) != null ? c : void 0,
              }).commit());
          });
      }
    }
    l.logBookingStatusInteraction = u;
  },
  98,
);
