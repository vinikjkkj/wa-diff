__d(
  "WAWebBizOrderStatusDrawerLoadable",
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
          "WAWebBizOrderStatusDrawer.react",
        )
          .__setRef("WAWebBizOrderStatusDrawerLoadable")
          .load();
        return e;
      }, "WAWebBizOrderStatusDrawer"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Order details"),
            error: !!t.error,
          });
        },
      });
    l.OrderStatusDrawerLoadable = d;
  },
  226,
);
