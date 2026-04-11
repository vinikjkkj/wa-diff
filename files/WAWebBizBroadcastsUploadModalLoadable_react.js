__d(
  "WAWebBizBroadcastsUploadModalLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizBroadcastsUploadModal.react",
          )
            .__setRef("WAWebBizBroadcastsUploadModalLoadable.react")
            .load();
          return e.WAWebBizBroadcastsUploadModal;
        }),
        "WAWebBizBroadcastsUploadModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Box,
            error: !!t.error,
          });
        },
      });
    l.WAWebBizBroadcastsUploadModalLoadable = c;
  },
  98,
);
