__d(
  "WAWebBusinessProfileCategoriesBridge",
  ["WAWebBizLogQplEvents", "WAWebQueryBusinessCategoriesJob"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_start"),
        o("WAWebQueryBusinessCategoriesJob")
          .queryBusinessCategories(e)
          .then(function (e) {
            return (
              o("WAWebBizLogQplEvents").qplPointProfileCatsView(
                "datasource_end",
              ),
              e
            );
          })
      );
    }
    l.queryBusinessCategories = e;
  },
  98,
);
