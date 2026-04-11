__d(
  "WAWebSendTcTokenWhenDeviceIdentityChange",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebSetPrivacyTokensJob",
    "WAWebTrustedContactsUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (
            o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          ) {
            var r = o("WAWebLidMigrationUtils").toUserLid(t);
            r != null &&
              (n = (yield o("WAWebApiChat").getChatRecordByAccountLid(r))[0]);
          } else n = yield o("WAWebApiChatCommon").getChatRecord(t);
          if (n != null) {
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
                  i =
                    (l = o("WAWebLidMigrationUtils").toLid(t)) != null ? l : t;
                } else {
                  var s;
                  i = (s = o("WAWebLidMigrationUtils").toPn(t)) != null ? s : t;
                }
                yield o("WAWebSetPrivacyTokensJob").issuePrivacyToken(
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
        })),
        u.apply(this, arguments)
      );
    }
    l.sendTcTokenWhenDeviceIdentityChange = s;
  },
  98,
);
