__d(
  "WAWebStickerStoreFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebStickerStoreFlow")
          .__setRef("WAWebStickerStoreFlowLoadable")
          .load();
        return e;
      }, "StickerStoreFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      }),
      d = { StickerStoreFlowLoadable: c, requireBundle: u };
    l.default = d;
  },
  98,
);
