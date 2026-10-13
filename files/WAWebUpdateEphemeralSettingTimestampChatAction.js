__d(
  "WAWebUpdateEphemeralSettingTimestampChatAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebDBUpdateChatTable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (o("WAWebChatGetters").getIsGroup(t)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updateEphemeralSettingTimestamp: not for group ",
                    "",
                  ])),
                t.id.toLogString(),
              )
              .sendLogs("update-ephemeral-setting-timestamp");
            return;
          }
          try {
            (yield o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
              ephemeralSettingTimestamp: n,
            }),
              (t.ephemeralSettingTimestamp = n),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateEphemeralSettingTimestamp id=",
                    " ts=",
                    "",
                  ])),
                t.id.toLogString(),
                n,
              ));
          } catch (e) {
            throw (
              e instanceof Error
                ? o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "updateEphemeralSettingTimestamp: failed id=",
                          "",
                        ])),
                      t.id.toLogString(),
                    )
                    .catching(e)
                    .sendLogs("update-ephemeral-setting-timestamp")
                : o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "updateEphemeralSettingTimestamp: failed id=",
                          "",
                        ])),
                      t.id.toLogString(),
                    )
                    .sendLogs("update-ephemeral-setting-timestamp"),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
