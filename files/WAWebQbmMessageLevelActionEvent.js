__d(
  "WAWebQbmMessageLevelActionEvent",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebInAppSignupInfoStore",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageLevelActionWamEvent",
    "WAWebWamEnumContactType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "chatsFolderType",
      "deltaTime",
      "hsmTagStr",
      "messageTypeStr",
      "qbmFlag",
    ];
    async function s(t) {
      var n = t.chat,
        r = t.messageActionEntryPoint,
        a = t.messageLevelAction,
        i = t.msg;
      o("WAWebABProps").getABPropConfigValue(
        "web_biz_quality_telemetry_message_level_actions_enabled",
      ) &&
        (o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        ) &&
          (await o(
            "WAWebInAppSignupInfoStore",
          ).ensureInAppSignupInfoHydrated()),
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(i, n)
          .addCommonFields()
          .addAttributionFields()
          .addIasFields()
          .log(async function (t) {
            var l,
              s,
              u = o("WAWebFrontendContactGetters").getIsMyContact(n.contact),
              c = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(i.id.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                  n.id.toString(),
                ),
                o("WAWebP2PPillsThreadOriginStore").getPillQbmFields(
                  n.accountLid,
                ),
              ]),
              d = c[0],
              m = c[1],
              p = c[2],
              _ = t.chatsFolderType,
              f = t.deltaTime,
              g = t.hsmTagStr,
              h = t.messageTypeStr,
              y = t.qbmFlag,
              C = babelHelpers.objectWithoutPropertiesLoose(t, e);
            new (o(
              "WAWebQbmMessageLevelActionWamEvent",
            ).QbmMessageLevelActionWamEvent)(
              babelHelpers.extends({}, C, p, {
                contactType:
                  (l = C.contactType) != null
                    ? l
                    : o("WAWebWamEnumContactType").CONTACT_TYPE.CONSUMER,
                messageActionEntryPoint: r,
                messageLevelAction: a,
                messageHasUrl: ((s = t.urlUniqueCountInt) != null ? s : 0) > 0,
                isInsubContact: u,
                messageIdHmac: d != null ? d : void 0,
                threadIdHmac: m != null ? m : "",
              }),
            ).commit();
          }));
    }
    l.logQbmMessageLevelAction = s;
  },
  98,
);
