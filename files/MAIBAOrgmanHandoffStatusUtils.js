__d(
  "MAIBAOrgmanHandoffStatusUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "orgman_handoff",
      l = 3e4,
      s = {
        orgman_add_admin_role: "role_change",
        orgman_rescind_enterprise_invitation: "cancel_invitation",
        orgman_revoke_admin_role: "remove_access",
      },
      u = "tool_group",
      c = "/admin/administrators/admins/";
    function d(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function m(e) {
      if (e == null || e === "") return null;
      try {
        return d(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function p(t, n, r) {
      var o,
        a = t == null ? null : s[t];
      if (a == null || n == null || n === "") return null;
      var i = d((o = m(r)) == null ? void 0 : o[e]);
      return i == null ||
        i.tool_call_id !== n ||
        typeof i.target_id != "string" ||
        typeof i.done != "boolean"
        ? null
        : {
            adminCenterID:
              typeof i.admin_center_id == "string" ? i.admin_center_id : null,
            done: i.done,
            kind: a,
            targetID: i.target_id,
          };
    }
    function _(e) {
      if (e.tool_name === u) {
        var t,
          n = (t = m(e.tool_result)) == null ? void 0 : t.tool_results;
        return Array.isArray(n)
          ? n.flatMap(function (e) {
              var t = d(e),
                n =
                  typeof (t == null ? void 0 : t.tool_name) == "string"
                    ? t.tool_name
                    : null,
                r =
                  typeof (t == null ? void 0 : t.tool_call_id) == "string"
                    ? t.tool_call_id
                    : null,
                o =
                  typeof (t == null ? void 0 : t.result) == "string"
                    ? t.result
                    : null,
                a = p(n, r, o);
              return a == null || r == null
                ? []
                : [babelHelpers.extends({}, a, { toolCallID: r })];
            })
          : [];
      }
      var r = p(e.tool_name, e.tool_call_id, e.tool_result);
      return r == null || e.tool_call_id == null
        ? []
        : [babelHelpers.extends({}, r, { toolCallID: e.tool_call_id })];
    }
    function f(e) {
      var t = [];
      for (var n of e) {
        var r = n.external_conversation_id,
          o = n.offline_threading_id;
        if (
          !(
            n.role !== "ASSISTANT" ||
            r == null ||
            r === "" ||
            o == null ||
            o === ""
          )
        )
          for (var a of (i = n.tool_calls) != null ? i : []) {
            var i;
            for (var l of _(a))
              t.push({
                adminCenterID: l.adminCenterID,
                done: l.done,
                externalConversationID: r,
                kind: l.kind,
                sourceMessageOfflineThreadingID: o,
                targetID: l.targetID,
                toolCallID: l.toolCallID,
              });
          }
      }
      return t.length === 0 ? null : t;
    }
    function g(e, t) {
      return e == null || t == null
        ? []
        : e.filter(function (e) {
            return e.sourceMessageOfflineThreadingID === t;
          });
    }
    function h(e) {
      var t = [];
      if ((typeof e.url == "string" && t.push(e.url), Array.isArray(e.buttons)))
        for (var n of e.buttons) {
          var r,
            o = (r = d(n)) == null ? void 0 : r.url;
          typeof o == "string" && t.push(o);
        }
      return t;
    }
    function y(e) {
      var t = e.match(/[?&]u=([^&]+)/);
      if (t == null || !e.includes("/l.php")) return e;
      try {
        return decodeURIComponent(t[1]);
      } catch (t) {
        return e;
      }
    }
    function C(e) {
      var t;
      return (t = e.adminCenterID) != null
        ? t
        : e.kind === "cancel_invitation"
          ? e.targetID
          : null;
    }
    function b(e, t) {
      var n,
        r,
        o = y(e),
        a = C(t);
      if (
        a == null ||
        !o.includes(c) ||
        ((n = o.match(/[?&]admin_id=([0-9]+)(?:&|$)/)) == null
          ? void 0
          : n[1]) !== a
      )
        return !1;
      var i = (r = o.match(/[?&]operation=([a-z_]+)/)) == null ? void 0 : r[1];
      switch (t.kind) {
        case "cancel_invitation":
        case "remove_access":
          return i === "remove_system_admin";
        case "role_change":
          return i === "remove_system_admin" || i === "add_system_admin";
      }
    }
    function v(e, t) {
      var n = e.map(function (e) {
          return e.kind === "a2ui" ? e.data : null;
        }),
        r = new Map(),
        o = function (t) {
          var e,
            o = n.flatMap(function (e, n) {
              return e != null &&
                h(e).some(function (e) {
                  return b(e, t);
                })
                ? [n]
                : [];
            });
          if (o.length !== 1) return 1;
          var a = o[0];
          r.set(a, [].concat((e = r.get(a)) != null ? e : [], [t]));
        };
      for (var a of t) o(a);
      var i = [];
      for (var l of r) {
        var s = l[0],
          u = l[1],
          c = n[s];
        if (!(u.length !== 1 || c == null)) {
          var d = s > 0 ? n[s - 1] : null;
          i.push({
            check: u[0],
            data:
              c.type === "link_button" &&
              (d == null ? void 0 : d.type) === "info_card" &&
              !r.has(s - 1)
                ? [d, c]
                : [c],
          });
        }
      }
      return i;
    }
    function S(e) {
      var t = typeof e == "string" ? m(e) : d(e);
      return t == null || typeof t.type != "string" ? null : JSON.stringify(t);
    }
    function R(e, t) {
      if (t == null || t.size === 0) return !1;
      var n = S(e);
      return n != null && t.has(n);
    }
    function L(e, t) {
      if (t == null) return null;
      var n = new Set();
      for (var r of e)
        if (t.has(r.check.toolCallID))
          for (var o of r.data) {
            var a = S(o);
            a != null && n.add(a);
          }
      return n.size === 0 ? null : n;
    }
    function E(e, t) {
      return t == null || t.size === 0
        ? e
        : e.filter(function (e) {
            return e.kind !== "a2ui" || !R(e.data, t);
          });
    }
    function k(e) {
      var t = new Set();
      for (var n of (r = e == null ? void 0 : e.values()) != null ? r : []) {
        var r;
        n.checkPrompt != null && n.checkPrompt !== "" && t.add(n.checkPrompt);
      }
      return t;
    }
    ((i.ORGMAN_HANDOFF_RECORD_FIELD = e),
      (i.ORGMAN_HANDOFF_RECHECK_MS = l),
      (i.resolveOrgmanHandoffChecks = f),
      (i.orgmanHandoffChecksForMessage = g),
      (i.findOrgmanHandoffCards = v),
      (i.orgmanHandoffCardKey = S),
      (i.isHiddenOrgmanHandoffCard = R),
      (i.hiddenOrgmanHandoffCardKeys = L),
      (i.withoutHiddenOrgmanHandoffCards = E),
      (i.doneOrgmanHandoffCheckPrompts = k));
  },
  66,
);
