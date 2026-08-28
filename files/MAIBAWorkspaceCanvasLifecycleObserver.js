__d(
  "MAIBAWorkspaceCanvasLifecycleObserver",
  [
    "MAIBAObservabilityUtils",
    "MAIBAWorkspaceCanvasLifecycleLogger",
    "MAIBAWorkspaceTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap();
    function s(e) {
      var t, n;
      return (e == null ? void 0 : e.workspace_type) !== "ad_draft_editor"
        ? null
        : e.workspace_type +
            ":" +
            ((t = (n = e.workspace_id) != null ? n : e.request_id) != null
              ? t
              : "unknown");
    }
    function u(e, t) {
      if (
        (e != null &&
          o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
            "conversation_id",
            e,
          ),
        t != null)
      ) {
        var n,
          r,
          a,
          i = o("MAIBAWorkspaceTypes").parseAttributesJSON(t.attributes_json);
        (o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
          "product",
          (n = i.product) != null ? n : "",
        ),
          o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
            "workspace_type",
            (r = t.workspace_type) != null ? r : "",
          ),
          o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
            "workspace_version",
            String((a = t.version) != null ? a : ""),
          ));
      }
    }
    function c(e, t, n) {
      (o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
        "load_reason",
        n,
      ),
        o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
          "had_entity_at_start",
          t != null ? "true" : "false",
        ),
        u(e, t));
    }
    function d(e, t, n) {
      s(t) != null &&
        (o("MAIBAObservabilityUtils").startMAIBAWorkspaceLoadInteraction(i.id),
        c(e, t, n),
        o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
          "canvas_open_requested",
        ));
    }
    function m(e) {
      o("MAIBAObservabilityUtils").cancelMAIBAWorkspaceLoadInteraction(e);
    }
    function p(e, t, n) {
      if (s(t) != null) {
        var r = o(
          "MAIBAObservabilityUtils",
        ).ensureMAIBAWorkspaceLoadInteraction(i.id);
        (r ? c(e, t, n) : u(e, t),
          o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
            "canvas_open_requested",
          ));
      }
    }
    function _(e, t, n, r) {
      var a = o("MAIBAWorkspaceTypes").parseAttributesJSON(t.attributes_json);
      o("MAIBAWorkspaceCanvasLifecycleLogger").logMAIBAWorkspaceCanvasLifecycle(
        {
          botResponseId: t.request_id,
          conversationId: e,
          outcome: "success",
          product: a.product,
          reason: n,
          stage: r,
          workspaceInstanceId: t.workspace_id,
          workspaceType: t.workspace_type,
          workspaceVersion: t.version,
        },
      );
    }
    function f(e, t, n) {
      if (
        (s(t) != null &&
          (o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadAnnotation(
            "failure_reason",
            n,
          ),
          o("MAIBAObservabilityUtils").failMAIBAWorkspaceLoadInteraction(n)),
        t != null)
      ) {
        var r = o("MAIBAWorkspaceTypes").parseAttributesJSON(t.attributes_json);
        o(
          "MAIBAWorkspaceCanvasLifecycleLogger",
        ).logMAIBAWorkspaceCanvasLifecycle({
          botResponseId: t.request_id,
          conversationId: e,
          outcome: "error",
          product: r.product,
          reason: n,
          stage: "canvas_failed",
          workspaceInstanceId: t.workspace_id,
          workspaceType: t.workspace_type,
          workspaceVersion: t.version,
        });
      }
    }
    function g(t, n, r, a) {
      var i = e.get(t);
      if (i == null) {
        var l = {
          conversationId: n,
          hasObservedCanvasState: !1,
          loggedOpenSnapshot: null,
          pendingOpenReason: null,
          previousIsCanvasOpen: !1,
          workspaceLoadKey: null,
        };
        (e.set(t, l), (i = l));
      } else if (i.conversationId !== n) {
        if (i.previousIsCanvasOpen && !a && i.loggedOpenSnapshot != null) {
          var c = i.loggedOpenSnapshot;
          _(
            c.conversationId,
            c.entity,
            "close_state_transition",
            "canvas_closed",
          );
        }
        ((i.conversationId = n),
          (i.hasObservedCanvasState = !1),
          (i.loggedOpenSnapshot = null),
          (i.pendingOpenReason = null),
          (i.previousIsCanvasOpen = !1),
          (i.workspaceLoadKey = null));
      }
      var d = !i.hasObservedCanvasState,
        f = a && (d || !i.previousIsCanvasOpen),
        g = !d && !a && i.previousIsCanvasOpen;
      if (((i.hasObservedCanvasState = !0), (i.previousIsCanvasOpen = a), f)) {
        var h = d ? "initial_open_state" : "open_state_transition";
        ((i.pendingOpenReason = h), (i.loggedOpenSnapshot = null));
      }
      if (g) {
        if (
          (m("canvas_closed"),
          (i.pendingOpenReason = null),
          (i.workspaceLoadKey = null),
          o(
            "MAIBAWorkspaceCanvasLifecycleLogger",
          ).resetMAIBAWorkspaceCanvasLifecycleOrdering(n),
          i.loggedOpenSnapshot != null)
        ) {
          var y = i.loggedOpenSnapshot;
          _(
            y.conversationId,
            y.entity,
            "close_state_transition",
            "canvas_closed",
          );
        }
        i.loggedOpenSnapshot = null;
        return;
      }
      var C = a ? s(r) : null;
      if (
        C !== i.workspaceLoadKey &&
        (i.workspaceLoadKey != null && m("workspace_changed"),
        (i.workspaceLoadKey = C),
        C != null)
      ) {
        var b;
        p(n, r, (b = i.pendingOpenReason) != null ? b : "workspace_changed");
      }
      if (i.pendingOpenReason != null && r != null) {
        var v = i.pendingOpenReason;
        ((i.pendingOpenReason = null),
          C != null &&
            (u(n, r),
            o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
              "workspace_entity_available",
            ),
            o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
              "canvas_opened",
            )),
          _(n, r, v, "canvas_opened"),
          (i.loggedOpenSnapshot = { conversationId: n, entity: r }));
      }
    }
    function h(e, t) {
      (m("lifecycle_observer_reset"),
        o(
          "MAIBAWorkspaceCanvasLifecycleLogger",
        ).resetMAIBAWorkspaceCanvasLifecycleOrdering(t));
    }
    ((l.startMAIBAWorkspaceLoad = d),
      (l.cancelMAIBAWorkspaceLoad = m),
      (l.logMAIBAWorkspaceCanvasFailure = f),
      (l.observeMAIBAWorkspaceCanvasLifecycle = g),
      (l.resetMAIBAWorkspaceCanvasLifecycleObserver = h));
  },
  98,
);
