__d(
  "WAWebBizBroadcastsConfirmDeleteDialogLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizBroadcastsConfirmDeleteDialog.react",
          )
            .__setRef("WAWebBizBroadcastsConfirmDeleteDialogLoadable")
            .load();
          return e;
        }),
        "BizBroadcastsConfirmDeleteDialog",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastsConfirmDeleteDialogLoadable = c;
  },
  98,
);
