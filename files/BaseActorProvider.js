__d(
  "BaseActorProvider",
  [
    "CometRelay",
    "CometRouterDispatcherContextFactory.react",
    "CometTransientDialogProvider.react",
    "FBLogger",
    "RelayEnvironmentFactoryProvider",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.relayEnvironmentFactory,
        a = e.actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING,
        i = e.children,
        l = e.initialActorID,
        u = e.readonly,
        c = e.scope,
        m = u === void 0 ? !1 : u,
        _ = d(l),
        f = _[0],
        g = _[1],
        h = r("usePrevious")(c),
        y = r("usePrevious")(l),
        C = o(
          "RelayEnvironmentFactoryProvider",
        ).useRelayEnvironmentFactoryWithFallback(n),
        b;
      t[0] !== a || t[1] !== f || t[2] !== C
        ? ((b = C.getForActorID(f, a)),
          (t[0] = a),
          (t[1] = f),
          (t[2] = C),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S = y != null && y !== l,
        R = h != null && h !== c;
      (S || R) && f !== l && g(l);
      var L;
      t[4] !== f || t[5] !== m
        ? ((L = {
            get: function () {
              return f;
            },
            set: function (t) {
              if (m === !0) {
                r("FBLogger")("groups_comet").mustfix(
                  "You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.",
                );
                return;
              }
              g(t);
            },
          }),
          (t[4] = f),
          (t[5] = m),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      t[7] !== i
        ? ((k = s.jsx(r("CometTransientDialogProvider.react"), {
            children: i,
          })),
          (t[7] = i),
          (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== f || t[10] !== k
        ? ((I = s.jsx(r("CometRouterDispatcherContextFactory.react"), {
            actorID: f,
            children: k,
          })),
          (t[9] = f),
          (t[10] = k),
          (t[11] = I))
        : (I = t[11]);
      var T;
      t[12] !== v || t[13] !== C.getForActor || t[14] !== I
        ? ((T = s.jsx(o("CometRelay").RelayEnvironmentProvider, {
            environment: v,
            getEnvironmentForActor: C.getForActor,
            children: I,
          })),
          (t[12] = v),
          (t[13] = C.getForActor),
          (t[14] = I),
          (t[15] = T))
        : (T = t[15]);
      var D;
      return (
        t[16] !== E || t[17] !== T
          ? ((D = s.jsx(p.Provider, { value: E, children: T })),
            (t[16] = E),
            (t[17] = T),
            (t[18] = D))
          : (D = t[18]),
        D
      );
    }
    ((l.ActorContext = p), (l.BaseActorProvider = _));
  },
  98,
);
