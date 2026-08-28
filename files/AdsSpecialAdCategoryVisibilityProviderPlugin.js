__d(
  "AdsSpecialAdCategoryVisibilityProviderPlugin",
  [
    "AdsSpecialAdCategoryVisibilityDataLoader",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(
                  e,
                  o("AdsSpecialAdCategoryVisibilityDataLoader").genContent,
                ),
                function (e) {
                  return t(function (t) {
                    return t.merge(e);
                  });
                },
              ));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
