__d(
  "UserAgent",
  ["UserAgentData", "VersionRange", "memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, o) {
      if (e === n) return !0;
      if (!n.startsWith(e)) return !1;
      var a = n.slice(e.length);
      return t != null
        ? ((a = o ? o(a) : a), r("VersionRange").contains(a, t))
        : !1;
    }
    function u(e) {
      return r("UserAgentData").platformName === "Windows"
        ? e.replace(/^\s*NT/, "")
        : e;
    }
    var c = {
        isBrowser: (e = r("memoizeStringOnly"))(function (e) {
          return s(
            r("UserAgentData").browserName,
            r("UserAgentData").browserFullVersion,
            e,
          );
        }),
        isBrowserArchitecture: e(function (e) {
          return s(r("UserAgentData").browserArchitecture, null, e);
        }),
        isDevice: e(function (e) {
          return s(r("UserAgentData").deviceName, null, e);
        }),
        isEngine: e(function (e) {
          return s(
            r("UserAgentData").engineName,
            r("UserAgentData").engineVersion,
            e,
          );
        }),
        isEngine_DEPRECATED_DANGEROUS: e(function (e) {
          return s(
            r("UserAgentData").engineName,
            r("UserAgentData").engineVersion,
            e,
          );
        }),
        isPlatform: e(function (e) {
          return s(
            r("UserAgentData").platformName,
            r("UserAgentData").platformFullVersion,
            e,
            u,
          );
        }),
        isPlatformArchitecture: e(function (e) {
          return s(r("UserAgentData").platformArchitecture, null, e);
        }),
      },
      d = c;
    l.default = d;
  },
  98,
);
