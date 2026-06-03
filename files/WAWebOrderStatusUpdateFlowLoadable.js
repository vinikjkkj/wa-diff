__d(
  "WAWebOrderStatusUpdateFlowLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizOrderStatusUpdateFlow.react",
          )
            .__setRef("WAWebOrderStatusUpdateFlowLoadable")
            .load();
          return e;
        }),
        "OrderStatusUpdateFlow",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Update order status"),
            error: !!t.error,
          });
        },
      });
    l.OrderStatusUpdateFlowLoadable = d;
  },
  226,
);
