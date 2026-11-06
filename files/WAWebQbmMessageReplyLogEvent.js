__d(
  "WAWebQbmMessageReplyLogEvent",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i = t.chat,
            l = t.reactionParentMsg,
            s = t.replyMessageType,
            u = t.replyMsg;
          if (!(i.contact.isBusiness !== !0 && i.contact.isEnterprise !== !0)) {
            var d =
                r != null
                  ? r
                  : yield o("WAWebQbmThreadMsgs").findLastIncomingMsgInStorage(
                      i,
                    ),
              m = (a = d != null ? d : u) != null ? a : l;
            if (m != null) {
              o("WAWebABProps").getABPropConfigValue(
                "inapp_signup_m1_logging_enabled",
              ) &&
                (yield o(
                  "WAWebInAppSignupInfoStore",
                ).ensureInAppSignupInfoHydrated());
              var p = new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(m, i);
              (d != null
                ? p.addCommonFields().addAttributionFields()
                : p.addChatFields(),
                p.addIasFields().log(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var r,
                          a =
                            u != null
                              ? (r = o(
                                  "WAWebQuotedMsgModelUtils",
                                ).getQuotedMsgObj(u)) == null
                                ? void 0
                                : r.unsafe()
                              : null,
                          l = yield (e || (e = n("Promise"))).all([
                            u != null
                              ? o("WAWebChatThreadLogging").getMessageIDHMAC(
                                  u.id.toString(),
                                )
                              : null,
                            o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                              i.id.toString(),
                            ),
                            o(
                              "WAWebP2PPillsThreadOriginStore",
                            ).getPillQbmFields(i.accountLid),
                            o("WAWebQbmThreadContext").getThreadCreationTime(
                              i,
                              u == null ? void 0 : u.t,
                            ),
                          ]),
                          d = l[0],
                          m = l[1],
                          _ = l[2],
                          f = l[3];
                        new (o(
                          "WAWebQbmMessageReplyWamEvent",
                        ).QbmMessageReplyWamEvent)(
                          babelHelpers.extends({}, t, _, c(p, a), {
                            isInsubContact: o(
                              "WAWebFrontendContactGetters",
                            ).getIsMyContact(i.contact),
                            isMuted: o("WAWebMuteGetters").getIsMuted(i.mute),
                            messageHasButton:
                              t.buttonValueJsonArray != null &&
                              t.buttonValueJsonArray !== "[]",
                            messageHasUrl:
                              u != null &&
                              o(
                                "WAWebBizMessageAttributionFields",
                              ).extractBizMessageAttribution(u)
                                .urlUniqueCountInt > 0,
                            messageIdHmac: d != null ? d : void 0,
                            readReceiptsEnabled:
                              o(
                                "WAWebUserPrefsGeneral",
                              ).getUserPrivacySettings().readReceipts !==
                              o("WAWebPrivacySettings").ALL_NONE.none,
                            replyMessageType: s,
                            threadCreationTime: f != null ? f : void 0,
                            threadIdHmac: m != null ? m : void 0,
                          }),
                        ).commit();
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
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
    l.logQbmMessageReply = s;
  },
  98,
);
