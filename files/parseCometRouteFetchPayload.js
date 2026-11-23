__d(
  "parseCometRouteFetchPayload",
  ["FBLogger", "justknobx", "replaceTransportMarkers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500,
      s = 8,
      u = new Map();
    function c(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function d(e, t) {
      if (e === t) return !0;
      if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
        return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function m(e, t) {
      if (!c(e) || !c(t)) return !1;
      var n = 0;
      for (var r in e) {
        if (!d(e[r], t[r])) return !1;
        n++;
      }
      for (var o in t) n--;
      return n === 0;
    }
    function p(e, t) {
      var n = 0;
      for (var r in e) {
        if (!m(e[r], t[r])) return !1;
        n++;
      }
      for (var o in t) n--;
      return n === 0;
    }
    function _(t, n) {
      if (!c(n)) return n;
      var r = u.get(t);
      (r == null
        ? ((r = []), u.size >= e && u.delete(u.keys().next().value))
        : u.delete(t),
        u.set(t, r));
      for (var o of r) if (p(n, o)) return o;
      return (r.length < s && r.push(n), n);
    }
    async function f(e) {
      if (e == null) return null;
      if (Array.isArray(e.route_match_infos))
        for (var t of e.route_match_infos)
          t != null && (t.routeParams = _(t.routePath, t.routeParams));
      if (e.type === "route_redirect") {
        var n = e.exports,
          o = e.redirect_url,
          a = e.redirect_result,
          i = e.route_match_infos;
        if (
          i != null &&
          Array.isArray(i) &&
          i.length > 0 &&
          n != null &&
          o != null
        ) {
          r("replaceTransportMarkers")({ relativeTo: null }, n);
          var l = await f(a);
          return {
            redirectResult: l,
            redirectUrl: o,
            routeMatchInfos: i,
            routeRedirect: n,
            type: "routeRedirect",
          };
        }
      }
      if (e.type === "route_definition") {
        var s = e.exports,
          u = e.route_match_infos;
        if (u != null && Array.isArray(u) && u.length > 0 && s != null)
          return (
            r("replaceTransportMarkers")({ relativeTo: null }, s),
            {
              routeDefinition: s,
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
            p = await m.load();
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
    }
    async function g(e) {
      if (e == null) return { error: !0 };
      if (e.error)
        return r("justknobx")._("138")
          ? { error: !0 }
          : { error: !1, result: null };
      var t = e.result != null ? f(e.result.background_result) : null,
        n = f(e.result),
        o = await Promise.all([t, n]),
        a = o[0],
        i = o[1];
      return { backgroundResult: a, error: !1, result: i };
    }
    l.default = g;
  },
  98,
);
