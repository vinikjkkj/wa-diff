__d(
  "WAWebQbmMessageLevelActionEvent",
  [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFrontendContactGetters",
    "WAWebInAppSignupInfoStore",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageLevelActionWamEvent",
    "WAWebWamEnumContactType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "chatsFolderType",
        "deltaTime",
        "hsmTagStr",
        "messageTypeStr",
        "qbmFlag",
      ],
      s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.chat,
            a = t.messageActionEntryPoint,
            i = t.messageLevelAction,
            l = t.msg;
          o("WAWebABProps").getABPropConfigValue(
            "web_biz_quality_telemetry_message_level_actions_enabled",
          ) &&
            (o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
              (yield o(
                "WAWebInAppSignupInfoStore",
              ).ensureInAppSignupInfoHydrated()),
            new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(l, r)
              .addCommonFields()
              .addAttributionFields()
              .addIasFields()
              .log(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var u,
                        c,
                        d = o("WAWebFrontendContactGetters").getIsMyContact(
                          r.contact,
                        ),
                        m = yield (s || (s = n("Promise"))).all([
                          o("WAWebChatThreadLogging").getMessageIDHMAC(
                            l.id.toString(),
                          ),
                          o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                            r.id.toString(),
                          ),
                          o("WAWebP2PPillsThreadOriginStore").getPillQbmFields(
                            r.accountLid,
                          ),
                        ]),
                        p = m[0],
                        _ = m[1],
                        f = m[2],
                        g = t.chatsFolderType,
                        h = t.deltaTime,
                        y = t.hsmTagStr,
                        C = t.messageTypeStr,
                        b = t.qbmFlag,
                        v = babelHelpers.objectWithoutPropertiesLoose(t, e);
                      new (o(
                        "WAWebQbmMessageLevelActionWamEvent",
                      ).QbmMessageLevelActionWamEvent)(
                        babelHelpers.extends({}, v, f, {
                          contactType:
                            (u = v.contactType) != null
                              ? u
                              : o("WAWebWamEnumContactType").CONTACT_TYPE
                                  .CONSUMER,
                          messageActionEntryPoint: a,
                          messageLevelAction: i,
                          messageHasUrl:
                            ((c = t.urlUniqueCountInt) != null ? c : 0) > 0,
                          isInsubContact: d,
                          messageIdHmac: p != null ? p : void 0,
                          threadIdHmac: _ != null ? _ : "",
                        }),
                      ).commit();
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ));
        })),
        c.apply(this, arguments)
      );
    }
    l.logQbmMessageLevelAction = u;
  },
  98,
);
