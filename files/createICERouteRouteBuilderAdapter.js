__d(
  "createICERouteRouteBuilderAdapter",
  ["URI", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      function o(o) {
        return t != null
          ? t.buildUri(o)
          : new (e || (e = r("URI")))(n == null ? void 0 : n.path).setQueryData(
              o,
            );
      }
      function a() {
        var e;
        return t != null
          ? t.getPath()
          : (e = n == null ? void 0 : n.path) != null
            ? e
            : "";
      }
      function i() {
        return t != null ? t.getPath() : r("nullthrows")(n);
      }
      return { buildUri: o, getNavigatable: i, getPath: a };
    }
    l.default = s;
  },
  98,
);
