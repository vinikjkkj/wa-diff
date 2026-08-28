__d(
  "AdsUEditorSelectAppProviderPlugin",
  [
    "AdsAccountStore",
    "IOS14Utils",
    "ads-app-platforms",
    "adsUEditorAccountIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("adsUEditorAccountIDSelector")();
      if (e == null) return !1;
      var t = r("AdsAccountStore").get(e);
      return r("IOS14Utils").isIOS14AdAccount(t.value);
    }
    var s = {
        initialState: {
          selectedAppStore: e()
            ? o("ads-app-platforms").MOBILE_STORE.ITUNES
            : o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY,
          selectedAppStoreCountry: "US",
          shouldShowAppStoreCountryCheckbox: !1,
          showNotLinkToAccountNotice: !1,
          isInitiaState: !0,
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
