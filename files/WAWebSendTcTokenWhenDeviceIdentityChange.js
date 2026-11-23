__d(
  "WAWebSendTcTokenWhenDeviceIdentityChange",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetChatRecordByAccountLid",
    "WAWebLidMigrationUtils",
    "WAWebSetPrivacyTokensJob",
    "WAWebTrustedContactsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n,
        r = o("WAWebLidMigrationUtils").toUserLid(t);
      if (
        (r != null &&
          (n = (
            await o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(
              r,
            )
          )[0]),
        n != null)
      ) {
        var a = n.tcTokenSenderTimestamp;
        if (
          a != null &&
          !o("WAWebTrustedContactsUtils").isTokenExpired(
            a,
            o("WAWebTrustedContactsUtils").TcTokenMode.Sender,
          )
        )
          try {
            var i;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "lid_trusted_token_issue_to_lid",
              )
            ) {
              var l;
              i = (l = o("WAWebLidMigrationUtils").toLid(t)) != null ? l : t;
            } else {
              var s;
              i = (s = o("WAWebLidMigrationUtils").toPn(t)) != null ? s : t;
            }
            await o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
              i,
              [o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact],
              o("WATimeUtils").castToUnixTime(a),
            );
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendTcTokenWhenDeviceIdentityChange failed - ",
                    "",
                  ])),
                t,
              )
              .verbose()
              .sendLogs("send-tc-token-device-identity-change-failed");
          }
      }
    }
    l.sendTcTokenWhenDeviceIdentityChange = s;
  },
  98,
);
