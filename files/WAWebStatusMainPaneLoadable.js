__d(
  "WAWebStatusMainPaneLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebMidDrawerEmptyStateLoadable",
    "WAWebNavBarTypes",
    "WAWebStatusGatingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(2);
      if (!o("WAWebStatusGatingUtils").isStatusFileDropEnabled()) {
        var t;
        return (
          e[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = s.jsx(
                o("WAWebMidDrawerEmptyStateLoadable")
                  .MidDrawerEmptyStateLoadable,
                { type: o("WAWebNavBarTypes").NavBarItems.Status },
              )),
              (e[0] = t))
            : (t = e[0]),
          t
        );
      }
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsx(c, {})), (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    var c = r("WAWebLoadable")({
      loader: r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebStatusMainPane.react")
          .__setRef("WAWebStatusMainPaneLoadable")
          .load();
      }, "StatusMainPane"),
      loading: function (t) {
        return s.jsx(r("WAWebLoadingDrawer.react"), {
          error: !!t.error,
          cancellable: !1,
        });
      },
    });
    l.StatusMainPaneLoadable = u;
  },
  98,
);
