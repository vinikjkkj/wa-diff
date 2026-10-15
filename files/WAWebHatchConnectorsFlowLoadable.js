__d(
  "WAWebHatchConnectorsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebHatchConnectorsFlow.react",
          )
            .__setRef("WAWebHatchConnectorsFlowLoadable")
            .load();
          return e;
        }),
        "WAWebHatchConnectorsFlow",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    function d(e, t) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(c, {
          initialConnectorId: e,
          initialConnectorName: t,
          onClose: o("WAWebDrawerManager").closeDrawerRight,
        }),
      );
    }
    ((l.WAWebHatchConnectorsFlowLoadable = c),
      (l.openHatchConnectorDrawer = d));
  },
  98,
);
