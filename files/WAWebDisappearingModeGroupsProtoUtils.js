__d(
  "WAWebDisappearingModeGroupsProtoUtils",
  [
    "WAWebBackendApi",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEphemeralityTypes",
    "asyncToGeneratorRuntime",
    "cr:13547",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:13547")) != null ? e : {},
      u = s.syncDisappearingModeTriggerToDB;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t),
            r = n == null ? void 0 : n.disappearingModeInitiatedByMe;
          if (
            (n != null &&
              e != null &&
              n.disappearingModeTrigger ===
                o("WAWebEphemeralityTypes").DisappearingModeTrigger
                  .UnknownGroups &&
              e !==
                o("WAWebEphemeralityTypes").DisappearingModeTrigger
                  .UnknownGroups &&
              (u == null || u(t, e),
              o("WAWebBackendApi").frontendFireAndForget(
                "syncEphemeralTriggerCollectionForGroup",
                { chatId: t, trigger: e },
              )),
            r != null)
          )
            return {
              disappearingModeTrigger: e,
              disappearingModeInitiatedByMe: r,
            };
        })),
        d.apply(this, arguments)
      );
    }
    l.updateDisappearingModeForGroups = c;
  },
  98,
);
