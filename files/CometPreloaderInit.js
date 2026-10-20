__d(
  "CometPreloaderInit",
  [
    "FBLogger",
    "LSRelayEntryPointQueryPreload",
    "RelayAPIConfig",
    "RelayPrefetchedStreamCache",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [];
    function u(e, t) {
      try {
        var n,
          a = (n = e.actorID) != null ? n : r("RelayAPIConfig").actorID;
        o("LSRelayEntryPointQueryPreload").preloadQueryOnQueryAstLoad(
          t.getEnvironment({ actorID: a }),
          e.queryID,
          e.variables,
        );
      } catch (t) {
        r("FBLogger")("comet_infra", "entrypoint_query_ast_preload_failure")
          .catching(r("getErrorSafe")(t))
          .warn(
            "Failed to start eager execution for EntryPoint query `%s`",
            e.queryID,
          );
      }
    }
    function c(t, n) {
      var a,
        i,
        l = (a = t.actorID) != null ? a : r("RelayAPIConfig").actorID;
      if (
        (((i = t.hasServerSource) == null || i) &&
          o("RelayPrefetchedStreamCache").registerPreloader(
            t.preloaderID,
            t.queryID,
            t.variables,
            l,
            t.queryName,
          ),
        t.preloadOnQueryAstLoad === !0)
      ) {
        var c = e;
        if (c == null) {
          n && s.push(t);
          return;
        }
        u(t, c);
      }
    }
    function d(e) {
      c(e, !1);
    }
    function m(e, t) {
      if ((t === void 0 && (t = !1), e && e.length)) for (var n of e) c(n, t);
    }
    function p(t) {
      e = t;
      var n = s.splice(0);
      for (var r of n) u(r, t);
    }
    ((l.initPreloader = d),
      (l.initPreloaders = m),
      (l.initPreloadQueryExecutions = p));
  },
  98,
);
