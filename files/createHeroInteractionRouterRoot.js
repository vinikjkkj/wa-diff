__d(
  "createHeroInteractionRouterRoot",
  [
    "CancelablePromise",
    "CometHeroHoldTrigger.react",
    "CometHeroInteractionWithDiv.react",
    "ExecutionEnvironment",
    "FBLogger",
    "NavigationTracing",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useLayoutEffect,
      m = c.useState,
      p = function (t, n) {
        n &&
          Object.keys(n).forEach(function (e) {
            t.addMetadata(e, n[e]);
          });
      };
    function _(t) {
      var n = null,
        a = null;
      function l(e) {
        var t = e.promise,
          n = m(!0),
          o = n[0],
          a = n[1];
        return (
          d(
            function () {
              a(!0);
              var e = new (r("CancelablePromise"))(t),
                n = function () {
                  a(!1);
                };
              return (
                r("promiseDone")(e.getPromise(), n, n),
                function () {
                  (n(), e.cancel());
                }
              );
            },
            [t, a],
          ),
          u.jsx(r("CometHeroHoldTrigger.react"), {
            description: "RouteFetch",
            hold: o,
          })
        );
      }
      l.displayName = l.name + " [from " + i.id + "]";
      function s(e) {
        var t,
          o,
          i,
          s,
          c = m({
            interactionID: (t = a) == null ? void 0 : t.interactionID,
            tracePolicy:
              (o = (i = a) == null ? void 0 : i.tracePolicy) != null
                ? o
                : e.defaultTracePolicy,
            routeFetchPromise: null,
          }),
          p = c[0],
          _ = c[1],
          f = p.routeFetchPromise;
        return (
          d(function () {
            return (
              n &&
                r("FBLogger")("ws_tools").mustfix(
                  "more than once instance of HeroInteractionRouterRoot mounted, this is not supported",
                ),
              (n = _),
              function () {
                n = null;
              }
            );
          }, []),
          u.jsxs(r("CometHeroInteractionWithDiv.react"), {
            interactionDesc:
              (s = p.tracePolicy) != null ? s : e.defaultTracePolicy,
            interactionUUID: p.interactionID,
            xstyle: e.xstyle,
            children: [e.children, f != null && u.jsx(l, { promise: f })],
          })
        );
      }
      s.displayName = s.name + " [from " + i.id + "]";
      var c = function (n) {
          if (a)
            return (
              r("FBLogger")("ws_tools").mustfix(
                "startInitialLoad called multiple times, this is not supported",
              ),
              null
            );
          var e = null,
            i = o("NavigationTracing").traceInitialLoad(
              {
                interactionClass: "contingent",
                qplEvent: n.qplEvent,
                tracePolicy: n.tracePolicy,
                traceType: "INITIAL_LOAD",
                cfg: n.initialLoadTraceConfig,
                namespace: t == null ? void 0 : t.namespace,
              },
              function (t) {
                (p(t, n.metadata), (e = t));
              },
            );
          return (
            (a = {
              tracePolicy: n.tracePolicy,
              qplEvent: n.qplEvent,
              interactionID: i,
              initialLoadTraceConfig: n.initialLoadTraceConfig,
            }),
            e
          );
        },
        _ = function (a) {
          var e = null;
          if (n) {
            var i = o("NavigationTracing").traceNavigation(
              {
                interactionClass: "contingent",
                qplEvent: a.qplEvent,
                tracePolicy: a.tracePolicy,
                traceType: "NAVIGATION",
                namespace: t == null ? void 0 : t.namespace,
              },
              function (t) {
                (p(t, a.metadata), (e = t));
              },
            );
            return (
              n({
                tracePolicy: a.tracePolicy,
                interactionID: i,
                routeFetchPromise: a.routeFetchPromise,
              }),
              e
            );
          } else
            return (
              r("FBLogger")("ws_tools").mustfix(
                "startNavigation called before interaction root component mounted, interaction trace will be lost",
              ),
              null
            );
        };
      return {
        Component: u.memo(s),
        startInitialLoad: (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? c
          : function (e) {
              return null;
            },
        startNavigation: (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? _
          : function (e) {
              return null;
            },
      };
    }
    l.default = _;
  },
  98,
);
