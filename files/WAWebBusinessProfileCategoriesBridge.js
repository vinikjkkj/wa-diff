__d(
  "WAWebBusinessProfileCategoriesBridge",
  [
    "JSResourceForInteraction",
    "WAWebBizLogQplEvents",
    "WAWebBizProfileGatingUtils",
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
      var r =
        o("WAWebBizProfileGatingUtils").getCatkitVersion() >= 2
          ? s.load().then(function (e) {
              return e.getBusinessCategoriesV2(t, n);
            })
          : e.load().then(function (e) {
              return e.getBusinessCategories(t, n);
            });
      return r.then(function (e) {
        return (
          o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_end"),
          e
        );
      });
    }
    l.queryBusinessCategories = u;
  },
  98,
);
