__d(
  "WAWebHardRefreshModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHardRefreshModal.react",
        )
          .__setRef("WAWebHardRefreshModalLoadable")
          .load();
        return e;
      }, "HardRefreshModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), {
                error: !0,
                onCancel: o("WDSDialogBridge").closeWDSDialog,
              })
            : s.jsx(s.Fragment, {});
        },
      });
    l.HardRefreshModalLoadable = c;
  },
  98,
);
