__d(
  "WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable",
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
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizBroadcastsSmartCSVImportAudiencesScreen.react",
          )
            .__setRef("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable")
            .load();
          return e;
        }),
        "BusinessBroadcastSmartCSVImportAudiencesScreen",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable = c;
  },
  98,
);
