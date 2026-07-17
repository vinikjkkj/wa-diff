__d(
  "WAWebKmpMeManager",
  [
    "Promise",
    "WALogger",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        isInCompanionMode: function () {
          return (s || (s = n("Promise"))).resolve(!0);
        },
        getMyDeviceId: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              return r("nullthrows")(
                o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().device,
              );
            } catch (t) {
              throw (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd:kmp: failed to get my device id: ",
                      "",
                    ])),
                  t,
                ),
                t
              );
            }
          });
          function a() {
            return t.apply(this, arguments);
          }
          return a;
        })(),
      };
    l.meManager = u;
  },
  98,
);
