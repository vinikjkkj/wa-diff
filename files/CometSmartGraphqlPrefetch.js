__d(
  "CometSmartGraphqlPrefetch",
  ["SmartGraphqlPrefetchLabelFalcoEvent", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        CometMarketplaceRootQuery: "CometMarketplaceRootQuery",
        ProfileCometTopAppSectionQuery: "ProfileCometTopAppSectionQuery",
      },
      c = r("gkx")("6756")
        ? {
            "comet.marketplace.home":
              ((e = {}), (e[u.CometMarketplaceRootQuery] = null), e),
          }
        : {},
      d = r("gkx")("6840")
        ? {
            "comet.profile.collection.friends":
              ((s = {}), (s[u.ProfileCometTopAppSectionQuery] = null), s),
          }
        : {},
      m = babelHelpers.extends({}, c, d),
      p = new Set();
    function _(e) {
      if (r("gkx")("6754") && e != null) {
        var t = m[e];
        if (t != null) {
          var n = function (n) {
            n != null &&
              r("SmartGraphqlPrefetchLabelFalcoEvent").log(function () {
                return { label: !0, prediction_id: n, usecase: e };
              });
          };
          for (var o of Object.values(t)) n(o);
        }
        delete m[e];
      }
    }
    function f(e, t) {
      for (var n in m) e in m[n] && (m[n][e] = t);
    }
    function g(e) {
      return r("gkx")("6754") ? Object.prototype.hasOwnProperty.call(u, e) : !1;
    }
    function h(e) {
      return !g(e) || p.has(e) ? !1 : (p.add(e), !0);
    }
    ((l.logPrefetchedQueries = _),
      (l.storePredictionId = f),
      (l.isSmartPrefetchingEnabled = g),
      (l.shouldAddPrefetchTag = h));
  },
  98,
);
