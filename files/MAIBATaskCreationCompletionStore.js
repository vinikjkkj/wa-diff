__d(
  "MAIBATaskCreationCompletionStore",
  [
    "FBLogger",
    "MAIBATaskCreationCompletionStoreMutation.graphql",
    "MAIBATaskCreationPreviewUtils",
    "RelayHooks",
    "actionabilityProcessorShared",
    "react",
    "useMAIBACurrentAdAccountID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState,
      m = u.useSyncExternalStore,
      p = new Map(),
      _ = new Map(),
      f = new Set(),
      g = new Set(),
      h = new Map(),
      y =
        e !== void 0
          ? e
          : (e = n("MAIBATaskCreationCompletionStoreMutation.graphql"));
    function C() {
      for (var e of f) e();
    }
    function b(e) {
      return (
        f.add(e),
        function () {
          f.delete(e);
        }
      );
    }
    function v(e) {
      return (
        e === "create_scheduled_task" || e === "create_condition_based_task"
      );
    }
    function S(e) {
      return (
        e === "update_scheduled_task" || e === "update_condition_based_task"
      );
    }
    function R(e) {
      return v(e) || S(e);
    }
    function L(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function E(e) {
      if (e == null || e === "") return null;
      try {
        return L(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function k(e) {
      var t = e == null ? void 0 : e.task_id;
      return typeof t == "string" && t.trim() !== "" ? t : null;
    }
    function I(e) {
      var t = k(E(e));
      return t != null && t !== "0" ? t : null;
    }
    function T(e, t) {
      return (
        o("actionabilityProcessorShared").statusOf(e) === "COMPLETED" &&
        (t || e.is_completed === !0)
      );
    }
    function D(e, t) {
      if (!T(e, t)) return null;
      if (v(e.tool_name)) {
        var n, r;
        return (n =
          (r = o(
            "MAIBATaskCreationPreviewUtils",
          ).parseTaskCreationSuccessResult(e.tool_call_args, e.tool_result)) ==
          null
            ? void 0
            : r.taskID) != null
          ? n
          : I(e.tool_result);
      }
      return S(e.tool_name) ? I(e.tool_result) : null;
    }
    function x(e, t) {
      t === void 0 && (t = !1);
      var n = !1;
      for (var r of e) {
        var a = r.tool_call_args,
          i = r.tool_result,
          l = o("MAIBATaskCreationPreviewUtils").parseTaskCreationStateKey(
            a,
            i,
          );
        if (v(r.tool_name) && l != null) {
          var s = E(i),
            u = null;
          o("actionabilityProcessorShared").statusOf(r) === "FAILED"
            ? (u = "failed")
            : T(r, t)
              ? I(i) != null && (s == null ? void 0 : s.error) == null
                ? (u = "completed")
                : i != null &&
                  i !== "" &&
                  (s == null ? void 0 : s.confirmation_required) !== !0 &&
                  (u = "failed")
              : (u = "pending");
          var c = _.get(l);
          u != null &&
            c !== "completed" &&
            c !== u &&
            !(c === "failed" && u === "pending") &&
            (_.set(l, u), (n = !0));
        }
        if (
          !(
            !v(r.tool_name) ||
            !T(r, t) ||
            a == null ||
            i == null ||
            o("MAIBATaskCreationPreviewUtils").parseTaskCreationSuccessResult(
              a,
              i,
            ) == null
          ) &&
          l != null
        ) {
          var d = p.get(l);
          (d != null && d.rawArgs === a && d.rawResult === i) ||
            (p.set(l, { rawArgs: a, rawResult: i }), (n = !0));
        }
      }
      n && C();
    }
    function $(e, t, n, a, i) {
      (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1));
      var l = r("useMAIBACurrentAdAccountID")(),
        s = o("RelayHooks").useMutation(y),
        u = s[0],
        m = d(0),
        p = m[0],
        _ = m[1];
      c(
        function () {
          if ((x(e, n), !!t && !(l == null || l === ""))) {
            var o = function () {
                var e = c.tool_call_id,
                  t = e == null ? null : h.get(e);
                a &&
                  !i &&
                  R(c.tool_name) &&
                  e != null &&
                  e !== "" &&
                  t == null &&
                  (h.set(e, "pending"),
                  (t = "pending"),
                  u({
                    onCompleted: function (n) {
                      var t;
                      (h.set(
                        e,
                        ((t = n.maiba_ensure_async_auth_tokens) == null
                          ? void 0
                          : t.success) === !0
                          ? "succeeded"
                          : "failed",
                      ),
                        _(function (e) {
                          return e + 1;
                        }));
                    },
                    onError: function (n) {
                      (h.set(e, "failed"),
                        _(function (e) {
                          return e + 1;
                        }),
                        r("FBLogger")("maiba_task_creation").warn(
                          "Failed to prepare async auth for task tool call: %s",
                          n.message,
                        ));
                    },
                    variables: {
                      input: {
                        ad_account_id: l,
                        source: "TASK_TOOL_CALL_START",
                        tool_call_id: e,
                      },
                    },
                  }));
                var o = D(c, n);
                if (o == null || g.has(o) || t === "pending") return 0;
                (g.add(o),
                  u({
                    onCompleted: function (t) {
                      var e;
                      ((e = t.maiba_ensure_async_auth_tokens) == null
                        ? void 0
                        : e.success) !== !0 &&
                        (g.delete(o),
                        r("FBLogger")("maiba_task_creation").warn(
                          "Failed to mint async auth tokens after task tool completion",
                        ));
                    },
                    onError: function (t) {
                      (g.delete(o),
                        r("FBLogger")("maiba_task_creation").warn(
                          "Failed to mint async auth tokens after task tool completion: %s",
                          t.message,
                        ));
                    },
                    variables: {
                      input: {
                        ad_account_id: l,
                        source: "DETERMINISTIC_TASK_CREATION",
                        task_id: o,
                      },
                    },
                  }));
              },
              s;
            for (var c of e) s = o();
          }
        },
        [l, n, p, u, t, a, i, e],
      );
    }
    function P(e) {
      return m(
        b,
        function () {
          var t;
          return e == null ? null : (t = p.get(e)) != null ? t : null;
        },
        function () {
          return null;
        },
      );
    }
    function N(e) {
      return m(
        b,
        function () {
          var t;
          return e == null ? null : (t = _.get(e)) != null ? t : null;
        },
        function () {
          return null;
        },
      );
    }
    function M() {
      if (!(p.size === 0 && _.size === 0 && g.size === 0 && h.size === 0)) {
        var e = p.size > 0 || _.size > 0;
        (p.clear(), _.clear(), g.clear(), h.clear(), e && C());
      }
    }
    ((l.recordMAIBATaskCreationCompletions = x),
      (l.useRecordMAIBATaskCreationCompletions = $),
      (l.useMAIBATaskCreationCompletion = P),
      (l.useMAIBATaskCreationStatus = N),
      (l.clearMAIBATaskCreationCompletions = M));
  },
  98,
);
