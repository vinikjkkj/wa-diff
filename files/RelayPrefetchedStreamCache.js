__d(
  "RelayPrefetchedStreamCache",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "RelayAsyncStreamPool",
    "WebDriverConfig",
    "clearImmediate",
    "gkx",
    "setImmediateAcrossTransitions",
    "stableStringifyPrefetchedRelayVariablesWithActor",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("RelayAsyncStreamPool"))(),
      u = {},
      c = {},
      d = {},
      m = {};
    function p(e, t) {
      return Object.prototype.hasOwnProperty.call(m, e) ? m[e][t] : null;
    }
    function _(e, t, n) {
      (Object.prototype.hasOwnProperty.call(m, e) || (m[e] = {}),
        (m[e][t] = n));
    }
    function f(e, t) {
      if (Object.prototype.hasOwnProperty.call(u, e)) {
        if (Object.prototype.hasOwnProperty.call(u[e], t)) {
          var n = u[e][t].id;
          (n != null && s.clear(n), delete u[e][t]);
        }
        Object.keys(u[e]).length === 0 && delete u[e];
      }
      (Object.prototype.hasOwnProperty.call(d, e) &&
        (delete d[e][t], Object.keys(d[e]).length === 0 && delete d[e]),
        Object.prototype.hasOwnProperty.call(m, e) &&
          (delete m[e][t], Object.keys(m[e]).length === 0 && delete m[e]));
    }
    function g(e, t) {
      var n = p(e, t);
      n != null && (r("clearImmediate")(n), f(e, t));
    }
    function h(e, t) {
      p(e, t) ||
        _(
          e,
          t,
          r("setImmediateAcrossTransitions")(function () {
            f(e, t);
          }),
        );
    }
    function y(e, t) {
      var n, r;
      return (n = (r = u[e]) == null || (r = r[t]) == null ? void 0 : r.id) !=
        null
        ? n
        : null;
    }
    function C(e, t, n, r, o) {
      (Object.prototype.hasOwnProperty.call(u, e) || (u[e] = {}),
        Object.prototype.hasOwnProperty.call(d, e) || (d[e] = {}),
        (d[e][t] = !1),
        (u[e][t] = { id: n, variables: o, actorID: r }));
    }
    function b(e, t, n) {
      var o = r("stableStringifyPrefetchedRelayVariablesWithActor")(e, n);
      h(t, o);
    }
    function v(e, t) {
      if (
        !S() ||
        e == null ||
        !Object.prototype.hasOwnProperty.call(c, e) ||
        Object.prototype.hasOwnProperty.call(u, t)
      )
        return t;
      var n = c[e];
      return Object.prototype.hasOwnProperty.call(u, n) ? n : t;
    }
    function S() {
      if (!r("WebDriverConfig").isJestE2ETestRun) return !1;
      if (r("gkx")("15236")) return !0;
      var e = r("WebDriverConfig").experiments;
      return e == null ? !1 : e.includes("relay_e2e_query_name_cache");
    }
    function R(t, n, o, a, i, l) {
      l === void 0 && (l = !1);
      var c = r("stableStringifyPrefetchedRelayVariablesWithActor")(t, o),
        m = y(n, c);
      if (m != null) return (l || (d[n][c] = !0), s.subscribe(m, a));
      if (
        u[n] &&
        Object.values(d[n]).filter(function (e) {
          return !e;
        }).length > 0
      ) {
        var p = Object.keys(u[n]),
          _ = u[n][p[0]],
          f = I(_, t, o);
        r("FBLogger")("RelayQueryPreloader")
          .addMetadata("RELAY_PRELOADER", "QUERY_ID", n)
          .addMetadata(
            "RELAY_PRELOADER",
            "QUERY_NAME",
            i != null ? i : "unknown",
          )
          .addMetadata("RELAY_PRELOADER", "MISMATCH", f)
          .addToCategoryKey(i != null ? i : n)
          .warn(
            "RelayPrefetchedStreamCache.subscribe(): Could not find preloader for query with actor ID and variables: `%s`\n\nbut had data for that query with actorID/variables:\n `%s`\n\n Mismatch fields : %s \n",
            c,
            p.join("||"),
            f,
          );
      }
      !(e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        !(
          (e || (e = r("ExecutionEnvironment"))).isInWorker ||
          (e || (e = r("ExecutionEnvironment"))).isInSharedWorker
        ) &&
        r("FBLogger")("RelayQueryPreloader")
          .addMetadata("RELAY_PRELOADER", "QUERY_ID", n)
          .addMetadata(
            "RELAY_PRELOADER",
            "QUERY_NAME",
            i != null ? i : "unknown",
          )
          .addToCategoryKey(i != null ? i : n)
          .mustfix(
            "RelayPrefetchedStreamCache:.get: Missing relay query preloader for query: %s with actorID and variables %s. Make sure your relay preloaders are configured. https://fburl.com/comet_preloading",
            i != null ? i : n,
            c,
          );
      var g = !1,
        h = {
          unsubscribe: function () {
            g = !0;
          },
        };
      return (a.start(h), g || a.complete(), h);
    }
    function L(e, t) {
      var n = null,
        o = 0,
        a = null;
      if (t != null) {
        var i;
        ((n = t.result),
          (o = (i = t.sequence_number) != null ? i : 0),
          (a = t.complete),
          typeof a != "boolean" &&
            r("FBLogger")("RelayQueryPreloader").mustfix(
              "RelayPrefetchedStreamCache:.next: Expected GraphQL preloader `complete` field to be a boolean, got `%s` for preloader `%s`.",
              String(a),
              e,
            ));
      }
      n != null && s.next(e, n, o);
      var l = n == null || a !== !1;
      l && s.complete(e, o + 1);
    }
    function E(e, t, n) {
      (n === void 0 && (n = 0),
        n === 0 ? s.forceError(e, t) : s.error(e, t, n));
    }
    function k(e, t, n, o, a) {
      var i = r("stableStringifyPrefetchedRelayVariablesWithActor")(o, n);
      g(t, i);
      var l = y(t, i);
      (l != null &&
        (r("FBLogger")("RelayQueryPreloader")
          .addMetadata("RELAY_PRELOADER", "QUERY_ID", t)
          .warn(
            "RelayPrefetchedStreamCache::registerPreloader(): You must not register more than one preloader for the query with ID `%s` and actorID/variables `%s`. This could result in stale data.",
            t,
            r("stableStringifyPrefetchedRelayVariablesWithActor")(o, n),
          ),
        s.forceComplete(l),
        f(t, i)),
        C(t, i, e, o, n),
        S() && a != null && (c[a] = t));
    }
    function I(e, t, n) {
      if (e == null) return "";
      var r = e.actorID,
        o = e.variables,
        a = [];
      r != t && a.push("actorID");
      for (var i = Object.keys(o), l = 0; l < i.length; l++) {
        var s = i[l],
          u = o[s] != null ? JSON.stringify(o[s]) : "",
          c = n[s] != null ? JSON.stringify(n[s]) : "";
        u != c && a.push(s);
      }
      for (var d = Object.keys(n), m = 0; m < d.length; m++) {
        var p = d[m],
          _ = o[p];
        _ == null && n[p] != null && a.push(p);
      }
      return a.toString();
    }
    ((l.clear = b),
      (l.transformQueryIDForE2ETest = v),
      (l.isE2EQueryNameCacheExperimentRunning = S),
      (l.subscribe = R),
      (l.next = L),
      (l.error = E),
      (l.registerPreloader = k));
  },
  98,
);
