__d(
  "WAWebQbmMessageReadLogEvent",
  [
    "Promise",
    "WAWebABProps",
    "WAWebChatThreadLogging",
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
            i = t.readSource;
          o("WAWebABProps").getABPropConfigValue(
            "web_biz_quality_telemetry_message_reads_enabled",
          ) &&
            new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(a, r)
              .addCommonFields()
              .addAttributionFields()
              .log(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var l,
                        s,
                        u,
                        c = r.contact,
                        d = !!(
                          (l = c.id) != null &&
                          l.isUser() &&
                          (((s = c.name) != null && s.length) ||
                            c.isUsernameContact)
                        ),
                        m =
                          o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                            .readReceipts !==
                          o("WAWebPrivacySettings").ALL_NONE.none,
                        p = r.muteExpiration != null && r.muteExpiration > 0,
                        _ = yield (e || (e = n("Promise"))).all([
                          o("WAWebChatThreadLogging").getMessageIDHMAC(
                            a.id.toString(),
                          ),
                          o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                            r.id.toString(),
                          ),
                        ]),
                        f = _[0],
                        g = _[1];
                      new (o(
                        "WAWebQbmMessageReadWamEvent",
                      ).QbmMessageReadWamEvent)(
                        babelHelpers.extends({}, t, {
                          isInsubContact: d,
                          isMuted: p,
                          messageHasButton:
                            t.buttonValueJsonArray != null &&
                            t.buttonValueJsonArray !== "[]",
                          messageHasUrl:
                            ((u = t.urlUniqueCountInt) != null ? u : 0) > 0,
                          messageIdHmac: f != null ? f : void 0,
                          readReceiptsEnabled: m,
                          readSource: i,
                          threadIdHmac: g != null ? g : "",
                        }),
                      ).commit();
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
        })),
        u.apply(this, arguments)
      );
    }
    l.logQbmMessageRead = s;
  },
  98,
);
