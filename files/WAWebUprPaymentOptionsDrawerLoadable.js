__d(
  "WAWebUprPaymentOptionsDrawerLoadable",
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
            "WAWebUprPaymentOptionsDrawer.react",
          )
            .__setRef("WAWebUprPaymentOptionsDrawerLoadable")
            .load();
          return e;
        }),
        "WAWebUprPaymentOptionsDrawer",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Payment options"),
            error: !!t.error,
          });
        },
      });
    function m(e) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        u.jsx(d, {
          info: e,
          onClose: o("WAWebDrawerManager").closeDrawerRight,
        }),
        { transition: "slide-left" },
      );
    }
    ((l.WAWebUprPaymentOptionsDrawerLoadable = d),
      (l.openUprPaymentOptionsDrawer = m));
  },
  226,
);
