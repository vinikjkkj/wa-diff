__d(
  "WAWebKmpBuildInfo",
  [
    "WAWebBuildType",
    "WAWebKmpBridgeResultWrappers",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebKmpBridgeResultWrappers",
          ).wrapUnexpectedKmpSuccess(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebBuildType").getBuildType();
              switch (e) {
                case o("WAWebBuildType").BuildType.RELEASE:
                  return o("wa-kmp-syncd-engine-api").KmpBuildType.RELEASE;
                case o("WAWebBuildType").BuildType.BETA:
                  return o("wa-kmp-syncd-engine-api").KmpBuildType.BETA;
                case o("WAWebBuildType").BuildType.ALPHA:
                  return o("wa-kmp-syncd-engine-api").KmpBuildType.ALPHA;
                case o("WAWebBuildType").BuildType.DEBUG:
                  return o("wa-kmp-syncd-engine-api").KmpBuildType.DEBUG;
              }
            }),
          );
          return {
            getBuildType: function () {
              return e;
            },
            getSenderPlatform: function () {
              return o("wa-kmp-syncd-engine-api").KmpResult.success(
                o("wa-kmp-syncd-engine-api").KmpSenderPlatform.WEB,
              );
            },
          };
        })),
        s.apply(this, arguments)
      );
    }
    l.getBuildInfo = e;
  },
  98,
);
