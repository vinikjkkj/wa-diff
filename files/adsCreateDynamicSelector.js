__d(
  "adsCreateDynamicSelector",
  ["adsCreateStoreSelector", "memoizeWithArgsWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getStores.length === 0 ? e.getStores() : e.getStores;
      return r("adsCreateStoreSelector")(
        t,
        function () {
          return function (t) {
            return e(t);
          };
        },
        { isGetStoresPure: e.isGetStoresPure, name: i.id },
      );
    }
    var s = r("memoizeWithArgsWeak")(e);
    l.default = s;
  },
  98,
);
