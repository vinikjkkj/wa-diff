__d(
  "WAWebBusinessCategoriesResultCollection",
  [
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessCategoriesResultModel",
    "WAWebL10N",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.findImpl = async function (e) {
            var t = await o(
                "WAWebBizBusinessProfileAction",
              ).queryBusinessCategories(e, r("WAWebL10N").getLocale()),
              n = t.categories,
              a = t.notABizId;
            return { id: e, categories: n, notABizId: a };
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o("WAWebBusinessCategoriesResultModel").BusinessCategoriesResult;
    var s = new e();
    ((l.BusinessCategoriesResultCollectionImpl = e),
      (l.BusinessCategoriesResultCollection = s));
  },
  98,
);
