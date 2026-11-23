__d(
  "WAWebUpdateEphemeralSettingTimestampChatAction",
  [
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebChatGetters",
    "WAWebChatStoreService",
    "WAWebDBUpdateChatTable",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
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
        (await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebChatStoreService").ChatStoreService,
              ).updateChatTable
            : o("WAWebDBUpdateChatTable").updateChatTable
        )(t.id, { ephemeralSettingTimestamp: n }),
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
    }
    l.default = d;
  },
  98,
);
