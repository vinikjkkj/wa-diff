__d(
  "parseCometRouteFetchPayload",
  [
    "FBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "justknobx",
    "replaceTransportMarkers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          if (e.type === "route_redirect") {
            var t = e.exports,
              n = e.redirect_url,
              o = e.redirect_result,
              a = e.route_match_infos;
            if (
              a != null &&
              Array.isArray(a) &&
              a.length > 0 &&
              t != null &&
              n != null
            ) {
              r("replaceTransportMarkers")({ relativeTo: null }, t);
              var i = yield s(o);
              return {
                redirectResult: i,
                redirectUrl: n,
                routeMatchInfos: a,
                routeRedirect: t,
                type: "routeRedirect",
              };
            }
          }
          if (e.type === "route_definition") {
            var l = e.exports,
              u = e.route_match_infos;
            if (u != null && Array.isArray(u) && u.length > 0 && l != null)
              return (
                r("replaceTransportMarkers")({ relativeTo: null }, l),
                {
                  routeDefinition: l,
                  routeMatchInfos: u,
                  timeSpentMetaData: e.time_spent_meta_data,
                  type: "routeDefinition",
                }
              );
          }
          if (e.type === "route_resolver") {
            var c = e.exports,
              d = e.route_match_infos;
            if (d != null && Array.isArray(d) && d.length > 0 && c != null) {
              r("replaceTransportMarkers")({ relativeTo: null }, c);
              var m = c.routeResolver,
                p = yield m.load();
              return {
                routeMatchInfos: d,
                routeResolver: p,
                timeSpentMetaData: e.time_spent_meta_data,
                type: "routeResolver",
              };
            }
          }
          return (
            r("FBLogger")("comet_infra").mustfix(
              "parseCometRouteFetchPayload encountered a bad payload result: %s",
              e,
            ),
            null
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t == null) return { error: !0 };
          if (t.error)
            return r("justknobx")._("138")
              ? { error: !0 }
              : { error: !1, result: null };
          var o = t.result != null ? s(t.result.background_result) : null,
            a = s(t.result),
            i = yield (e || (e = n("Promise"))).all([o, a]),
            l = i[0],
            u = i[1];
          return { backgroundResult: l, error: !1, result: u };
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
