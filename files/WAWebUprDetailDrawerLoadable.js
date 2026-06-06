__d(
  "WAWebUprDetailDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebOrderDetailDrawerContainer.react",
          )
            .__setRef("WAWebUprDetailDrawerLoadable")
            .load();
          return e;
        }),
        "WAWebOrderDetailDrawerContainer",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Payment details"),
            error: !!t.error,
          });
        },
      });
    function m(e, t, n, r) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        u.jsx(d, {
          chat: n,
          interactiveMessage: t,
          onBack: o("WAWebDrawerManager").closeDrawerRight,
          orderInfo: e,
          sellerWid: r,
        }),
        { transition: "slide-left" },
      );
    }
    l.openUprDetailDrawer = m;
  },
  226,
);
