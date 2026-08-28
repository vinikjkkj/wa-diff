__d(
  "AdsArDataContainerProviderPlugin",
  [
    "AdsArAdUtils",
    "AdsArDataContainer",
    "AdsArDataContainerDataLoader",
    "AdsArNewDataContainerID",
    "FBLogger",
    "LoadObject",
    "LoadObjectMap",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap")
            .create(function (e) {
              (t(function (t) {
                return t.setLoading(e);
              }),
                e.forEach(function (e) {
                  if (
                    !(
                      o("AdsArAdUtils").isBackupDataContainerID(e) ||
                      e === r("AdsArNewDataContainerID")
                    )
                  ) {
                    var n = /^\d+$/.test(e);
                    if (!n) {
                      r("FBLogger")("ar_ads_creation_frontend").mustfix(
                        "unknown dataContainerID format: " + e,
                      );
                      return;
                    }
                    r("promiseDone")(
                      o("AdsArDataContainerDataLoader").getDataContainer(e),
                      function (n) {
                        t(function (t) {
                          return t.setSingleValueOrError(e, n);
                        });
                      },
                    );
                  }
                }));
            })
            .merge([
              [
                r("AdsArNewDataContainerID"),
                r("LoadObject").withValue(new (r("AdsArDataContainer"))(), {
                  creatorModuleID: i.id,
                }),
              ],
            ]);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
