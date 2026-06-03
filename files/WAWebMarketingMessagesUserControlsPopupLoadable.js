__d(
  "WAWebMarketingMessagesUserControlsPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMarketingMessagesUserControlsPopup.react",
          )
            .__setRef("WAWebMarketingMessagesUserControlsPopupLoadable")
            .load();
          return e;
        }),
        "WAWebMarketingMessagesUserControlsPopup",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebMarketingMessagesUserControlsPopupLoadable = c;
  },
  98,
);
