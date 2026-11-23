__d(
  "WAWebSetDisappearingModePrivacyAction",
  [
    "WATimeUtils",
    "WAWebBackendRuntime",
    "WAWebDisappearingModeService",
    "WAWebSetDisappearingModeJob",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebDisappearingModeService").DisappearingModeService,
            ).setDisappearingMode
          : o("WAWebSetDisappearingModeJob").setDisappearingMode
      )(e);
      var t = o("WAWebUserUtils").getMeUserOrThrow();
      await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebDisappearingModeService").DisappearingModeService,
            ).updateDisappearingModeForContact
          : o("WAWebUpdateDisappearingModeForContact")
              .updateDisappearingModeForContact
      )({
        contactId: t,
        newDuration: e,
        newSettingTimestamp: o("WATimeUtils").unixTime(),
      });
    }
    l.setDisappearingMode = e;
  },
  98,
);
