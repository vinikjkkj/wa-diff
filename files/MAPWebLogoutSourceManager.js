__d(
  "MAPWebLogoutSourceManager",
  ["ExecutionEnvironment", "WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "map_logout_source",
      c = {
        clearLogoutSource: function () {
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            (s || (s = r("WebStorage"))).setItemGuarded(
              s.getLocalStorage(),
              u,
              "",
            );
        },
        getLogoutSource: function () {
          var t, n;
          return (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            (t =
              (n = (s || (s = r("WebStorage"))).getLocalStorage()) == null
                ? void 0
                : n.getItem(u)) != null
            ? t
            : "";
        },
        setLogoutSource: function (n) {
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            (s || (s = r("WebStorage"))).setItemGuarded(
              s.getLocalStorage(),
              u,
              n,
            );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
