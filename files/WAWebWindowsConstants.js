__d(
  "WAWebWindowsConstants",
  ["WAWebBuildConstants", "WAWebBuildType", "cr:9565"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:9565")) != null ? e : {},
      u = s.getWindowsBuildType,
      c = d();
    function d() {
      var e = o("WAWebBuildConstants").getWindowsVersion();
      return e == null
        ? !1
        : !!(
            e < 257700 ||
            (e > 26e4 && u && u() === o("WAWebBuildType").BuildType.BETA)
          );
    }
    l.WINDOWS_BUILD_IS_BETA = c;
  },
  98,
);
