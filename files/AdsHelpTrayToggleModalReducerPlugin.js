__d(
  "AdsHelpTrayToggleModalReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            r = n.data.openModal,
            o = (e = n.data.source) != null ? e : null;
          return babelHelpers.extends({}, t, {
            openModalType: r,
            openModalSource: o,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
