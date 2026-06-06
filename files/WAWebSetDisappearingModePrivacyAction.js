__d(
  "WAWebSetDisappearingModePrivacyAction",
  [
    "WATimeUtils",
    "WAWebSetDisappearingModeJob",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebSetDisappearingModeJob").setDisappearingMode(e);
      var t = o("WAWebUserPrefsMeUser").getMeUser();
      await o(
        "WAWebUpdateDisappearingModeForContact",
      ).updateDisappearingModeForContact({
        contactId: t,
        newDuration: e,
        newSettingTimestamp: o("WATimeUtils").unixTime(),
      });
    }
    l.setDisappearingMode = e;
  },
  98,
);
