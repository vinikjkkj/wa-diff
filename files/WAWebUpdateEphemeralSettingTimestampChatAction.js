__d(
  "WAWebUpdateEphemeralSettingTimestampChatAction",
  ["WALogger", "WAWebChatGetters", "WAWebDBUpdateChatTable"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
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
      o("WAWebDBUpdateChatTable")
        .updateChatTable(t.id, { ephemeralSettingTimestamp: n })
        .then(function () {
          ((t.ephemeralSettingTimestamp = n),
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
        });
    }
    l.default = u;
  },
  98,
);
