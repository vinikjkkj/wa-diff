__d(
  "WAWebHatchConnectionsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebHatchConnectionsFlow.react",
          )
            .__setRef("WAWebHatchConnectionsFlowLoadable")
            .load();
          return e;
        }),
        "WAWebHatchConnectionsFlow",
      ),
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
