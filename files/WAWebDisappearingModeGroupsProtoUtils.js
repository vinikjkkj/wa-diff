__d(
  "WAWebDisappearingModeGroupsProtoUtils",
  [
    "WAWebBackendApi",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEphemeralityTypes",
    "cr:13547",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:13547")) != null ? e : {},
      u = s.syncDisappearingModeTriggerToDB;
    async function c(e, t) {
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t),
        r = n == null ? void 0 : n.disappearingModeInitiatedByMe;
      if (
        (n != null &&
          e != null &&
          n.disappearingModeTrigger ===
            o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups &&
          e !==
            o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups &&
          (u == null || u(t, e),
          o("WAWebBackendApi").frontendFireAndForget(
            "syncEphemeralTriggerCollectionForGroup",
            { chatId: t, trigger: e },
          )),
        r != null)
      )
        return { disappearingModeTrigger: e, disappearingModeInitiatedByMe: r };
    }
    l.updateDisappearingModeForGroups = c;
  },
  98,
);
