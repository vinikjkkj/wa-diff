__d(
  "WAWebMetaAiThreadDrawerLoadable",
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
          "WAWebMetaAiThreadDrawer.react",
        )
          .__setRef("WAWebMetaAiThreadDrawerLoadable")
          .load();
        return e;
      }, "MetaAiThreadDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.MetaAiThreadDrawerFlowLoadable = c;
  },
  98,
);
