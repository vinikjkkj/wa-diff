__d(
  "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
  ["CometHeroLogging", "getTopMostRouteInfo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      return s(
        e,
        t,
        n,
        o === !0
          ? void 0
          : r("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(),
      );
    }
    function s(e, t, n, o) {
      var a,
        i = t.hosted,
        l = t.pushViewStack,
        s = t.main;
      s = babelHelpers.extends({}, s, { navigationInteractionID: o });
      var u = {
          actorID: e.actorID,
          isBackgroundRoute: !1,
          tracePolicy: e.tracePolicy,
          url: e.url,
        },
        c = r("getTopMostRouteInfo")(t).referrer,
        d =
          (a = c == null ? void 0 : c.originalReferrer) != null
            ? a
            : {
                actorID: c == null ? void 0 : c.actorID,
                isBackgroundRoute: c == null ? void 0 : c.isBackgroundRoute,
                navigationType: c == null ? void 0 : c.navigationType,
                tracePolicy: c == null ? void 0 : c.tracePolicy,
                url: c == null ? void 0 : c.url,
              },
        m = babelHelpers.extends({}, u, {
          navigationType: n,
          originalReferrer: d,
        });
      if (l != null && l.length > 0) {
        var p = [].concat(l);
        return (
          (p[l.length - 1] = babelHelpers.extends({}, l[l.length - 1], {
            referrer: m,
          })),
          babelHelpers.extends({}, t, { main: s, pushViewStack: p })
        );
      } else
        return i != null
          ? babelHelpers.extends({}, t, {
              hosted: babelHelpers.extends({}, i, { referrer: m }),
              main: s,
            })
          : babelHelpers.extends({}, t, {
              main: babelHelpers.extends({}, s, { referrer: m }),
            });
    }
    l.default = e;
  },
  98,
);
