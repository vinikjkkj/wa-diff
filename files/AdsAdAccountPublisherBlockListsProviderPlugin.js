__d(
  "AdsAdAccountPublisherBlockListsProviderPlugin",
  ["AdsBlockListDataLoader", "LoadObjectMap", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              e.forEach(function (e) {
                r("promiseDone")(
                  o("AdsBlockListDataLoader").getBlockLists(e),
                  function (n) {
                    t(function (t) {
                      return t.setSingleValueOrError(e, n);
                    });
                  },
                  function (n) {
                    t(function (t) {
                      return t.setSingleValueOrError(e, []);
                    });
                  },
                );
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
