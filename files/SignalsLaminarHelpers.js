__d(
  "SignalsLaminarHelpers",
  [
    "LoadObjectMap",
    "adsCreateStoreSelector",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
        return (
          o === void 0 && (o = function () {}),
          function (e) {
            return r("LoadObjectMap").createKeyed(function (n) {
              (e(function (e) {
                return e.setLoading(n);
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(n, function (e) {
                    return t(e);
                  }),
                  function (t) {
                    (e(function (e) {
                      return e.merge(t);
                    }),
                      o(t));
                  },
                ));
            }, n);
          }
        );
      },
      s = function (t) {
        return r("adsCreateStoreSelector")(
          [t.toFluxStore()],
          function (n) {
            return t().get(n);
          },
          { name: i.id },
        );
      },
      u = function (t, n) {
        return t.merge(n.value);
      };
    ((l.createLoadObjectMap = e),
      (l.createProviderSelector = s),
      (l.reduce = u));
  },
  98,
);
