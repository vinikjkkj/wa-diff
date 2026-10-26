__d(
  "WAWebStatusDrawerFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "cr:17803",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebStatusDrawerFlow.react",
          )
            .__setRef("WAWebStatusDrawerFlowLoadable")
            .load();
          return e;
        }),
        "WAWebStatusDrawerFlow",
      );
    function c(e) {
      return e.error != null
        ? s.jsx(r("WAWebLoadingDrawer.react"), { error: !0, cancellable: !1 })
        : (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 &&
            n("cr:17803") != null
          ? s.jsx(n("cr:17803"), {})
          : s.jsx(r("WAWebLoadingDrawer.react"), {
              error: !1,
              cancellable: !1,
            });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = r("react-loadable")({ loader: u, loading: c });
    ((l.renderStatusDrawerLoading = c), (l.StatusDrawerFlowLoadable = d));
  },
  98,
);
