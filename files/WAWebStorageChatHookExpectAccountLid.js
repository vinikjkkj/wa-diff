__d(
  "WAWebStorageChatHookExpectAccountLid",
  [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = {
        type: "creating",
        callback: function (n, a) {
          if (
            r("WAWebWid").isRegularUserNoImply(a.id) &&
            (o("WAWebLidMigrationUtils").toLid(
              o("WAWebWidFactory").createWid(a.id),
            ) == null &&
              (o("WAWebLidMigrationUtils").logLidMetadata(),
              o("WAWebCurrentUser").isEmployee() &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "lid mapping is missing for ",
                      "",
                    ])),
                  a.id,
                ),
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Lid mapping is missing during creation",
                      ])),
                  )
                  .sendLogs("lid-mapping-missing-during-chat-creation")),
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Lid mapping is missing for chat creation",
                  ])),
              )),
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() && a.accountLid == null)
          ) {
            o("WAWebLidMigrationUtils").logLidMetadata();
            var t = o("WAWebWidFactory").createWid(a.id);
            throw (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "chat insert failed: ",
                    " no accountLid (migrated) emp=",
                    " keys=",
                    "",
                  ])),
                t.toLogString(),
                o("WAWebCurrentUser").isEmployee(),
                Object.keys(a),
              ),
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Lid is missing in chat table",
                      ])),
                  )
                  .sendLogs("lid-missing-migrated-client"),
              r("err")("Lid is missing in chat table")
            );
          }
        },
      };
    function p() {
      o("WAWebSchemaChat").getChatTable().addHook(m);
    }
    l.initializeHook = p;
  },
  98,
);
