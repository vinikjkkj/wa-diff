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
      ).__setRef("WAWebPhoneNumberSharingSettingsAction"),
      u = r("JSResourceForInteraction")(
        "WAWebUpdatePhoneNumberSharingList",
      ).__setRef("WAWebPhoneNumberSharingSettingsAction");
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .isPhoneNumberSharingSettingsAvailable()
            : (yield e.load()).isPhoneNumberSharingSettingsAvailable();
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
                .loadPhoneNumberSharingSettings()
            : (yield e.load()).loadPhoneNumberSharingSettings();
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .readPhoneNumberSharingSettingsSnapshot()
            : (yield e.load()).readPhoneNumberSharingSettingsSnapshot();
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .updatePhoneNumberSharingSetting(e)
            : (yield s.load()).updatePhoneNumberSharingSetting(e);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .readPhoneNumberSharingList(t)
            : (yield e.load()).readPhoneNumberSharingList(t);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime")
                .runtime(o("WAWebPrivacyService").PrivacyService)
                .updatePhoneNumberSharingList(e, t, n)
            : (yield u.load()).updatePhoneNumberSharingList(e, t, n);
        })),
        v.apply(this, arguments)
      );
    }
    ((l.isPhoneNumberSharingSettingsAvailable = c),
      (l.loadPhoneNumberSharingSettings = m),
      (l.readPhoneNumberSharingSettingsSnapshot = _),
      (l.updatePhoneNumberSharingSetting = g),
      (l.readPhoneNumberSharingList = y),
      (l.updatePhoneNumberSharingList = b));
  },
  98,
);
