__d(
  "WAWebPaymentReminderLogger",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBusinessTemplatePaymentReminderWamEvent",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPaymentReminder",
    "WAWebPaymentReminderLoggerLazy",
    "WAWebQbmPaymentReminderInteractionWamEvent",
    "WAWebUnifiedSession",
    "WAWebUserPrefsGeneral",
    "WAWebUtilsPnhSmbLoggingHelper",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e4,
      c = new Set();
    function d(e) {
      if (c.has(e)) return !1;
      if (c.size >= u) {
        var t = c.values().next().value;
        t != null && c.delete(t);
      }
      return (c.add(e), !0);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "utility_payment_reminder_m1_logging_enabled",
            )
          ) {
            var i = t.safe();
            if (
              !(
                i.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                i.type !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
              )
            ) {
              var l = o(
                "WAWebPaymentReminder",
              ).getSmartHydratedPaymentReminderInfo(i);
              if (l != null) {
                var u = o("WAWebMsgGetters").getId(t).toString(),
                  m =
                    a ===
                    o("WAWebPaymentReminderLoggerLazy")
                      .PaymentReminderActionType.MESSAGE_RECEIVE;
                if (!(m && !d(u)))
                  try {
                    var p,
                      f,
                      g = o("WAWebFrontendMsgGetters").getChat(t),
                      h = o("WAWebContactCollection").ContactCollection.get(
                        g.id,
                      ),
                      y =
                        h != null && o("WAWebContactGetters").getIsBusiness(h),
                      C = _(
                        y,
                        h != null &&
                          o("WAWebContactGetters").getIsEnterprise(h),
                      ),
                      b = g.archive
                        ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE
                            .ARCHIVED
                        : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE
                            .INBOX,
                      v =
                        o("WAWebChatGetters").getMuteExpiration(g) > Date.now(),
                      S =
                        h != null &&
                        o("WAWebFrontendContactGetters").getIsMyContact(h),
                      R = Date.now(),
                      L = Math.round(
                        (R - o("WAWebMsgGetters").getT(t) * 1e3) / 1e3,
                      ),
                      E = o("WAWebChatGetters").getId(g).toString(),
                      k = yield (s || (s = n("Promise"))).all([
                        o("WAWebChatThreadLogging").getMessageIDHMAC(u),
                        o("WAWebChatThreadLogging").getChatThreadIDHMAC(E),
                      ]),
                      I = k[0],
                      T = k[1],
                      D = o("WAWebMsgGetters").getClientReceivedTsMillis(t),
                      x = D != null ? Math.round((R - D) / 1e3) : void 0,
                      $ =
                        o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .readReceipts !== "none";
                    (new (o(
                      "WAWebQbmPaymentReminderInteractionWamEvent",
                    ).QbmPaymentReminderInteractionWamEvent)({
                      actionTypePaymentReminder: a,
                      chatsFolderType: b,
                      contactType: C,
                      deltaTime: L,
                      deltaTimeReceived: x,
                      isBizIntent: y,
                      isInsubContact: S,
                      isMuted: v,
                      isPaymentOverdue: l.isOverdue,
                      messageIdHmac: I != null ? I : void 0,
                      readReceiptsEnabled: $,
                      threadIdHmac: T != null ? T : void 0,
                      unifiedSessionId:
                        (p = o(
                          "WAWebUnifiedSession",
                        ).UnifiedSessionManager.getSessionId()) != null
                          ? p
                          : void 0,
                    }).commit(),
                      new (o(
                        "WAWebBusinessTemplatePaymentReminderWamEvent",
                      ).BusinessTemplatePaymentReminderWamEvent)({
                        actionTypePaymentReminder: a,
                        businessJid: o(
                          "WAWebUtilsPnhSmbLoggingHelper",
                        ).jidToPnString(o("WAWebChatGetters").getId(g)),
                        chatsFolderType: b,
                        contactType: C,
                        isBizIntent: y,
                        isInsubContact: S,
                        isMuted: v,
                        isPaymentOverdue: l.isOverdue,
                        readReceiptsEnabled: $,
                        templateId: (f = t.templateId) != null ? f : void 0,
                      }).commit());
                  } catch (t) {
                    (m && c.delete(u),
                      o("WALogger")
                        .WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[payment-reminder] interaction logging failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t))
                        .sendLogs(
                          "payment-reminder-interaction-logging-failed",
                        ));
                  }
              }
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return t
        ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
        : e
          ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
          : o("WAWebWamEnumContactType").CONTACT_TYPE.CONSUMER;
    }
    l.logPaymentReminderInteraction = m;
  },
  98,
);
