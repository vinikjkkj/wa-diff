__d(
  "WAFlowsEnvContextUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e, n, r;
        switch (t) {
          case "ios":
            r =
              (e = navigator.userAgent.match(/OS ((\d+_?){2,3})\s/)) == null
                ? void 0
                : e[1].replace("_", ".");
            break;
          default:
            r =
              (n = navigator.userAgent.match(
                /(chrome|safari(?=\/))\/?\s*(\d+)/i,
              )) == null
                ? void 0
                : n[2];
        }
        return r != null ? r : "";
      },
      l = "ZZ",
      s = function (t) {
        return t.split(/[-_]/)[0].toLowerCase();
      },
      u = function (t, n) {
        if (t == null || t === "") return n;
        var e = t.split(/[-_]/),
          r = e[0],
          o = e[1];
        if (s(n) === r.toLowerCase()) return n;
        var a =
          o != null && o !== "" && o.toUpperCase() !== l ? r + "-" + o : r;
        try {
          return Intl.DateTimeFormat.supportedLocalesOf(a).length > 0 ? a : n;
        } catch (e) {
          return n;
        }
      };
    ((i.getBrowserVersion = e), (i.resolveLocaleFromNative = u));
  },
  66,
);
