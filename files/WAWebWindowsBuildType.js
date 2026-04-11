__d(
  "WAWebWindowsBuildType",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebBuildType",
    "WAWebEnvironment",
    "WAWebWamEnumAppBuildType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t,
        n = new URLSearchParams((t = window.location.search) != null ? t : ""),
        r = n.get("windowsBuildType");
      switch (r) {
        case "DEBUG":
          return o("WAWebBuildType").BuildType.DEBUG;
        case "ALPHA":
          return o("WAWebBuildType").BuildType.ALPHA;
        case "BETA":
          return o("WAWebBuildType").BuildType.BETA;
        case "RELEASE":
          return o("WAWebBuildType").BuildType.RELEASE;
        default:
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[windows] unknown buildType ",
                  ", default=DEBUG",
                ])),
              r,
            ),
            o("WAWebBuildType").BuildType.DEBUG
          );
      }
    }
    function u() {
      if (r("WAWebEnvironment").isWindows) {
        var e = o("WAWebBuildConstants").getWindowsVersion();
        if (e != null && e > 26e4)
          return (function (e) {
            if (e === o("WAWebBuildType").BuildType.DEBUG)
              return o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.DEBUG;
            if (e === o("WAWebBuildType").BuildType.ALPHA)
              return o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.ALPHA;
            if (e === o("WAWebBuildType").BuildType.BETA)
              return o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.BETA;
            if (e === o("WAWebBuildType").BuildType.RELEASE)
              return o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.RELEASE;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(s());
      }
      return null;
    }
    ((l.getWindowsBuildType = s), (l.getWindowsAppBuild = u));
  },
  98,
);
