__d(
  "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsProviderPlugin",
  [
    "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsDataLoader",
    "LoadObject",
    "LoadObjectMap",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            var n = new Map();
            e.forEach(function (e) {
              (n.set(e, r("LoadObject").loading({ creatorModuleID: i.id })),
                t(function (e) {
                  return e.merge(n);
                }),
                r("promiseDone")(
                  o(
                    "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsDataLoader",
                  ).loadBlockedAdgroupIds(e),
                  function (n) {
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withValue(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                  function (n) {
                    t(function (t) {
                      return t.set(
                        e,
                        r("LoadObject").withError(n, { creatorModuleID: i.id }),
                      );
                    });
                  },
                ));
            });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
