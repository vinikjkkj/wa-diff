__d(
  "WAWebPaymentReminderLogger",
  [
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
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 100,
      m = new Set(),
      p = !1;
    function _(e) {
      return e >= d;
    }
    function f(e) {
      if (m.has(e)) return !1;
      if (m.size >= d) {
        var t = m.values().next().value;
        t != null && m.delete(t);
      }
      return (m.add(e), !0);
    }
    async function g(t, n) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "utility_payment_reminder_m1_logging_enabled",
        )
      ) {
        var a = t.safe();
        if (
          !(
            a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            a.type !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
          )
        ) {
          var i = o("WAWebPaymentReminder").getSmartHydratedPaymentReminderInfo(
            a,
          );
          if (i != null) {
            var l = o("WAWebMsgGetters").getId(t).toString(),
              c =
                n ===
                o("WAWebPaymentReminderLoggerLazy").PaymentReminderActionType
                  .MESSAGE_RECEIVE;
            if (!(c && !f(l))) {
              var g = !1;
              try {
                c &&
                  _(m.size) &&
                  !p &&
                  ((p = !0),
                  o("WALogger")
                    .LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[payment-reminder] receive dedupe cache reached ",
                          " entries",
                        ])),
                      d,
                    )
                    .sendLogs("payment-reminder-receive-dedupe-cache-full"));
                var C = o("WAWebFrontendMsgGetters").getChat(t),
                  b = o("WAWebContactCollection").ContactCollection.get(C.id),
                  v = b != null && o("WAWebContactGetters").getIsBusiness(b),
                  S = y(
                    v,
                    b != null && o("WAWebContactGetters").getIsEnterprise(b),
                  ),
                  R = C.archive
                    ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE
                        .ARCHIVED
                    : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
                  L = o("WAWebChatGetters").getMuteExpiration(C) > Date.now(),
                  E =
                    b != null &&
                    o("WAWebFrontendContactGetters").getIsMyContact(b),
                  k =
                    o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                      .readReceipts !== "none",
                  I = {
                    actionTypePaymentReminder: n,
                    chatsFolderType: R,
                    contactType: S,
                    isBizIntent: v,
                    isInsubContact: E,
                    isMuted: L,
                    isPaymentOverdue: i.isOverdue,
                    readReceiptsEnabled: k,
                  };
                g = await h(t, l, C, I);
                try {
                  var T, D;
                  (new (o(
                    "WAWebBusinessTemplatePaymentReminderWamEvent",
                  ).BusinessTemplatePaymentReminderWamEvent)(
                    babelHelpers.extends({}, I, {
                      businessJid:
                        (T = C.accountLid) == null ? void 0 : T.toString(),
                      templateId: (D = t.templateId) != null ? D : void 0,
                    }),
                  ).commit(),
                    (g = !0));
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[payment-reminder] BusinessTemplate event commit failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs(
                      "payment-reminder-business-template-logging-failed",
                    );
                }
              } catch (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[payment-reminder] interaction logging failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("payment-reminder-interaction-logging-failed");
              } finally {
                c && !g && m.delete(l);
              }
            }
          }
        }
      }
    }
    async function h(e, t, n, a) {
      try {
        var i,
          l = Date.now(),
          s = Math.round((l - o("WAWebMsgGetters").getT(e) * 1e3) / 1e3),
          u = await Promise.all([
            o("WAWebChatThreadLogging").getMessageIDHMAC(t),
            o("WAWebChatThreadLogging").getChatThreadIDHMAC(
              o("WAWebChatGetters").getId(n).toString(),
            ),
          ]),
          d = u[0],
          m = u[1],
          p = o("WAWebMsgGetters").getClientReceivedTsMillis(e),
          _ = p != null ? Math.round((l - p) / 1e3) : void 0;
        return (
          new (o(
            "WAWebQbmPaymentReminderInteractionWamEvent",
          ).QbmPaymentReminderInteractionWamEvent)(
            babelHelpers.extends({}, a, {
              deltaTime: s,
              deltaTimeReceived: _,
              messageIdHmac: d != null ? d : void 0,
              threadIdHmac: m != null ? m : void 0,
              unifiedSessionId:
                (i = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? i
                  : void 0,
            }),
          ).commit(),
          !0
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[payment-reminder] QBM event commit failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("payment-reminder-qbm-logging-failed"),
          !1
        );
      }
    }
    function y(e, t) {
      return t
        ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
        : e
          ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
          : o("WAWebWamEnumContactType").CONTACT_TYPE.CONSUMER;
    }
    ((l.hasReceiveCacheReachedCapacity = _),
      (l.logPaymentReminderInteraction = g));
  },
  98,
);
