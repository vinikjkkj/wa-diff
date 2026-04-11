__d(
  "WAWebHeroInteraction.react",
  [
    "CometHeroHoldTrigger.react",
    "WAWebErrorBoundaryInstrumented.react",
    "hero-tracing",
    "react",
    "react-compiler-runtime",
    "useWAWebCometInteractionTracing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        a = e.description,
        i = e.enableHoldTrigger,
        l = e.pageletName,
        u = e.policy,
        c = i === void 0 ? !0 : i,
        d = r("useWAWebCometInteractionTracing")(u),
        m = l != null ? l : a,
        p;
      t[0] !== n || t[1] !== a || t[2] !== c || t[3] !== d
        ? ((p = function (t) {
            return s.jsxs(r("WAWebErrorBoundaryInstrumented.react"), {
              name: "hero-interaction",
              children: [
                c &&
                  s.jsx(r("CometHeroHoldTrigger.react"), {
                    description: a,
                    hold: d.interactionIsInFlight,
                  }),
                n(t, d),
              ],
            });
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = c),
          (t[3] = d),
          (t[4] = p))
        : (p = t[4]);
      var _;
      return (
        t[5] !== a || t[6] !== d.traceIdState || t[7] !== m || t[8] !== p
          ? ((_ = s.jsx(o("hero-tracing").HeroInteraction, {
              interactionDesc: a,
              interactionUUID: d.traceIdState,
              pageletName: m,
              renderTrackedDOMElement: p,
            })),
            (t[5] = a),
            (t[6] = d.traceIdState),
            (t[7] = m),
            (t[8] = p),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    l.default = u;
  },
  98,
);
