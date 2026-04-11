__d(
  "WAWebBusinessCategoriesResultModel",
  ["WAWebBaseModel", "WAWebBusinessCategoriesResultCollection"],
  function (t, n, r, o, a, i, l) {
    var e = "__empty_query__",
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.categories = o("WAWebBaseModel").prop()),
            (t.notABizId = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getCollection = function () {
            return o("WAWebBusinessCategoriesResultCollection")
              .BusinessCategoriesResultCollection;
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "BusinessCategoriesResult";
    var u = o("WAWebBaseModel").defineModel(s);
    ((l.BUSINESS_CATEGORY_EMPTY_STR_ID = e), (l.BusinessCategoriesResult = u));
  },
  98,
);
