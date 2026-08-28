__d(
  "AdsStockImageSourceImageProviderPlugin",
  [
    "AdsStockImageSourceDataLoaderV2",
    "AdsStockImageSourceImageListLoadedAction",
    "LoadObjectMap",
    "LoadObjectMapMutationUtil",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(
            function (e) {
              (t(function (t) {
                return o("LoadObjectMapMutationUtil").setValueListToLoading(
                  t,
                  e,
                );
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(
                    e,
                    r("AdsStockImageSourceDataLoaderV2").loadOne,
                  ),
                  function (e) {
                    r("AdsStockImageSourceImageListLoadedAction").dispatch(
                      {
                        imageDataList: Array.from(e.values()).map(function (e) {
                          return e.getValueEnforcing();
                        }),
                        imageIDList: Array.from(e.keys()),
                      },
                      {
                        line: "47",
                        module: "AdsStockImageSourceImageProviderPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ));
            },
            function (e) {
              return e.isDone() && !e.hasValue();
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
