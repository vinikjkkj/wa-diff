__d(
  "MAIBAWorkspaceCanvasLifecycleLogger",
  ["AdsHelpTrayUILogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["workspaceInstanceId"],
      s = new Set(["ads_manager", "boost", "mbs_creation"]),
      u = new Set([
        "a2ui",
        "ad_draft_editor",
        "ad_gallery",
        "agent_hub",
        "business_setup",
        "campaign_planning",
        "creator_discovery",
        "html_artifact",
        "pdf_viewer",
        "weekly_report",
      ]);
    function c(e, t) {
      return e != null && t.has(e) ? e : "unknown";
    }
    var d = 1e3,
      m = new Set(),
      p = new Map(),
      _ = [],
      f = !1;
    function g(e) {
      var t, n, r, o, a;
      return JSON.stringify([
        (t = e.conversationId) != null ? t : "",
        (n = e.botResponseId) != null ? n : "",
        (r = e.workspaceType) != null ? r : "",
        (o = e.workspaceInstanceId) != null ? o : "",
        (a = e.workspaceVersion) != null ? a : null,
      ]);
    }
    function h(e, t) {
      if (!m.has(e) && (m.add(e), p.set(e, t != null ? t : ""), m.size > d)) {
        var n = m.values().next().value;
        n != null && (m.delete(n), p.delete(n));
      }
    }
    function y(e) {
      var t = [],
        n = [];
      for (var r of _) r.lifecycleKey === e ? t.push(r) : n.push(r);
      _ = n;
      for (var a of t)
        o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(a.data);
    }
    function C() {
      f = !1;
      var e = _;
      _ = [];
      for (var t of e)
        o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(t.data);
    }
    function b(e, t) {
      if (_.length >= d) {
        var n = _.shift();
        n != null &&
          o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(n.data);
      }
      (_.push({ data: e, lifecycleKey: t }),
        f || ((f = !0), queueMicrotask(C)));
    }
    function v(e) {
      var t = e != null ? e : "",
        n = _;
      _ = [];
      for (var r of n) {
        var a;
        ((a = r.data.conversationId) != null ? a : "") === t
          ? o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(r.data)
          : _.push(r);
      }
      for (var i of p) {
        var l = i[0],
          s = i[1];
        s === t && (m.delete(l), p.delete(l));
      }
    }
    function S(t) {
      var n = babelHelpers.extends({}, t, {
          product: c(t.product, s),
          workspaceType: c(t.workspaceType, u),
        }),
        r = g(n),
        a = n.workspaceInstanceId,
        i = babelHelpers.objectWithoutPropertiesLoose(n, e);
      if (n.stage === "canvas_opened") {
        (m.has(r) ||
          o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(i),
          h(r, n.conversationId),
          y(r));
        return;
      }
      if (n.stage === "canvas_closed") {
        (o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(i),
          m.delete(r),
          p.delete(r));
        return;
      }
      if (n.stage === "canvas_rendered" || n.stage === "canvas_failed") {
        m.has(r)
          ? o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(i)
          : b(i, r);
        return;
      }
      o("AdsHelpTrayUILogger").logMAIBAWorkspaceCanvasLifecycle(i);
    }
    ((l.resetMAIBAWorkspaceCanvasLifecycleOrdering = v),
      (l.logMAIBAWorkspaceCanvasLifecycle = S));
  },
  98,
);
