__d(
  "WAWebCachePolicies",
  ["WAWebLoadCachePolicy", "WAWebNoCachePolicy"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.policy === "LOAD" &&
          "delay" in t &&
          "id" in t
        ) {
          var n = t;
          return new (r("WAWebLoadCachePolicy"))(e, n);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.policy === "NONE" &&
          "id" in t
        ) {
          var o = t;
          return new (r("WAWebNoCachePolicy"))(e, o);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    l.createCachePolicy = e;
  },
  98,
);
