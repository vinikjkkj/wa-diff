__d(
  "WAWebBookingConfirmationLogging",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, a) {
      if (
        o(
          "WAWebBookingConfirmationGating",
        ).isBookingConfirmationLoggingEnabled()
      ) {
        var i = o("WAWebFrontendMsgGetters").getChat(a);
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(a, i)
          .addCommonFields()
          .log(
            (function () {
              var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (l) {
                  var c,
                    d,
                    m,
                    p = o("WAWebFrontendContactGetters").getIsMyContact(
                      i.contact,
                    ),
                    _ = i.muteExpiration != null && i.muteExpiration > 0,
                    f =
                      o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                        .readReceipts !==
                      o("WAWebPrivacySettings").ALL_NONE.none,
                    g =
                      (c = o(
                        "WAWebUnifiedSession",
                      ).UnifiedSessionManager.getSessionId()) != null
                        ? c
                        : void 0,
                    h = yield (u || (u = n("Promise"))).all([
                      o("WAWebChatThreadLogging")
                        .getMessageIDHMAC(a.id.toString())
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
                        .getChatThreadIDHMAC(i.id.toString())
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
                    y = h[0],
                    C = h[1];
                  (new (o(
                    "WAWebQbmBookingStatusInteractionWamEvent",
                  ).QbmBookingStatusInteractionWamEvent)({
                    actionTypeBookingStatus: t,
                    chatsFolderType: l.chatsFolderType,
                    contactType: l.contactType,
                    deltaTime: l.deltaTime,
                    deltaTimeReceived: l.deltaTimeReceived,
                    isInsubContact: p,
                    isMuted: _,
                    messageIdHmac: y != null ? y : void 0,
                    readReceiptsEnabled: f,
                    threadIdHmac: C != null ? C : void 0,
                    unifiedSessionId: g,
                  }).commit(),
                    new (o(
                      "WAWebBusinessTemplateBookingStatusWamEvent",
                    ).BusinessTemplateBookingStatusWamEvent)({
                      actionTypeBookingStatus: t,
                      businessJid:
                        (d = o("WAWebMsgGetters").getSender(a)) == null
                          ? void 0
                          : d.user,
                      chatsFolderType: l.chatsFolderType,
                      contactType: l.contactType,
                      isInsubContact: p,
                      isMuted: _,
                      readReceiptsEnabled: f,
                      templateId: (m = a.templateId) != null ? m : void 0,
                    }).commit());
                },
              );
              return function (e) {
                return l.apply(this, arguments);
              };
            })(),
          );
      }
    }
    l.logBookingStatusInteraction = c;
  },
  98,
);
