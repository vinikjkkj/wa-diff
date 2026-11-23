__d(
  "WAWebPhoneNumberSharingSettingsAction",
  ["JSResourceForInteraction", "WAWebBackendRuntime", "WAWebPrivacyService"],
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
    async function c() {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebPrivacyService").PrivacyService)
            .isPhoneNumberSharingSettingsAvailable()
        : (await e.load()).isPhoneNumberSharingSettingsAvailable();
    }
    async function d() {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebPrivacyService").PrivacyService)
            .loadPhoneNumberSharingSettings()
        : (await e.load()).loadPhoneNumberSharingSettings();
    }
    async function m() {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebPrivacyService").PrivacyService)
            .readPhoneNumberSharingSettingsSnapshot()
        : (await e.load()).readPhoneNumberSharingSettingsSnapshot();
    }
    async function p(e) {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebPrivacyService").PrivacyService)
            .updatePhoneNumberSharingSetting(e)
        : (await s.load()).updatePhoneNumberSharingSetting(e);
    }
    async function _(t) {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebPrivacyService").PrivacyService)
            .readPhoneNumberSharingList(t)
        : (await e.load()).readPhoneNumberSharingList(t);
    }
    async function f(e, t, n) {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebPrivacyService").PrivacyService)
            .updatePhoneNumberSharingList(e, t, n)
        : (await u.load()).updatePhoneNumberSharingList(e, t, n);
    }
    ((l.isPhoneNumberSharingSettingsAvailable = c),
      (l.loadPhoneNumberSharingSettings = d),
      (l.readPhoneNumberSharingSettingsSnapshot = m),
      (l.updatePhoneNumberSharingSetting = p),
      (l.readPhoneNumberSharingList = _),
      (l.updatePhoneNumberSharingList = f));
  },
  98,
);
