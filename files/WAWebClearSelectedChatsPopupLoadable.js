__d(
  "WAWebClearSelectedChatsPopupLoadable",
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
          "WAWebClearSelectedChatsPopup.react",
        )
          .__setRef("WAWebClearSelectedChatsPopupLoadable")
          .load();
        return e;
      }, "ClearSelectedChatsPopup"),
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
    l.ClearSelectedChatsPopupLoadable = c;
  },
  98,
);
