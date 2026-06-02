__d(
  "WAWebKmpBuildInfo",
  ["WAWebBuildType", "WAWebKmpBridgeResultWrappers", "wa-kmp-syncd-engine-api"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o("WAWebKmpBridgeResultWrappers").wrapUnexpectedKmpSuccess(
        async function () {
          var e = await o("WAWebBuildType").getBuildType();
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
        },
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
    }
    l.getBuildInfo = e;
  },
  98,
);
