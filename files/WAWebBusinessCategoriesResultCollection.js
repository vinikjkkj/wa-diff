__d(
  "WAWebBusinessCategoriesResultCollection",
  [
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessCategoriesResultModel",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.findImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o(
                    "WAWebBizBusinessProfileAction",
                  ).queryBusinessCategories(e),
                  n = t.categories,
                  r = t.notABizId;
                return { id: e, categories: n, notABizId: r };
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
