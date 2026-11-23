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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return o("WAWebStatusGatingUtils").isStatusFileDropEnabled()
        ? s.jsx(c, {})
        : s.jsx(
            o("WAWebMidDrawerEmptyStateLoadable").MidDrawerEmptyStateLoadable,
            { type: o("WAWebNavBarTypes").NavBarItems.Status },
          );
    }
    u.displayName = u.name + " [from " + i.id + "]";
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
