__d(
  "routeBuilderUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.split("/");
      return t
        .filter(function (e) {
          return e !== "";
        })
        .map(function (e) {
          var t = e.split(/{|}/);
          if (t.length < 3) return { isToken: !1, part: e };
          var n = t[0],
            r = t[1],
            o = t[2],
            a = r[0] === "?",
            i = r[a ? 1 : 0] === "*",
            l = r.substring((a ? 1 : 0) + (i ? 1 : 0));
          return {
            isToken: !0,
            optional: a,
            catchAll: i,
            prefix: n,
            suffix: o,
            token: l,
          };
        });
    }
    i.getPathParts = e;
  },
  66,
);
