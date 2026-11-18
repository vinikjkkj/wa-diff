__d(
  "WAWebPhoneNumberSharingSettingsAction",
  [
    "JSResourceForInteraction",
    "WAWebBackendRuntime",
    "WAWebPrivacyService",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
      "WAWebPhoneNumberSharingSettingsUI",
    ).__setRef("WAWebPhoneNumberSharingSettingsAction");
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .isPhoneNumberSharingSettingsAvailable()
            : (yield e.load()).isPhoneNumberSharingSettingsAvailable();
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .loadPhoneNumberSharingSettings()
            : (yield e.load()).loadPhoneNumberSharingSettings();
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .readPhoneNumberSharingSettingsSnapshot()
            : (yield e.load()).readPhoneNumberSharingSettingsSnapshot();
        })),
        p.apply(this, arguments)
      );
    }
    ((l.isPhoneNumberSharingSettingsAvailable = s),
      (l.loadPhoneNumberSharingSettings = c),
      (l.readPhoneNumberSharingSettingsSnapshot = m));
  },
  98,
);
