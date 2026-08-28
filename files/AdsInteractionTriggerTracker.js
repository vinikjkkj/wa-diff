__d(
  "AdsInteractionTriggerTracker",
  [
    "AdsInteractionTrigger",
    "AdsInteractionTriggerConstants",
    "AdsInteractionTriggerEvent",
    "AdsInteractionTriggerTrackedKeys",
    "AdsManagerAppConfig",
    "AdsQPLEvent",
    "CurrentUser",
    "FBLogger",
    "TimedOnceFunc",
    "areEqual",
    "first",
    "performanceAbsoluteNow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 5e3,
      c = new Map(),
      d = new Map(),
      m = 0,
      p = (function () {
        function t(e) {
          var t,
            n = this,
            a = (t = d.get(e.key)) != null ? t : 0;
          (a++,
            d.set(e.key, a),
            (this.$3 = a),
            (this.info = e),
            (this.$1 = o("AdsQPLEvent").event(
              r("qpl")._(41486549, "8992"),
              m++,
            )),
            this.$1.start(e.startTime),
            this.$1.point("FIRST_EVENT"),
            this.$1.annotate({ string: { first_event: e.event } }),
            (this.$2 = [this.info.event]),
            (this.$4 = new (o("TimedOnceFunc").TimedOnceFunc)(function () {
              (o("AdsInteractionTrigger").isDebugEnabled() &&
                r("FBLogger")("AdsInteractionTrigger").debug(
                  "[IT] Speculative TIMEOUT interaction %s",
                  n.info.key,
                ),
                n.$1.annotate({ string: { status: "TIMEOUT" } }),
                b({ key: n.info.key, status: "TIMEOUT" }));
            }, u)));
        }
        var n = t.prototype;
        return (
          (n.receiveEvent = function (t) {
            t === r("AdsInteractionTriggerEvent").CODE
              ? this.$4.cancel()
              : this.$4.delay();
          }),
          (n.receiveVisibilityEvent = function (n) {
            if (
              (n === "lost" || n === "absent") &&
              (this.$1.point("LOST_FOCUS"),
              this.lostFocusTimestamp == null &&
                ((this.lostFocusTimestamp = (
                  e || (e = r("performanceAbsoluteNow"))
                )()),
                this.$1.annotate({ bool: { lost_focus: !0 } })),
              this.info.confidence <
                o("AdsInteractionTriggerConstants").REAL_INTERACTION_CONFIDENCE)
            ) {
              b({ key: this.info.key, status: "CANCEL" });
              return;
            }
          }),
          (n.mergeInfo = function (t) {
            ((this.info = o("AdsInteractionTrigger").mergeInteractionStartInfo(
              this.info,
              t,
            )),
              this.$2.push(this.info.event),
              this.$1.point(
                o("AdsInteractionTriggerConstants").EVENT_QPL_POINT[
                  this.info.event
                ],
              ),
              t.event === r("AdsInteractionTriggerEvent").CODE &&
                (this.$1.point("REAL_SCENARIO_START", {
                  timestamp: t.realStartTime,
                }),
                this.$1.annotate({
                  string: { interaction_id: t.interactionID },
                })));
          }),
          (n.getAllEvents = function () {
            return this.$2;
          }),
          (n.addRouteTransitionPoint = function (t) {
            this.$1.point(t);
          }),
          (n.annotateTriggerContextMismatch = function (t, n, r, o) {
            (this.$1.annotate({
              bool: { with_trigger_context_mismatch: !0 },
              string: { trigger_context_mismatch_type: o.contextMismatchType },
            }),
              t.includes("objectType") &&
                this.$1.annotate({
                  string: {
                    mismatch_object_type_speculative: n.objectType,
                    mismatch_object_type_current: r.objectType,
                  },
                }),
              t.includes("objectIDs") &&
                this.$1.annotate({
                  string_array: {
                    mismatch_object_ids_speculative: n.objectIDs,
                    mismatch_object_ids_current: r.objectIDs,
                  },
                }));
          }),
          (n.end = function (t) {
            (this.$4.cancel(),
              this.info.confidence ===
                o("AdsInteractionTriggerConstants")
                  .REAL_INTERACTION_CONFIDENCE &&
                this.$1.point("REAL_SCENARIO_END"));
            var e = r("first")(this.$2);
            this.$1
              .annotate({
                string: {
                  session_id: r("AdsManagerAppConfig").sessionID,
                  user_id: r("CurrentUser").getAccountID(),
                  key: this.info.key,
                  interaction: this.info.interaction,
                  trace_policy: this.info.tracePolicy || "",
                  last_event: this.info.event,
                  source: this.info.triggerContext.source,
                  callsite:
                    this.info.event === r("AdsInteractionTriggerEvent").CODE
                      ? this.info.callsite
                      : "",
                  object_type: this.info.triggerContext.objectType,
                  status: t,
                },
                int: { call_index: this.$3 },
                double: { confidence: this.info.confidence },
                string_array: {
                  events: this.$2.map(function (e) {
                    return e;
                  }),
                },
                bool: {
                  accuracy_hit:
                    this.info.confidence ===
                    o("AdsInteractionTriggerConstants")
                      .REAL_INTERACTION_CONFIDENCE,
                  coverage_hit:
                    e != null && e !== r("AdsInteractionTriggerEvent").CODE,
                },
              })
              .stop();
          }),
          t
        );
      })();
    function _() {
      return Array.from(c.values());
    }
    function f(e) {
      return c.get(e);
    }
    function g(e) {
      _().forEach(function (t) {
        t.receiveVisibilityEvent(e);
      });
    }
    function h(e) {
      return r("AdsInteractionTriggerTrackedKeys")[e] != null;
    }
    function y(e) {
      if (!h(e.key)) {
        e.event !== r("AdsInteractionTriggerEvent").CODE &&
          r("FBLogger")("AdsInteractionTrigger").mustfix(
            "Interaction is receiving UI events but is not tracked. Add %s to `AdsInteractionTriggerTrackedKeysConfig.js`.",
            e.key,
          );
        return;
      }
      if (
        !(
          e.confidence <
          o("AdsInteractionTriggerConstants")
            .MIN_SPECULATIVE_INTERACTION_CONFIDENCE
        )
      ) {
        var t = f(e.key),
          n = t != null;
        if (
          (t || ((t = new p(e)), c.set(e.key, t)), t.receiveEvent(e.event), n)
        ) {
          if (t.info.confidence > e.confidence) return;
          if (
            t.info.confidence < e.confidence ||
            t.info.event !== e.event ||
            !(s || (s = r("areEqual")))(t.info.triggerContext, e.triggerContext)
          )
            (t.info.realStartTime != null &&
              e.realStartTime != null &&
              r("FBLogger")("AdsInteractionTrigger").warn(
                "[IT] More than real one start time seen for interaction %s",
                t.info.key,
              ),
              t.mergeInfo(e));
          else return;
        }
        var a = babelHelpers.extends({}, t.info),
          i = [].concat(t.getAllEvents());
        (o("AdsInteractionTrigger").isDebugEnabled() &&
          r("FBLogger")("AdsInteractionTrigger").debug(
            "[IT] START %s event=%s confidence=%s",
            t.info.key,
            t.info.event,
            t.info.confidence,
          ),
          o("AdsInteractionTrigger").onInteractionStart.call(a, i));
      }
    }
    function C(e) {
      var t = f(e.key);
      t != null &&
        t.info.event !== r("AdsInteractionTriggerEvent").CODE &&
        b(e);
    }
    function b(e) {
      var t = f(e.key),
        n = e.status;
      if (t == null)
        h(e.key) &&
          r("FBLogger")("AdsInteractionTrigger").warn(
            "[IT] Invalid missing current interaction %s (status: %s)",
            e.key,
            e.status,
          );
      else {
        var a = babelHelpers.extends({}, t.info),
          i = [].concat(t.getAllEvents());
        (o("AdsInteractionTrigger").isDebugEnabled() &&
          r("FBLogger")("AdsInteractionTrigger").debug(
            "[IT] END %s event=%s confidence=%s status=%s",
            t.info.key,
            t.info.event,
            t.info.confidence,
            n,
          ),
          o("AdsInteractionTrigger").onInteractionEnd.call(a, i, {
            status: n,
            lostFocusTimestamp: t.lostFocusTimestamp,
          }),
          t.end(n),
          c.delete(e.key));
      }
    }
    var v = { TTL_SPECULATIVE_INTERACTION: u };
    ((l.getCurrentInteractions = _),
      (l.getCurrentInteraction = f),
      (l.markVisibilityEvent = g),
      (l.startInteraction = y),
      (l.endInteractionIfSpeculative = C),
      (l.endInteraction = b),
      (l.__forTests = v));
  },
  98,
);
