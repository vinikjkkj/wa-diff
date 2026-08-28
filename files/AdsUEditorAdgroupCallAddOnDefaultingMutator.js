__d(
  "AdsUEditorAdgroupCallAddOnDefaultingMutator",
  [
    "AdsCallAddonUtils",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "AdsUEditorAdgroupCallAdsConfigurationUtils",
      ).__setRef("AdsUEditorAdgroupCallAddOnDefaultingMutator"),
      s = r("requireDeferred")(
        "AdsUEditorAdgroupCallBusinessHoursStoreUtils",
      ).__setRef("AdsUEditorAdgroupCallAddOnDefaultingMutator");
    o("AdsCallAddonUtils").isCallAddonBusinessHoursEnabled(!1) &&
      (e.load(), s.load());
    function u(t, n, r, a) {
      var i = o(
        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
      ).cleanWebsiteExtensionFields(t, a);
      i = o("AdsCallAddonUtils").setPhoneNumberAndCallDestinationType(i, n);
      var l = e.getModuleIfRequired(),
        u = s.getModuleIfRequired();
      return (
        o("AdsCallAddonUtils").isCallAddonBusinessHoursEnabled(!1) &&
          l != null &&
          u != null &&
          (i = l.setBusinessHours(i, u.getDefaultBusinessHoursForPage(r))),
        i
      );
    }
    l.applyCallAddOnDefaultBrowserAddOn = u;
  },
  98,
);
