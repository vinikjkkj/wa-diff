__d(
  "WAWebBizBroadcastsEditContactDialogLoadable",
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
            "WAWebBizBroadcastsEditContactDialog.react",
          )
            .__setRef("WAWebBizBroadcastsEditContactDialogLoadable")
            .load();
          return e;
        }),
        "BizBroadcastsEditContactDialog",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastsEditContactDialogLoadable = c;
  },
  98,
);
