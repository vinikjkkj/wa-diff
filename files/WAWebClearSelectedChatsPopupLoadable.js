__d(
  "WAWebClearSelectedChatsPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebClearSelectedChatsPopup.react",
          )
            .__setRef("WAWebClearSelectedChatsPopupLoadable")
            .load();
          return e;
        }),
        "ClearSelectedChatsPopup",
      ),
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
