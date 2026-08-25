__d(
  "WAWebValidateLidChat",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebApiContact",
    "WAWebCurrentUser",
    "WAWebLidMigrationLogging",
    "WAWebLidMigrationUtils",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      try {
        o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id) &&
          t.accountLid == null &&
          (o("WAWebLidMigrationLogging").logLidMetadata(),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat model missing account_lid. isEmp: ",
                  ", id: ",
                  "",
                ])),
              o("WAWebCurrentUser").isEmployee(),
              t.id.toLogString(),
            )
            .sendLogs("chat-model-without-account-lid")
            .tags("missing-lid"));
        var n = t.accountLid;
        if (n != null && !n.isLid()) {
          var r = o("WAWebApiContact").getCurrentLid(n),
            a = r == null || !r.isLid();
          (o("WAWebLidMigrationLogging").logLidMetadata(),
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "non-Lid accountLid, logout. id: ",
                    ", accLid: ",
                    ", curLid: ",
                    "",
                  ])),
                t.id.toLogString(),
                n.toLogString(),
                r == null ? void 0 : r.toLogString(),
              )
              .sendLogs(
                a
                  ? "account-lid-not-lid-unrecoverable"
                  : "account-lid-not-lid-recoverable",
              )
              .tags("account-lid-not-lid"),
            o("WAPromiseDelays")
              .delayMs(5e3)
              .then(function () {
                return o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason
                    .ClientVersionOutdated,
                );
              }));
        }
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebChatModel: failed to validate lid chat: ",
              "",
            ])),
          e,
        );
      }
    }
    l.validateLidChat = c;
  },
  98,
);
