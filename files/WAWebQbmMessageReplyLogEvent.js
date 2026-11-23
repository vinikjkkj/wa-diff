__d(
  "WAWebQbmMessageReplyLogEvent",
  [
    "WAWebABProps",
    "WAWebBizMessageAttributionFields",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebInAppSignupInfoStore",
    "WAWebMsgGetters",
    "WAWebMuteGetters",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebPrivacySettings",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageReplyWamEvent",
    "WAWebQbmThreadContext",
    "WAWebQbmThreadMsgs",
    "WAWebQuotedMsgModelUtils",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n,
        r = e.chat,
        a = e.reactionParentMsg,
        i = e.replyMessageType,
        l = e.replyMsg;
      if (!(r.contact.isBusiness !== !0 && r.contact.isEnterprise !== !0)) {
        var u =
            t != null
              ? t
              : await o("WAWebQbmThreadMsgs").findLastIncomingMsgInStorage(r),
          c = (n = u != null ? u : l) != null ? n : a;
        if (c != null) {
          o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) &&
            (await o(
              "WAWebInAppSignupInfoStore",
            ).ensureInAppSignupInfoHydrated());
          var d = new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(c, r);
          (u != null
            ? d.addCommonFields().addAttributionFields()
            : d.addChatFields(),
            d.addIasFields().log(async function (e) {
              var t,
                n =
                  l != null
                    ? (t = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(l)) ==
                      null
                      ? void 0
                      : t.unsafe()
                    : null,
                a = await Promise.all([
                  l != null
                    ? o("WAWebChatThreadLogging").getMessageIDHMAC(
                        l.id.toString(),
                      )
                    : null,
                  o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                    r.id.toString(),
                  ),
                  o("WAWebP2PPillsThreadOriginStore").getPillQbmFields(
                    r.accountLid,
                  ),
                  o("WAWebQbmThreadContext").getThreadCreationTime(
                    r,
                    l == null ? void 0 : l.t,
                  ),
                ]),
                u = a[0],
                c = a[1],
                m = a[2],
                p = a[3];
              new (o("WAWebQbmMessageReplyWamEvent").QbmMessageReplyWamEvent)(
                babelHelpers.extends({}, e, m, s(d, n), {
                  isInsubContact: o(
                    "WAWebFrontendContactGetters",
                  ).getIsMyContact(r.contact),
                  isMuted: o("WAWebMuteGetters").getIsMuted(r.mute),
                  messageHasButton:
                    e.buttonValueJsonArray != null &&
                    e.buttonValueJsonArray !== "[]",
                  messageHasUrl:
                    l != null &&
                    o(
                      "WAWebBizMessageAttributionFields",
                    ).extractBizMessageAttribution(l).urlUniqueCountInt > 0,
                  messageIdHmac: u != null ? u : void 0,
                  readReceiptsEnabled:
                    o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                      .readReceipts !== o("WAWebPrivacySettings").ALL_NONE.none,
                  replyMessageType: i,
                  threadCreationTime: p != null ? p : void 0,
                  threadIdHmac: c != null ? c : void 0,
                }),
              ).commit();
            }));
        }
      }
    }
    function s(e, t) {
      var n;
      return t == null
        ? {}
        : {
            quotedDeltaTime: e.getDeltaTimeSeconds(t.t),
            quotedDeltaTimeReceived: e.getDeltaTimeFromMillis(
              t.clientReceivedTsMillis,
            ),
            quotedMessageHsmTagStr:
              (n = o("WAWebMsgGetters").getHsmTag(t)) != null ? n : void 0,
            quotedMessageQbmFlag: new (o(
              "WAWebQBMLoggerBuilder",
            ).QBMLoggerBuilder)(t, e.chat).getQbmFlag(),
            quotedMessageType: t.type,
          };
    }
    l.logQbmMessageReply = e;
  },
  98,
);
