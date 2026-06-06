__d(
  "WAWebQbmMessageLevelActionEvent",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
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
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(i, n)
          .addCommonFields()
          .addAttributionFields()
          .log(async function (t) {
            var l,
              s,
              u = o("WAWebFrontendContactGetters").getIsMyContact(n.contact),
              c = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(i.id.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                  n.id.toString(),
                ),
              ]),
              d = c[0],
              m = c[1],
              p = t.chatsFolderType,
              _ = t.deltaTime,
              f = t.hsmTagStr,
              g = t.messageTypeStr,
              h = t.qbmFlag,
              y = babelHelpers.objectWithoutPropertiesLoose(t, e);
            new (o(
              "WAWebQbmMessageLevelActionWamEvent",
            ).QbmMessageLevelActionWamEvent)(
              babelHelpers.extends({}, y, {
                contactType:
                  (l = y.contactType) != null
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
          });
    }
    l.logQbmMessageLevelAction = s;
  },
  98,
);
