__d(
  "WAWebUpdateForwardedBotValidationStatusAction",
  ["WAWebUpdateForwardedBotValidationStatusJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return u(e, "download_consent_accepted");
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.unsafe(),
            r = n.forwardedAiBotMessageInfo;
          r != null &&
            (yield o(
              "WAWebUpdateForwardedBotValidationStatusJob",
            ).updateForwardedBotValidationStatus(e.id, t),
            (n.forwardedAiBotMessageInfo = babelHelpers.extends({}, r, {
              validationStatus: t,
            })));
        })),
        c.apply(this, arguments)
      );
    }
    ((l.acceptForwardedBotDownloadConsentAction = e),
      (l.updateForwardedBotValidationStatusAction = u));
  },
  98,
);
