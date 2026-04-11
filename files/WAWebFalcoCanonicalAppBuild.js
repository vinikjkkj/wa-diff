__d(
  "WAWebFalcoCanonicalAppBuild",
  ["WAWebWamEnumAppBuildType", "WAWebWamUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebWamUtils").getAppBuild();
      return e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.DEBUG
        ? "debug"
        : e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.ALPHA
          ? "alpha"
          : e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.BETA
            ? "beta"
            : e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.RELEASE
              ? "release"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.default = e;
  },
  98,
);
