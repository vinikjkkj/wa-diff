__d(
  "WAWebBusinessCategoriesResultCollection",
  [
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessCategoriesResultModel",
    "WAWebL10N",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (t = e.call.apply(e, [this].concat(i)) || this),
          (t.findImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o(
                    "WAWebBizBusinessProfileAction",
                  ).queryBusinessCategories(e, r("WAWebL10N").getLocale()),
                  n = t.categories,
                  a = t.notABizId;
                return { id: e, categories: n, notABizId: a };
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
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
