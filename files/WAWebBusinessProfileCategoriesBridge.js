__d(
  "WAWebBusinessProfileCategoriesBridge",
  [
    "JSResourceForInteraction",
    "WAWebBizGatingUtils",
    "WAWebBizLogQplEvents",
    "WAWebQueryBusinessCategoriesJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebBizGetCategoriesQuery",
      ).__setRef("WAWebBusinessProfileCategoriesBridge"),
      s = r("JSResourceForInteraction")(
        "WAWebBizGetCategoriesV2Query",
      ).__setRef("WAWebBusinessProfileCategoriesBridge");
    function u(t, n) {
      o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_start");
      var r;
      return (
        o("WAWebBizGatingUtils").isCategorySearchViaGraphEnabled()
          ? o("WAWebBizGatingUtils").getCatkitVersion() >= 2
            ? (r = s.load().then(function (e) {
                return e.getBusinessCategoriesV2(t, n);
              }))
            : (r = e.load().then(function (e) {
                return e.getBusinessCategories(t, n);
              }))
          : (r = o("WAWebQueryBusinessCategoriesJob").queryBusinessCategories(
              t,
            )),
        r.then(function (e) {
          return (
            o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_end"),
            e
          );
        })
      );
    }
    l.queryBusinessCategories = u;
  },
  98,
);
