__d(
  "AdsBusinessImageSourceImageProviderPlugin",
  [
    "AdsBusinessImageListLoadedAction",
    "AdsBusinessImageSourceDataLoader",
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
                    r("AdsBusinessImageSourceDataLoader").loadOne,
                  ),
                  function (e) {
                    r("AdsBusinessImageListLoadedAction").dispatch(
                      {
                        imageDataList: Array.from(e.values()).map(function (e) {
                          return e.getValueEnforcing();
                        }),
                        imageIDList: Array.from(e.keys()),
                      },
                      {
                        line: "42",
                        module: "AdsBusinessImageSourceImageProviderPlugin.js",
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
