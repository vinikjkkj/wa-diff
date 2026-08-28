__d(
  "readQueryToLoadObject",
  [
    "LoadObject",
    "getErrorSafe",
    "memoizeWithArgsByKey",
    "readQueryFromEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e
        ? r("LoadObject").loading({ creatorModuleID: i.id })
        : r("LoadObject").withValue(t, { creatorModuleID: i.id });
    }
    var s = r("memoizeWithArgsByKey")(e);
    function u(e, t, n, o) {
      try {
        var a = r("readQueryFromEnvironment")(e, t, n),
          l = a.data,
          u = a.isMissingData,
          c = u ? null : o(l);
        return s(JSON.stringify(n), u, c);
      } catch (e) {
        return r("LoadObject").withError(r("getErrorSafe")(e), {
          creatorModuleID: i.id,
        });
      }
    }
    l.default = u;
  },
  98,
);
