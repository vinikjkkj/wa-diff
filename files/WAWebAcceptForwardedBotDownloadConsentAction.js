__d(
  "WAWebAcceptForwardedBotDownloadConsentAction",
  ["WAWebAcceptForwardedBotDownloadConsentJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.unsafe(),
            n = t.forwardedAiBotMessageInfo;
          n != null &&
            (yield o(
              "WAWebAcceptForwardedBotDownloadConsentJob",
            ).acceptForwardedBotDownloadConsentJob(e.id),
            (t.forwardedAiBotMessageInfo = babelHelpers.extends({}, n, {
              validationStatus: "download_consent_accepted",
            })));
        })),
        s.apply(this, arguments)
      );
    }
    l.acceptForwardedBotDownloadConsentAction = e;
  },
  98,
);
