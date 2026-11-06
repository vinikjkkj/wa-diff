__d(
  "WAWebQbmMessageReadLogEvent",
  [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebInAppSignupInfoStore",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebPrivacySettings",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageReadWamEvent",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.chat,
            a = t.msg,
            i = t.readSource,
            l = o("WAWebQBMLoggerBuilder").getQbmMessageTypeStrForLogging(a);
          l != null &&
            (o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
              (yield o(
                "WAWebInAppSignupInfoStore",
              ).ensureInAppSignupInfoHydrated()),
            new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(a, r)
              .addCommonFields()
              .addAttributionFields()
              .addIasFields()
              .log(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var s,
                        u,
                        c,
                        d = r.contact,
                        m = !!(
                          (s = d.id) != null &&
                          s.isUser() &&
                          (((u = d.name) != null && u.length) ||
                            d.isUsernameContact)
                        ),
                        p =
                          o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                            .readReceipts !==
                          o("WAWebPrivacySettings").ALL_NONE.none,
                        _ = r.muteExpiration != null && r.muteExpiration > 0,
                        f = yield (e || (e = n("Promise"))).all([
                          o("WAWebChatThreadLogging").getMessageIDHMAC(
                            a.id.toString(),
                          ),
                          o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                            r.id.toString(),
                          ),
                          o("WAWebP2PPillsThreadOriginStore").getPillQbmFields(
                            r.accountLid,
                          ),
                        ]),
                        g = f[0],
                        h = f[1],
                        y = f[2];
                      new (o(
                        "WAWebQbmMessageReadWamEvent",
                      ).QbmMessageReadWamEvent)(
                        babelHelpers.extends({}, t, y, {
                          messageTypeStr: l,
                          isInsubContact: m,
                          isMuted: _,
                          messageHasButton:
                            t.buttonValueJsonArray != null &&
                            t.buttonValueJsonArray !== "[]",
                          messageHasUrl:
                            ((c = t.urlUniqueCountInt) != null ? c : 0) > 0,
                          messageIdHmac: g != null ? g : void 0,
                          readReceiptsEnabled: p,
                          readSource: i,
                          threadIdHmac: h != null ? h : "",
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
        u.apply(this, arguments)
      );
    }
    l.logQbmMessageRead = s;
  },
  98,
);
