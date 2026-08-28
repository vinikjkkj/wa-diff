__d(
  "AdsInteractionTriggerEmitter",
  [
    "AdsInteractionTrigger",
    "AdsInteractionTriggerConstants",
    "AdsInteractionTriggerEmitterUtils",
    "AdsInteractionTriggerEvent",
    "AdsInteractionTriggerTrackedKeysConfig",
    "AdsInteractionTriggerTracker",
    "AdsInteractionTriggerUtils",
    "AdsPerfInteractionsController",
    "FBLogger",
    "InteractionTracing",
    "TimedOnceFunc",
    "areEqual",
    "first",
    "gkx",
    "performanceAbsoluteNow",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null;
    r("requireWeak")("hyperionCore", function (e) {
      u = e;
    });
    var c = 75,
      d = 500,
      m = 3e3;
    function p(e) {
      var t = e.interaction,
        n = e.tracePolicy,
        r = e.triggerContext;
      return r != null
        ? r.key
        : o("AdsInteractionTriggerUtils").getInteractionKeyFromPerfInteraction(
            t,
            n,
          );
    }
    var _ = (function () {
      function e(e, t, n) {
        var r = this;
        ((this.uiEvent = e),
          (this.$1 = new (o("TimedOnceFunc").TimedOnceFunc)(function () {
            t(r.uiEvent);
          }, n)));
      }
      var t = e.prototype;
      return (
        (t.cancel = function () {
          this.$1.cancel();
        }),
        e
      );
    })();
    function f(t, n) {
      if (n.target.triggerContext.key == null) return null;
      var a = n.target.triggerContext,
        i = r("AdsInteractionTriggerTrackedKeysConfig")[a.key],
        l = o("AdsInteractionTriggerTracker").getCurrentInteraction(a.key),
        s = l == null ? void 0 : l.info.triggerContext,
        u = (e || (e = r("performanceAbsoluteNow")))();
      o("AdsInteractionTriggerTracker").startInteraction({
        event: t,
        key: a.key,
        interaction: i.interaction,
        tracePolicy: i.tracePolicySegment,
        startTime: u,
        eventTime: u,
        confidence: o("AdsInteractionTriggerConstants").EVENT_CONFIDENCE_RATIO[
          t
        ],
        triggerContext: b(a, s),
      });
    }
    var g = null,
      h = null;
    function y() {
      var e;
      ((e = g) == null || e.cancel(), (g = null));
    }
    function C() {
      var e;
      ((e = h) == null || e.cancel(), (h = null));
    }
    function b(e, t) {
      var n,
        r,
        a,
        i,
        l =
          (n =
            (r = e.objectType) != null
              ? r
              : t == null
                ? void 0
                : t.objectType) != null
            ? n
            : o("AdsInteractionTriggerEmitterUtils").getSelectedObjectType(),
        s =
          (a =
            (i = e.objectIDs) != null ? i : t == null ? void 0 : t.objectIDs) !=
          null
            ? a
            : o("AdsInteractionTriggerEmitterUtils").getSelectedObjectIDs(l);
      return babelHelpers.extends({}, e, { objectType: l, objectIDs: s });
    }
    function v(e) {
      var t,
        n = e.target.triggerContext;
      if (n.key != null)
        if (
          g == null ||
          !(s || (s = r("areEqual")))(
            n,
            (t = g) == null ? void 0 : t.uiEvent.target.triggerContext,
          )
        ) {
          y();
          var a = b(n),
            i = o("AdsInteractionTriggerTracker")
              .getCurrentInteractions()
              .filter(function (e) {
                return (
                  e.info.event === r("AdsInteractionTriggerEvent").MOUSEOVER &&
                  !(s || (s = r("areEqual")))(e.info.triggerContext, a)
                );
              });
          (i.forEach(function (e) {
            o("AdsInteractionTriggerTracker").endInteraction({
              key: e.info.key,
              status: "CANCEL",
            });
          }),
            (g = new _(
              e,
              function (e) {
                f(r("AdsInteractionTriggerEvent").MOUSEOVER, e);
              },
              c,
            )));
        } else g.uiEvent = e;
    }
    function S(e) {
      (C(), v(e));
    }
    function R(e) {
      var t = r("AdsInteractionTriggerTrackedKeysConfig")[e];
      return (t == null ? void 0 : t.delayedCacheEjection) === !0 ? m : d;
    }
    function L(e) {
      (y(), C());
      var t = e.target.triggerContext.key;
      t != null &&
        (h = new _(
          e,
          function (e) {
            o("AdsInteractionTriggerTracker").endInteractionIfSpeculative({
              key: e.target.triggerContext.key,
              status: "CANCEL",
            });
          },
          R(t),
        ));
    }
    function E(e) {
      (y(), C(), f(r("AdsInteractionTriggerEvent").MOUSEDOWN, e));
    }
    function k(e) {
      (y(), C(), f(r("AdsInteractionTriggerEvent").CLICK, e));
    }
    function I(e) {
      var t, n;
      (g != null &&
        ((t = g) == null ? void 0 : t.uiEvent.target.triggerContext.key) ===
          e.key &&
        y(),
        h != null &&
          ((n = h) == null ? void 0 : n.uiEvent.target.triggerContext.key) ===
            e.key &&
          C());
    }
    (o("AdsInteractionTrigger").onInteractionStart.add(I),
      o("AdsInteractionTrigger").onInteractionEnd.add(I));
    var T = {
        mouseClick: k,
        MOUSE_OVER_EVENT_ACTIVATION_DELAY: c,
        MOUSE_OUT_EVENT_ACTIVATION_DELAY: d,
      },
      D = new WeakMap();
    function x(e, t) {
      var n;
      return JSON.stringify((n = t()) != null ? n : {});
    }
    function $(e, t) {
      var n,
        o = D.get(e),
        a = !1;
      if (
        (o
          ? ((o.id = x(e, t)), (o.triggerContextGetter = t))
          : ((o = { id: x(e, t), triggerContextGetter: t }), (a = !0)),
        D.set(e, o),
        (n = u) == null ||
          n.setVirtualPropertyValue(e, "ignoreInteractivity", !1),
        a)
      ) {
        var i = function (o, a) {
          e.addEventListener(
            o,
            function (n) {
              var o = D.get(e);
              if (!o) {
                var i;
                r("FBLogger")("AdsInteractionTrigger").warn(
                  "[IT] Mouse event without a mapped elementInfo for <%s> context=%s",
                  e.tagName,
                  JSON.stringify((i = t()) != null ? i : {}),
                );
                return;
              }
              if (r("gkx")("16827")) {
                var l,
                  s = (l = o.triggerContextGetter()) != null ? l : [];
                s.forEach(function (e) {
                  if (e != null) {
                    var t = { target: { id: o.id, triggerContext: e } };
                    a(t);
                  }
                });
              } else {
                var u = o.triggerContextGetter();
                if (u == null) return;
                var c = Array.isArray(u) ? r("first")(u) : u;
                if (c == null) return;
                var d = { target: { id: o.id, triggerContext: c } };
                a(d);
              }
            },
            { capture: !0, passive: !0 },
          );
        };
        (i("mouseenter", S),
          i("mouseleave", L),
          i("mousedown", E),
          i("click", k));
      }
    }
    function P(t) {
      var n,
        a = t.callsite,
        l = t.interaction,
        u = t.interactionID,
        c = t.tracePolicy,
        d = t.triggerContext,
        m = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(u);
      if (m == null) {
        r("FBLogger")("AdsInteractionTrigger").warn(
          "[IT] Interaction %s started without Trace API",
          String(l),
        );
        return;
      }
      o("AdsInteractionTrigger").isDebugEnabled() &&
        r("FBLogger")("AdsInteractionTrigger").debug(
          "[IT] real start signal from Hero Tracing - interaction: %s, tracePolicy: %s",
          String(l),
          c,
        );
      var _ = p({ triggerContext: d, interaction: l, tracePolicy: c });
      if (_ != null) {
        var f =
            (n = o("AdsInteractionTriggerTracker").getCurrentInteraction(_)) ==
            null
              ? void 0
              : n.info.triggerContext,
          g = (e || (e = r("performanceAbsoluteNow")))(),
          h =
            d != null
              ? b(d, f)
              : f != null
                ? b(f)
                : {
                    key: _,
                    source: i.id,
                    objectType: o(
                      "AdsInteractionTriggerEmitterUtils",
                    ).getSelectedObjectType(),
                    objectIDs: o(
                      "AdsInteractionTriggerEmitterUtils",
                    ).getSelectedObjectIDs(),
                  };
        (o("AdsInteractionTriggerTracker").startInteraction({
          event: r("AdsInteractionTriggerEvent").CODE,
          key: _,
          interaction: l,
          tracePolicy: c,
          eventTime: g,
          startTime: g,
          confidence: o("AdsInteractionTriggerConstants")
            .EVENT_CONFIDENCE_RATIO[r("AdsInteractionTriggerEvent").CODE],
          triggerContext: h,
          realStartTime: g,
          interactionID: u,
          callsite: a,
        }),
          m.onCompleteSync(function (e) {
            var t = r("InteractionTracing").getTraceStatus(e);
            if (h != null) {
              var n = {
                  objectType: o(
                    "AdsInteractionTriggerEmitterUtils",
                  ).getSelectedObjectType(),
                  objectIDs: o(
                    "AdsInteractionTriggerEmitterUtils",
                  ).getSelectedObjectIDs(),
                },
                a = Object.keys(n).filter(function (e) {
                  return (
                    h[e] != null && !(s || (s = r("areEqual")))(h[e], n[e])
                  );
                });
              if (a.length > 0) {
                var i,
                  u = f != null ? "speculative" : "real";
                ((i = o("AdsInteractionTriggerTracker").getCurrentInteraction(
                  _,
                )) == null ||
                  i.annotateTriggerContextMismatch(a, h, n, {
                    contextMismatchType: u,
                  }),
                  r("FBLogger")("AdsInteractionTrigger").warn(
                    "[IT] Interaction %s has a mismatch on triggerContext for keys: %s (%s)",
                    _,
                    a.join(","),
                    u,
                  ));
              }
            }
            N({ interaction: l, tracePolicy: c, traceResult: t });
          }));
      }
    }
    function N(e) {
      var t = e.interaction,
        n = e.tracePolicy,
        a = e.traceResult;
      o("AdsInteractionTrigger").isDebugEnabled() &&
        r("FBLogger")("AdsInteractionTrigger").debug(
          "[IT] real end signal from Hero Tracing - interaction: %s, tracePolicy: %s, traceResult: %s",
          String(t),
          n,
          a,
        );
      var i = p({ interaction: t, tracePolicy: n });
      i != null &&
        o("AdsInteractionTriggerTracker").endInteraction({ key: i, status: a });
    }
    ((l.__forTests = T),
      (l.addElement = $),
      (l.startRealInteraction = P),
      (l.endRealInteraction = N));
  },
  98,
);
