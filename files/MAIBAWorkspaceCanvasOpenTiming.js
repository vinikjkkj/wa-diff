__d(
  "MAIBAWorkspaceCanvasOpenTiming",
  ["MAIBAWorkspaceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = new Map(),
      u = new Set(),
      c = new Set();
    function d(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function m(e, t, n, r) {
      if (
        e == null ||
        e === "" ||
        (t == null ? void 0 : t.workspace_type) !== "ad_draft_editor" ||
        o("MAIBAWorkspaceTypes").parseAttributesJSON(t.attributes_json)
          .product !== "ig"
      )
        return !1;
      for (var a of u) if (a(e, t, n, r)) return !0;
      return !1;
    }
    function p(e, t) {
      var n, r, a;
      if (t.is_pill_hidden !== !0) {
        var i = JSON.stringify([
          e != null ? e : null,
          (n = (r = t.workspace_id) != null ? r : t.request_id) != null
            ? n
            : null,
          (a = t.version) != null ? a : null,
        ]);
        if (!c.has(i)) {
          var l =
            o("MAIBAWorkspaceTypes").parseAttributesJSON(t.attributes_json)
              .auto_open === "false"
              ? "workspace_pill"
              : "auto_open";
          m(e, t, "draft_ready", l) && c.add(i);
        }
      }
    }
    function _(e, t) {
      return (
        e.workspace_type === t.workspace_type &&
        (e.workspace_id != null
          ? e.workspace_id === t.workspace_id
          : e.request_id === t.request_id)
      );
    }
    function f(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
          for (var n of s) {
            var r = n[0],
              o = n[1];
            o.logger === t && (o.complete("cancelled"), s.delete(r));
          }
        }
      );
    }
    function g(t, n, r) {
      var a = s.get(t);
      if (
        a != null &&
        a.conversationID === n &&
        r != null &&
        _(a.entity, r) &&
        o("MAIBAWorkspaceTypes").parseAttributesJSON(r.attributes_json)
          .product === "ig"
      ) {
        var i, l;
        ((i = r.version) != null ? i : 0) >=
          ((l = a.entity.version) != null ? l : 0) &&
          s.set(t, babelHelpers.extends({}, a, { entity: r }));
        return;
      }
      if (
        (a == null || a.complete("superseded"),
        s.delete(t),
        !(
          n == null ||
          (r == null ? void 0 : r.workspace_type) !== "ad_draft_editor" ||
          (r.workspace_id == null && r.request_id == null) ||
          o("MAIBAWorkspaceTypes").parseAttributesJSON(r.attributes_json)
            .product !== "ig"
        ))
      )
        for (var u of e) {
          var c = u(n, r);
          if (c != null) {
            s.set(t, { complete: c, conversationID: n, entity: r, logger: u });
            return;
          }
        }
    }
    function h(e) {
      var t;
      ((t = s.get(e)) == null || t.complete("cancelled"), s.delete(e));
    }
    function y(e, t, n) {
      for (var r of s.values()) {
        var o, a, i, l;
        r.conversationID === e &&
          _(r.entity, t) &&
          (n === "success"
            ? ((o = t.version) != null ? o : 0) >=
              ((a = r.entity.version) != null ? a : 0)
            : ((i = t.version) != null ? i : 0) >
                ((l = r.entity.version) != null ? l : 0) ||
              (t.request_id === r.entity.request_id &&
                t.version === r.entity.version)) &&
          r.complete(n);
      }
    }
    ((l.registerMAIBACanvasNavigationLogger = d),
      (l.logMAIBACanvasNavigation = m),
      (l.logMAIBACanvasDraftReady = p),
      (l.registerMAIBACanvasOpenLogger = f),
      (l.startMAIBACanvasOpenTiming = g),
      (l.cancelMAIBACanvasOpenTiming = h),
      (l.completeMAIBACanvasOpenTiming = y));
  },
  98,
);
