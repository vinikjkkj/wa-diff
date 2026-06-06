__d(
  "WAWebUpdateEphemeralSettingChatAction",
  [
    "WALogger",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralGenerateSystemMessage",
    "WAWebEphemeralityTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[DMResolve] updateChatEphemeralSettings",
          ])),
      ),
        await o("WAWebDBUpdateChatTable").updateChatTable(
          t.id,
          babelHelpers.extends({}, n, {
            disappearingModeInitiator: n.disappearingModeInitiator,
            disappearingModeTrigger:
              n.disappearingModeTrigger != null
                ? n.disappearingModeTrigger
                : null,
          }),
        ),
        t.set(n),
        o("WAWebDBChatEphemeralExemptionData").updateEphemeralDurationCache(
          t.id,
          t.ephemeralDuration,
        ));
    }
    async function u(e) {
      (await s(e, {
        ephemeralDuration: 0,
        ephemeralSettingTimestamp: Date.now(),
        disappearingModeInitiator: o("WAWebEphemeralityTypes")
          .DisappearingModeInitiator.ChangedInChat,
      }),
        await o(
          "WAWebEphemeralGenerateSystemMessage",
        ).generateEphemeralUnsupportedNotificationTemplateSystemMessage(e));
    }
    ((l.updateChatEphemeralSettings = s),
      (l.setChatAsEphemeralityUnsupported = u));
  },
  98,
);
