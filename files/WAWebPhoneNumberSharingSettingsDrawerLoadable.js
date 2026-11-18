__d(
  "WAWebPhoneNumberSharingSettingsDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLoadable")({
        loader: r("WAWebLazyLoadedRetriable")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return yield r("JSResourceForInteraction")(
              "WAWebPhoneNumberSharingSettingsDrawer.react",
            )
              .__setRef("WAWebPhoneNumberSharingSettingsDrawerLoadable")
              .load();
          }),
          "PhoneNumberSharingSettingsDrawer",
        ),
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.PhoneNumberSharingSettingsDrawerLoadable = u;
  },
  98,
);
