__d(
  "AdsPerfInteractionVCHolder",
  [
    "AdsPerfInteractionConstants",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionsController",
    "InteractionTracingMetrics",
    "Promise",
    "promiseDone",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = function (t) {
        return "Intentional VC Holder: " + (t != null ? t : "default");
      };
    function c(t) {
      return new (e || (e = n("Promise")))(function (e) {
        return r("setTimeout")(e, t);
      });
    }
    function d(t) {
      var r,
        o = s.get(t);
      return o == null
        ? null
        : (o.promise == null &&
            (o.promise = new (e || (e = n("Promise")))(function (e) {
              o.resolve = e;
            })),
          (r = o.promise) != null ? r : null);
    }
    function m(e, t) {
      var n = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
        e,
      );
      n != null && p(e, t, n);
    }
    function p(t, a, i) {
      var l,
        m,
        p = r("InteractionTracingMetrics").get(t),
        _ = d(a),
        f =
          (l = (m = s.get(a)) == null ? void 0 : m.description) != null ? l : a,
        g = p == null ? void 0 : p.vcTracker;
      if (g != null && _ != null) {
        i.addLoomTraceEndDependency(_);
        var h = u(f);
        (g.lock(h),
          r("promiseDone")(
            (e || (e = n("Promise")))
              .race([
                c(
                  o("AdsPerfInteractionConstants").ADS_DEFAULT_TRACING_CONFIG
                    .timeout - 5e3,
                ),
                _,
              ])
              .then(function () {
                (g.unlock(h),
                  r("InteractionTracingMetrics").addMarkerPoint(
                    t,
                    "VC holder unlocked " + f,
                    "AppTiming",
                  ));
              }),
          ));
      }
    }
    function _(e, t, n) {
      (s.set(t, {
        interactionID: e,
        description: n,
        promise: null,
        resolve: null,
      }),
        m(e, t));
    }
    function f(e, t, n) {
      var r = s.get(t);
      if (r != null && (r == null ? void 0 : r.resolve) != null) {
        r.resolve({ instanceID: t, interactionID: e });
        var a =
          n != null
            ? babelHelpers.extends({}, n, { has_intentional_VC_holder: !0 })
            : { has_intentional_VC_holder: !0 };
        o(
          "AdsPerfInteractionLogDataUtil",
        ).addHeroTracingInteractionCustomMetadata(e, a);
      }
      s.delete(t);
    }
    ((l.startVCHolder = _), (l.endVCHolder = f));
  },
  98,
);
