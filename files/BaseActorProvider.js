__d(
  "BaseActorProvider",
  [
    "CometRelay",
    "CometRouterDispatcherContextFactory.react",
    "CometTransientDialogProvider.react",
    "FBLogger",
    "RelayEnvironmentFactoryProvider",
    "react",
    "usePrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState;
    function m(e) {
      return function () {
        throw r("FBLogger")("groups_comet").mustfixThrow(
          "You are %s the Actor from a React component that is not a descendent of ActorProvider.",
          e,
        );
      };
    }
    var p = s.createContext({ get: m("reading"), set: m("setting") });
    function _(e) {
      var t = e.relayEnvironmentFactory,
        n = e.actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING,
        a = e.children,
        i = e.initialActorID,
        l = e.readonly,
        u = l === void 0 ? !1 : l,
        m = e.scope,
        _ = m === void 0 ? (_ != null ? _ : null) : m,
        f = d(i),
        g = f[0],
        h = f[1],
        y = r("usePrevious")(_),
        C = r("usePrevious")(i),
        b = o(
          "RelayEnvironmentFactoryProvider",
        ).useRelayEnvironmentFactoryWithFallback(t),
        v = b.getForActorID(g, n),
        S = C != null && C !== i,
        R = y != null && y !== _;
      (S || R) && g !== i && h(i);
      var L = c(
        function () {
          return {
            get: function () {
              return g;
            },
            set: function (t) {
              if (u === !0) {
                r("FBLogger")("groups_comet").mustfix(
                  "You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.",
                );
                return;
              }
              h(t);
            },
          };
        },
        [g, u],
      );
      return s.jsx(p.Provider, {
        value: L,
        children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
          environment: v,
          getEnvironmentForActor: b.getForActor,
          children: s.jsx(r("CometRouterDispatcherContextFactory.react"), {
            actorID: g,
            children: s.jsx(r("CometTransientDialogProvider.react"), {
              children: a,
            }),
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.ActorContext = p),
      (l.BaseActorProvider = _));
  },
  98,
);
