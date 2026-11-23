__d(
  "MAIBATaskCreationPreviewUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    var u = "[System: MAIBA_TASK_CREATION_APPROVAL] ";
    function c(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function d(e) {
      try {
        return c(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function m(e, t) {
      var n = e == null ? void 0 : e[t];
      return typeof n == "string" && n.trim() !== "" ? n : null;
    }
    function p(e, t) {
      var n = e == null ? void 0 : e[t];
      return typeof n == "string" ? n : null;
    }
    function _(e, t) {
      var n = e == null ? void 0 : e[t];
      return typeof n == "number" && Number.isFinite(n) ? n : null;
    }
    function f(e, t, n) {
      var r = m(t, "prompt"),
        o = m(e, "status"),
        a = m(e, "type");
      if (r == null || o == null) return null;
      if (a === "CONDITION_BASED")
        return {
          prompt: r,
          recurrenceCadenceSeconds: null,
          startTime: null,
          status: o,
          taskType: a,
          triggerCondition: n,
        };
      if (a !== "TIME_BASED__ONE_OFF" && a !== "TIME_BASED__RECURRING")
        return null;
      var i = c(e == null ? void 0 : e.schedule),
        l = _(i, "start_time");
      return l == null
        ? null
        : {
            prompt: r,
            recurrenceCadenceSeconds: _(i, "recurrence_cadence_seconds"),
            startTime: l,
            status: o,
            taskType: a,
            triggerCondition: null,
          };
    }
    function g(e, t) {
      var n,
        r =
          p(e, "action_name") === "create_condition_based_task"
            ? "CONDITION_BASED"
            : p(e, "task_type"),
        o = Date.parse((n = p(e, "start_time")) != null ? n : "") / 1e3,
        a = Number(p(e, "recurrence_cadence_days"));
      return f(
        {
          schedule: {
            recurrence_cadence_seconds:
              Number.isFinite(a) && a > 0 ? a * 86400 : null,
            start_time: Number.isFinite(o) ? o : null,
          },
          status: "ACTIVE",
          type: r,
        },
        { prompt: p(e, "prompt") },
        t,
      );
    }
    function h(e) {
      var t;
      if (e == null || e === "") return null;
      var n = d(e),
        r = c(n == null ? void 0 : n.preview),
        o = p(r, "action_name"),
        a = p(r, "condition_json"),
        i = m(n, "confirmation_token"),
        l = y(
          (t = n == null ? void 0 : n.task_creation_action) != null
            ? t
            : n == null
              ? void 0
              : n.governed_review,
        ),
        s = m(r, "context"),
        u = m(r, "description"),
        _ = p(r, "expiration_time"),
        f = m(r, "name"),
        g = m(r, "prompt"),
        h = p(r, "recurrence_cadence_days"),
        C = p(r, "start_time"),
        b = p(r, "task_type"),
        v =
          (n == null ? void 0 : n.task_creation_ui) === "in_place" || l != null
            ? "in_place"
            : null,
        S = n == null ? void 0 : n.token_timestamp,
        R = m(r, "trigger");
      if (
        (n == null ? void 0 : n.confirmation_required) !== !0 ||
        (r == null ? void 0 : r.surface_id) !== "task-creation-preview" ||
        a == null ||
        (l == null && i == null) ||
        s == null ||
        u == null ||
        _ == null ||
        f == null ||
        g == null ||
        h == null ||
        C == null ||
        b == null ||
        (l == null && (typeof S != "number" || !Number.isInteger(S))) ||
        R == null
      )
        return null;
      if (o === "create_scheduled_task") {
        if (
          (b !== "TIME_BASED__ONE_OFF" && b !== "TIME_BASED__RECURRING") ||
          C === "" ||
          a !== "" ||
          (b === "TIME_BASED__RECURRING" && h === "")
        )
          return null;
      } else if (o === "create_condition_based_task") {
        if (b !== "" || C !== "" || h !== "" || d(a) == null) return null;
      } else return null;
      return {
        action_name: o,
        condition_json: a,
        confirmation_token: i,
        context: s,
        description: u,
        expiration_time: _,
        name: f,
        prompt: g,
        recurrence_cadence_days: h,
        start_time: C,
        surface_id: "task-creation-preview",
        task_creation_action: l,
        task_creation_ui: v,
        task_type: b,
        token_timestamp: typeof S == "number" ? S : null,
        trigger: R,
      };
    }
    function y(e) {
      var t = c(e),
        n = m(t, "action_id"),
        r = m(t, "digest"),
        o = _(t, "state_revision");
      return n != null && r != null && o != null && Number.isInteger(o) && o > 0
        ? { action_id: n, digest: r, state_revision: o }
        : null;
    }
    function C(e) {
      return e.task_creation_action != null
        ? "[System: MAIBA_TASK_CREATION_ACTION_APPROVAL] " +
            JSON.stringify(e.task_creation_action)
        : u +
            JSON.stringify({
              action_name: e.action_name,
              context: {
                condition_json: e.condition_json,
                confirmation_token: e.confirmation_token,
                context: e.context,
                description: e.description,
                expiration_time: e.expiration_time,
                name: e.name,
                prompt: e.prompt,
                recurrence_cadence_days: e.recurrence_cadence_days,
                start_time: e.start_time,
                task_type: e.task_type,
                token_timestamp: e.token_timestamp,
                trigger: e.trigger,
              },
              surface_id: e.surface_id,
              type: "task_creation_approval",
            });
    }
    function b(e, t) {
      var n, r, o, a, i, l;
      if (e == null || e === "" || t == null || t === "") return null;
      var s = d(e),
        u = d(t),
        _ = d((n = p(u, "task")) != null ? n : ""),
        h = c(_ == null ? void 0 : _.task),
        y = m(s, "confirmation_token"),
        C = m(u, "task_creation_action_id"),
        b =
          C != null && (u == null ? void 0 : u.creation_status) === "committed",
        S =
          (u == null ? void 0 : u.task_creation_ui) === "in_place" || C != null
            ? "in_place"
            : null,
        R = v(u),
        L = m(_, "name"),
        E = m(h, "prompt"),
        k = m(s, "prompt"),
        I = m(s, "trigger"),
        T =
          (r = m(s, "description")) != null
            ? r
            : R
              ? (o = E != null ? E : k) != null
                ? o
                : L
              : null,
        D = m(u, "task_id"),
        x =
          (a = (i = L != null ? L : b ? m(s, "name") : null) != null ? i : E) !=
          null
            ? a
            : k,
        $ = (l = f(_, h, I)) != null ? l : b ? g(s, I) : null;
      return (y == null && C == null && !R) ||
        T == null ||
        D == null ||
        D === "0" ||
        x == null
        ? null
        : {
            summary: T,
            taskCreationUI: S,
            taskDetails: $,
            taskID: D,
            title: x,
          };
    }
    function v(e) {
      return (e == null ? void 0 : e.confirmation_required) === !1;
    }
    function S(e) {
      return v(d(e != null ? e : ""));
    }
    function R(e) {
      return m(d(e != null ? e : ""), "task_creation_action_id");
    }
    function L(e) {
      return e == null || e === "" ? null : m(d(e), "confirmation_token");
    }
    function E(e, t) {
      var n,
        r,
        o,
        a = d(t != null ? t : ""),
        i = d(e != null ? e : ""),
        l = y(
          (n = a == null ? void 0 : a.task_creation_action) != null
            ? n
            : a == null
              ? void 0
              : a.governed_review,
        ),
        s =
          (r =
            (o = l == null ? void 0 : l.action_id) != null
              ? o
              : m(a, "task_creation_action_id")) != null
            ? r
            : m(i, "task_creation_action_id");
      if (s != null) {
        var u,
          c,
          p,
          f =
            (u =
              (c =
                (p = l == null ? void 0 : l.state_revision) != null
                  ? p
                  : _(a, "review_revision")) != null
                ? c
                : _(i, "review_revision")) != null
              ? u
              : 1;
        return s + ":" + f;
      }
      return L(e);
    }
    ((l.getMAIBAMonitoringAlertCadenceNote = e),
      (l.MAIBA_TASK_CREATION_APPROVAL_PREFIX = u),
      (l.parseTaskCreationPreviewResult = h),
      (l.buildTaskCreationApprovalMessage = C),
      (l.parseTaskCreationSuccessResult = b),
      (l.isDirectTaskCreationResult = S),
      (l.parseTaskCreationActionID = R),
      (l.parseTaskCreationConfirmationToken = L),
      (l.parseTaskCreationStateKey = E));
  },
  226,
);
