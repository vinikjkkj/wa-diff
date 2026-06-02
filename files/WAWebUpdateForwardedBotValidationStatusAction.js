__d(
  "WAWebUpdateForwardedBotValidationStatusAction",
  ["WAWebUpdateForwardedBotValidationStatusJob"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return s(e, "download_consent_accepted");
    }
    async function s(e, t) {
      var n = e.unsafe(),
        r = n.forwardedAiBotMessageInfo;
      r != null &&
        (await o(
          "WAWebUpdateForwardedBotValidationStatusJob",
        ).updateForwardedBotValidationStatus(e.id, t),
        (n.forwardedAiBotMessageInfo = babelHelpers.extends({}, r, {
          validationStatus: t,
        })));
    }
    ((l.acceptForwardedBotDownloadConsentAction = e),
      (l.updateForwardedBotValidationStatusAction = s));
  },
  98,
);
