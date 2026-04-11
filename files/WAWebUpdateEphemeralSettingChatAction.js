__d(
  "WAWebUpdateEphemeralSettingChatAction",
  [
    "WALogger",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralGenerateSystemMessage",
    "WAWebEphemeralityTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] updateChatEphemeralSettings",
              ])),
          ),
            yield o("WAWebDBUpdateChatTable").updateChatTable(
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield s(e, {
            ephemeralDuration: 0,
            ephemeralSettingTimestamp: Date.now(),
            disappearingModeInitiator: o("WAWebEphemeralityTypes")
              .DisappearingModeInitiator.ChangedInChat,
          }),
            yield o(
              "WAWebEphemeralGenerateSystemMessage",
            ).generateEphemeralUnsupportedNotificationTemplateSystemMessage(e));
        })),
        d.apply(this, arguments)
      );
    }
    ((l.updateChatEphemeralSettings = s),
      (l.setChatAsEphemeralityUnsupported = c));
  },
  98,
);
