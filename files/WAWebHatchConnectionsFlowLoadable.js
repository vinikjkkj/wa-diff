__d(
  "WAWebHatchConnectionsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHatchConnectionsFlow.react",
        )
          .__setRef("WAWebHatchConnectionsFlowLoadable")
          .load();
        return e;
      }, "WAWebHatchConnectionsFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebHatchLoadingDrawer.react"), {
            error: !!t.error,
          });
        },
      });
    l.WAWebHatchConnectionsFlowLoadable = c;
  },
  98,
);
