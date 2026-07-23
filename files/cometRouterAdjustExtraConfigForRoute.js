__d(
  "cometRouterAdjustExtraConfigForRoute",
  ["getTopMostRoute", "normalizeCometRouterUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      a === void 0 && (a = !0);
      var i = r("getTopMostRoute")(o),
        l = r("normalizeCometRouterUrl")(i.url),
        s = t.actorID,
        u = t.from,
        c = n.replace || !1,
        d = n.target;
      return (
        r("normalizeCometRouterUrl")(e) === l &&
          (a && ((c = !0), (d = "self")),
          o.pushViewStack != null && ((d = "self"), (u = "pushView"))),
        babelHelpers.extends({}, n, {
          dispatchedFrom: u,
          previousActorID: s,
          replace: c,
          target: d,
        })
      );
    }
    l.default = e;
  },
  98,
);
