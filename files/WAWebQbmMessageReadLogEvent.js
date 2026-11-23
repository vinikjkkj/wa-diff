__d(
  "WAWebQbmMessageReadLogEvent",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebInAppSignupInfoStore",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebPrivacySettings",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmMessageReadWamEvent",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.chat,
        n = e.msg,
        r = e.readSource,
        a = o("WAWebQBMLoggerBuilder").getQbmMessageTypeStrForLogging(n);
      o("WAWebQBMLoggerBuilder").isQbmMessageTypeLoggingEnabled(a) &&
        (o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        ) &&
          (await o(
            "WAWebInAppSignupInfoStore",
          ).ensureInAppSignupInfoHydrated()),
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(n, t)
          .addCommonFields()
          .addAttributionFields()
          .addIasFields()
          .log(async function (e) {
            var i,
              l,
              s,
              u = t.contact,
              c = !!(
                (i = u.id) != null &&
                i.isUser() &&
                (((l = u.name) != null && l.length) || u.isUsernameContact)
              ),
              d =
                o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                  .readReceipts !== o("WAWebPrivacySettings").ALL_NONE.none,
              m = t.muteExpiration != null && t.muteExpiration > 0,
              p = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(n.id.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                  t.id.toString(),
                ),
                o("WAWebP2PPillsThreadOriginStore").getPillQbmFields(
                  t.accountLid,
                ),
              ]),
              _ = p[0],
              f = p[1],
              g = p[2];
            new (o("WAWebQbmMessageReadWamEvent").QbmMessageReadWamEvent)(
              babelHelpers.extends({}, e, g, {
                messageTypeStr: a,
                isInsubContact: c,
                isMuted: m,
                messageHasButton:
                  e.buttonValueJsonArray != null &&
                  e.buttonValueJsonArray !== "[]",
                messageHasUrl: ((s = e.urlUniqueCountInt) != null ? s : 0) > 0,
                messageIdHmac: _ != null ? _ : void 0,
                readReceiptsEnabled: d,
                readSource: r,
                threadIdHmac: f != null ? f : "",
              }),
            ).commit();
          }));
    }
    l.logQbmMessageRead = e;
  },
  98,
);
