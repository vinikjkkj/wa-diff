__d(
  "WAWebCacheStorageOpenFailedPopupLoadable",
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
          "WAWebCacheStorageOpenFailedPopup.react",
        )
          .__setRef("WAWebCacheStorageOpenFailedPopupLoadable")
          .load();
        return e;
      }, "CacheStorageOpenFailedPopup"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), { error: !0 })
            : s.jsx(s.Fragment, {});
        },
      });
    l.CacheStorageOpenFailedPopupLoadable = c;
  },
  98,
);
