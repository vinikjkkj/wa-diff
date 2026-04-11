__d(
  "WAWebSettingSearchModel",
  [
    "WAWebSearchModel",
    "WAWebSearchUtils",
    "WAWebSettingsHierarchy",
    "WAWebThunk",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = "SettingSearch"),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.preloadData = function () {
          this.data = o("WAWebSettingsHierarchy")
            .buildSearchableHierarchy(
              o("WAWebSettingsHierarchy").getSettingsSearchHierarchy(!0),
            )
            .filter(function (e) {
              return e.parent != null &&
                !o("WAWebThunk").getResult(e.parent.isAvailable)
                ? !1
                : o("WAWebThunk").getResult(e.isAvailable);
            });
        }),
        (n.queryFn = function (t) {
          var e = o("WAWebSearchUtils").normalizeString(t);
          return {
            type: "setting",
            results: this.data
              .filter(function (t) {
                return t.searchCriteria != null && t.searchCriteria.includes(e);
              })
              .map(function (e) {
                return { id: e.id, type: "setting", data: e };
              }),
          };
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    l.SettingSearch = e;
  },
  98,
);
