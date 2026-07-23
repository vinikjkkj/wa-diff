__d(
  "cometRouterPreloadEntrypoint",
  [
    "cometRouterBuildEntrypointContainersForRoute",
    "cometRouterBuildEnvironmentProviderFromRoute",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l, s) {
      var u = a.navigationType,
        c = a.passthroughProps,
        d = a.prefetcher,
        m = a.previousActorID,
        p = e.target.route,
        _ = r("cometRouterBuildEntrypointContainersForRoute")(
          e,
          u,
          c,
          d,
          l,
          function (e) {
            return r("cometRouterBuildEnvironmentProviderFromRoute")(e, m, o);
          },
          s,
          t,
          n,
          i(p),
        ),
        f = _.mainEntryPointContainer,
        g = _.mainTimeSpentMetaData,
        h = _.modalEntryPointContainer,
        y = _.modalTimeSpentMetaData;
      return (
        f == null || f.loadIfNeeded(),
        h == null || h.loadIfNeeded(),
        {
          mainEntryPointContainer: f,
          mainTimeSpentMetaData: g,
          modalEntryPointContainer: h,
          modalTimeSpentMetaData: y,
        }
      );
    }
    l.default = e;
  },
  98,
);
