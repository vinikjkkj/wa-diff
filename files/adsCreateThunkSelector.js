__d(
  "adsCreateThunkSelector",
  ["adsCreateStoreSelector", "memoizeWithArgsWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsCreateStoreSelector")(
        e.getStores,
        function (n) {
          return function () {
            return e(n);
          };
        },
        {
          name: (e.name || "unnamedThunkSelector") + "-thunk",
          isGetStoresPure: e.isGetStoresPure,
        },
      );
    }
    var s = r("memoizeWithArgsWeak")(e);
    l.default = s;
  },
  98,
);
