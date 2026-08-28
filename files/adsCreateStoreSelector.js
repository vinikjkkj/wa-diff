__d(
  "adsCreateStoreSelector",
  [
    "AdsSelectorNameUtils",
    "adsCacheSelector",
    "adsMemoizeSelectorGetStores",
    "distinctArray",
    "isTruthy",
    "makeStringifier",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, a, i) {
        i === void 0 && (i = {});
        var t = i.name || a.name || "unnamedStoreSelector",
          l = Array.isArray(n),
          s = l ? (e || (e = r("distinctArray")))(n) : [],
          u = l
            ? function () {
                return s;
              }
            : n,
          c = i.hashProps,
          d = c != null ? r("makeStringifier")(c) : void 0,
          m = r("adsCacheSelector")(a, u, l, d, t);
        return (
          (m.isGetStoresPure = l || r("isTruthy")(i.isGetStoresPure)),
          (m.getStores = r("adsMemoizeSelectorGetStores")(
            m.isGetStoresPure,
            u,
            t,
          )),
          (m.isGetStoresStatic = l),
          (m.rawSelectFn = a),
          o("AdsSelectorNameUtils").nameSelector(m, t),
          m
        );
      },
      u = s;
    l.default = u;
  },
  98,
);
