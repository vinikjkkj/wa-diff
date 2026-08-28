__d(
  "ProductSetDataProviderPlugin",
  [
    "FBLogger",
    "LoadObjectMap",
    "LoadObjectOperation",
    "ProductSetAPIClient",
    "isValidID",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e(function (e) {
        return e.merge(
          Array.from(t.productSetIDs).map(function (n) {
            return [n, e.get(n).setOperation(t.operation)];
          }),
        );
      });
    }
    function s(e, t) {
      e(function (e) {
        return e.merge(t.productSets);
      });
    }
    var u = {
        initialState: function (n) {
          return r("LoadObjectMap").create(
            function (t) {
              (e(n, {
                productSetIDs: t,
                operation: r("LoadObjectOperation").LOADING,
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(
                    t,
                    r("ProductSetAPIClient").loadRecord,
                  ),
                  function (e) {
                    s(n, { productSets: e });
                  },
                ));
            },
            function (e, t) {
              return r("isValidID")(t)
                ? e.isEmpty()
                : (r("FBLogger")("dpa")
                    .blameToPreviousFile()
                    .warn(
                      'ProductSetDataProviderPlugin expected valid Product Set ID, but got "%s"',
                      t,
                    ),
                  !1);
            },
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
