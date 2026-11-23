__d(
  "WAWebStorageQuotaExceededPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebStorageQuotaExceededPopup.react",
        )
          .__setRef("WAWebStorageQuotaExceededPopupLoadable")
          .load();
        return e;
      }, "StorageQuotaExceededPopup"),
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
