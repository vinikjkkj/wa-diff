__d(
  "WAWebBizCtwaPreviewFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizCtwaAdPreviewFlow.react",
        )
          .__setRef("WAWebBizCtwaPreviewFlowLoadable")
          .load();
        return e;
      }, "CtwaAdPreviewFlow"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Ad preview"),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.CtWAAdPreviewFlowLoadable = d));
  },
  226,
);
