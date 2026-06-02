__d(
  "WAWebBizQuickRepliesDrawerLoadable",
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
        var e = await r("JSResourceForInteraction")(
          "WAWebBizQuickRepliesDrawer.react",
        )
          .__setRef("WAWebBizQuickRepliesDrawerLoadable")
          .load();
        return e;
      }, "WAWebBizQuickRepliesDrawer"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizQuickRepliesDrawerLoadable = c;
  },
  98,
);
