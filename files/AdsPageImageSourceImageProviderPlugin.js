__d(
  "AdsPageImageSourceImageProviderPlugin",
  [
    "AdsPageImageListDataLoader",
    "AdsPageImageListLoadedAction",
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
                    r("AdsPageImageListDataLoader").loadOne,
                  ),
                  function (e) {
                    r("AdsPageImageListLoadedAction").dispatch(
                      {
                        imageDataList: Array.from(e.values()).map(function (e) {
                          return e.getValueEnforcing();
                        }),
                        imageIDList: Array.from(e.keys()),
                      },
                      {
                        line: "37",
                        module: "AdsPageImageSourceImageProviderPlugin.js",
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
