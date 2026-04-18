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
    ).__setRef("WAWebBusinessProfileCategoriesBridge");
    function s(t, n) {
      o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_start");
      var r = o("WAWebBizGatingUtils").isCategorySearchViaGraphEnabled()
        ? e.load().then(function (e) {
            return e.getBusinessCategories(t, n);
          })
        : o("WAWebQueryBusinessCategoriesJob").queryBusinessCategories(t);
      return r.then(function (e) {
        return (
          o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_end"),
          e
        );
      });
    }
    l.queryBusinessCategories = s;
  },
  98,
);
