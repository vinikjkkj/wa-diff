__d(
  "WAWebEditCaptureFlowLoadable",
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
          "WAWebEditCaptureFlow.react",
        )
          .__setRef("WAWebEditCaptureFlowLoadable")
          .load();
        return e;
      }, "EditCaptureFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u), (l.EditCaptureFlowLoadable = c));
  },
  98,
);
