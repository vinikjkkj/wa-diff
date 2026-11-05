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
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 100,
      p = new Set(),
      _ = !1;
    function f(e) {
      return e >= m;
    }
    function g(e) {
      if (p.has(e)) return !1;
      if (p.size >= m) {
        var t = p.values().next().value;
        t != null && p.delete(t);
      }
      return (p.add(e), !0);
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
              var i = o(
                "WAWebPaymentReminder",
              ).getSmartHydratedPaymentReminderInfo(a);
              if (i != null) {
                var l = o("WAWebMsgGetters").getId(t).toString(),
                  c =
                    n ===
                    o("WAWebPaymentReminderLoggerLazy")
                      .PaymentReminderActionType.MESSAGE_RECEIVE;
                if (!(c && !g(l))) {
                  var d = !1;
                  try {
                    c &&
                      f(p.size) &&
                      !_ &&
                      ((_ = !0),
                      o("WALogger")
                        .LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[payment-reminder] receive dedupe cache reached ",
                              " entries",
                            ])),
                          m,
                        )
                        .sendLogs(
                          "payment-reminder-receive-dedupe-cache-full",
                        ));
                    var h = o("WAWebFrontendMsgGetters").getChat(t),
                      y = o("WAWebContactCollection").ContactCollection.get(
                        h.id,
                      ),
                      b =
                        y != null && o("WAWebContactGetters").getIsBusiness(y),
                      S = v(
                        b,
                        y != null &&
                          o("WAWebContactGetters").getIsEnterprise(y),
                      ),
                      R = h.archive
                        ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE
                            .ARCHIVED
                        : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE
                            .INBOX,
                      L =
                        o("WAWebChatGetters").getMuteExpiration(h) > Date.now(),
                      E =
                        y != null &&
                        o("WAWebFrontendContactGetters").getIsMyContact(y),
                      k =
                        o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                          .readReceipts !== "none",
                      I = {
                        actionTypePaymentReminder: n,
                        chatsFolderType: R,
                        contactType: S,
                        isBizIntent: b,
                        isInsubContact: E,
                        isMuted: L,
                        isPaymentOverdue: i.isOverdue,
                        readReceiptsEnabled: k,
                      };
                    d = yield C(t, l, h, I);
                    try {
                      var T, D;
                      (new (o(
                        "WAWebBusinessTemplatePaymentReminderWamEvent",
                      ).BusinessTemplatePaymentReminderWamEvent)(
                        babelHelpers.extends({}, I, {
                          businessJid:
                            (T = h.accountLid) == null ? void 0 : T.toString(),
                          templateId: (D = t.templateId) != null ? D : void 0,
                        }),
                      ).commit(),
                        (d = !0));
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
                    c && !d && p.delete(l);
                  }
                }
              }
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            try {
              var l,
                s = Date.now(),
                u = Math.round((s - o("WAWebMsgGetters").getT(e) * 1e3) / 1e3),
                m = yield (d || (d = n("Promise"))).all([
                  o("WAWebChatThreadLogging").getMessageIDHMAC(t),
                  o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                    o("WAWebChatGetters").getId(a).toString(),
                  ),
                ]),
                p = m[0],
                _ = m[1],
                f = o("WAWebMsgGetters").getClientReceivedTsMillis(e),
                g = f != null ? Math.round((s - f) / 1e3) : void 0;
              return (
                new (o(
                  "WAWebQbmPaymentReminderInteractionWamEvent",
                ).QbmPaymentReminderInteractionWamEvent)(
                  babelHelpers.extends({}, i, {
                    deltaTime: u,
                    deltaTimeReceived: g,
                    messageIdHmac: p != null ? p : void 0,
                    threadIdHmac: _ != null ? _ : void 0,
                    unifiedSessionId:
                      (l = o(
                        "WAWebUnifiedSession",
                      ).UnifiedSessionManager.getSessionId()) != null
                        ? l
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
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return t
        ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
        : e
          ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
          : o("WAWebWamEnumContactType").CONTACT_TYPE.CONSUMER;
    }
    ((l.hasReceiveCacheReachedCapacity = f),
      (l.logPaymentReminderInteraction = h));
  },
  98,
);
