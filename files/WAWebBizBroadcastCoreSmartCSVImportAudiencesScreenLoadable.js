__d(
  "WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastCoreSmartCSVImportAudiencesScreen.react",
        )
          .__setRef(
            "WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable",
          )
          .load();
        return e;
      }, "BusinessBroadcastCoreSmartCSVImportAudiencesScreen"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable = c;
  },
  98,
);
