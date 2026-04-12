__d(
  "WAWebHeroInteraction.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebErrorBoundaryInstrumented.react",
    "hero-tracing",
    "react",
    "useWAWebCometInteractionTracing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.description,
        a = e.enableHoldTrigger,
        i = a === void 0 ? !0 : a,
        l = e.pageletName,
        u = e.policy,
        c = r("useWAWebCometInteractionTracing")(u);
      return s.jsx(o("hero-tracing").HeroInteraction, {
        interactionDesc: n,
        interactionUUID: c.traceIdState,
        pageletName: l != null ? l : n,
        renderTrackedDOMElement: function (o) {
          return s.jsxs(r("WAWebErrorBoundaryInstrumented.react"), {
            name: "hero-interaction",
            children: [
              i &&
                s.jsx(r("CometHeroHoldTrigger.react"), {
                  description: n,
                  hold: c.interactionIsInFlight,
                }),
              t(o, c),
            ],
          });
        },
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
