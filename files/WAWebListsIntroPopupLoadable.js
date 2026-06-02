__d(
  "WAWebListsIntroPopupLoadable",
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
          "WAWebListsIntroPopup.react",
        )
          .__setRef("WAWebListsIntroPopupLoadable")
          .load();
        return e.ListsIntroPopup;
      }, "ListsIntroPopup"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.ListsIntroPopupLoadable = c;
  },
  98,
);
