__d(
  "WAWebSetDisappearingModePrivacyAction",
  [
    "WATimeUtils",
    "WAWebSetDisappearingModeJob",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSetDisappearingModeJob").setDisappearingMode(e);
          var t = o("WAWebUserPrefsMeUser").getMeUser();
          yield o(
            "WAWebUpdateDisappearingModeForContact",
          ).updateDisappearingModeForContact({
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
