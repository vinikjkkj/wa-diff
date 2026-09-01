__d(
  "WAWebStorageQuotaExceededPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebStorageQuotaExceededPopup.react",
          )
            .__setRef("WAWebStorageQuotaExceededPopupLoadable")
            .load();
          return e;
        }),
        "StorageQuotaExceededPopup",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), { error: !0 })
            : s.jsx(s.Fragment, {});
        },
      });
    l.StorageQuotaExceededPopupLoadable = c;
  },
  98,
);
