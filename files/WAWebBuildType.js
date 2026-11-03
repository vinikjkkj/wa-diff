__d(
  "WAWebBuildType",
  ["$InternalEnum", "WAWebEnvironment", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ RELEASE: 0, BETA: 1, ALPHA: 2, DEBUG: 3 });
    async function s() {
      var t = await o(
          "WAWebUserPrefsGeneral",
        ).getWhatsAppWebExternalBetaJoinedIdb(),
        n = r("WAWebEnvironment").getEnvironment();
      return (function (t) {
        if (
          Array.isArray(t) &&
          t.length === 2 &&
          t[0] === "prod" &&
          t[1] === !0
        )
          return e.BETA;
        if (
          Array.isArray(t) &&
          t.length === 2 &&
          t[0] === "prod" &&
          t[1] === !1
        )
          return e.RELEASE;
        if (
          Array.isArray(t) &&
          t.length === 2 &&
          t[0] === "intern" &&
          t[1] === !0
        )
          return e.DEBUG;
        if (
          (Array.isArray(t) &&
            t.length === 2 &&
            t[0] === "intern" &&
            t[1] === !1) ||
          (Array.isArray(t) && t.length === 2 && t[0] === "dev" && t[1] === !0)
        )
          return e.BETA;
        if (Array.isArray(t) && t.length === 2 && t[0] === "dev" && t[1] === !1)
          return e.DEBUG;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })([n, t]);
    }
    ((l.BuildType = e), (l.getBuildType = s));
  },
  98,
);
