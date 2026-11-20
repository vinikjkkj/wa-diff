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
      ).__setRef("WAWebPhoneNumberSharingSettingsAction"),
      s = r("JSResourceForInteraction")(
        "WAWebUpdatePhoneNumberSharingSetting",
      ).__setRef("WAWebPhoneNumberSharingSettingsAction");
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .isPhoneNumberSharingSettingsAvailable()
            : (yield e.load()).isPhoneNumberSharingSettingsAvailable();
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .loadPhoneNumberSharingSettings()
            : (yield e.load()).loadPhoneNumberSharingSettings();
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .readPhoneNumberSharingSettingsSnapshot()
            : (yield e.load()).readPhoneNumberSharingSettingsSnapshot();
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .updatePhoneNumberSharingSetting(e)
            : (yield s.load()).updatePhoneNumberSharingSetting(e);
        })),
        g.apply(this, arguments)
      );
    }
    ((l.isPhoneNumberSharingSettingsAvailable = u),
      (l.loadPhoneNumberSharingSettings = d),
      (l.readPhoneNumberSharingSettingsSnapshot = p),
      (l.updatePhoneNumberSharingSetting = f));
  },
  98,
);
