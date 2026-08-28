__d(
  "AdsEventsManagerClassificationAppealsModalStateTriggerReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.params,
            r = e.dataSourceID,
            o = e.showCategoriesModal,
            a = [].concat(t.dataSourceIDs, [r]).filter(Boolean);
          return babelHelpers.extends({}, t, {
            selectedDataSourceID: r != null ? r : null,
            isModalShown: o != null ? o : !1,
            dataSourceIDs: a,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
