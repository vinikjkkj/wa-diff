__d(
  "WAWebQbmMessageReadLogEvent",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
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
        r = e.readSource;
      o("WAWebABProps").getABPropConfigValue(
        "web_biz_quality_telemetry_message_reads_enabled",
      ) &&
        new (o("WAWebQBMLoggerBuilder").QBMLoggerBuilder)(n, t)
          .addCommonFields()
          .addAttributionFields()
          .log(async function (e) {
            var a,
              i,
              l,
              s = t.contact,
              u = !!(
                (a = s.id) != null &&
                a.isUser() &&
                (((i = s.name) != null && i.length) || s.isUsernameContact)
              ),
              c =
                o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                  .readReceipts !== o("WAWebPrivacySettings").ALL_NONE.none,
              d = t.muteExpiration != null && t.muteExpiration > 0,
              m = await Promise.all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(n.id.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                  t.id.toString(),
                ),
              ]),
              p = m[0],
              _ = m[1];
            new (o("WAWebQbmMessageReadWamEvent").QbmMessageReadWamEvent)(
              babelHelpers.extends({}, e, {
                isInsubContact: u,
                isMuted: d,
                messageHasButton:
                  e.buttonValueJsonArray != null &&
                  e.buttonValueJsonArray !== "[]",
                messageHasUrl: ((l = e.urlUniqueCountInt) != null ? l : 0) > 0,
                messageIdHmac: p != null ? p : void 0,
                readReceiptsEnabled: c,
                readSource: r,
                threadIdHmac: _ != null ? _ : "",
              }),
            ).commit();
          });
    }
    l.logQbmMessageRead = e;
  },
  98,
);
