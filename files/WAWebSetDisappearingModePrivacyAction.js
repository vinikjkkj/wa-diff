__d(
  "WAWebSetDisappearingModePrivacyAction",
  [
    "WATimeUtils",
    "WAWebBackendRuntime",
    "WAWebDisappearingModeService",
    "WAWebSetDisappearingModeJob",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebDisappearingModeService").DisappearingModeService,
                ).setDisappearingMode
              : o("WAWebSetDisappearingModeJob").setDisappearingMode
          )(e);
          var t = o("WAWebUserUtils").getMeUserOrThrow();
          yield (
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
        })),
        s.apply(this, arguments)
      );
    }
    l.setDisappearingMode = e;
  },
  98,
);
