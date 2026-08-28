__d(
  "MAIBAToolGroupArgsParser",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.trim().length === 0) return [];
      try {
        var t = JSON.parse(e);
        return t.nested_tools == null || !Array.isArray(t.nested_tools)
          ? []
          : t.nested_tools.map(function (e) {
              var t,
                n =
                  e.kwargs != null && Object.keys(e.kwargs).length > 0
                    ? JSON.stringify(e.kwargs)
                    : null;
              return {
                args: n,
                tool_call_id: (t = e.tool_call_id) != null ? t : null,
                tool_name: e.func_name,
              };
            });
      } catch (e) {
        return [];
      }
    }
    function s(e) {
      var t = new Map();
      if (e == null || e.trim() === "") return t;
      try {
        var n = JSON.parse(e);
        if (n == null || typeof n != "object" || Array.isArray(n)) return t;
        var r = n.tool_results;
        if (!Array.isArray(r)) return t;
        for (var o of r)
          if (!(o == null || typeof o != "object" || Array.isArray(o))) {
            var a = o;
            typeof a.tool_call_id != "string" ||
              a.tool_call_id === "" ||
              typeof a.tool_name != "string" ||
              typeof a.status != "string" ||
              (a.result != null && typeof a.result != "string") ||
              t.set(a.tool_call_id, {
                result: typeof a.result == "string" ? a.result : null,
                status: a.status,
                tool_call_id: a.tool_call_id,
                tool_name: a.tool_name,
              });
          }
      } catch (e) {
        return t;
      }
      return t;
    }
    function u(e) {
      return {
        is_completed: e.is_completed,
        progress_phase: e.progress_phase,
        progress_summary: e.progress_summary,
        progress_title: e.progress_title,
        tool_call_args: e.tool_call_args,
        tool_call_id: e.tool_call_id,
        tool_name: e.tool_name,
        tool_result: e.tool_result,
        tool_status: e.tool_status,
      };
    }
    function c(e, t) {
      return (t == null ? void 0 : t.status) === "error"
        ? "FAILED"
        : e === !0
          ? "COMPLETED"
          : "RUNNING";
    }
    function d(t) {
      var n = [];
      for (var r of t) {
        if (r.tool_name !== "tool_group") {
          n.push(u(r));
          continue;
        }
        var o = r.tool_call_args,
          a = o == null ? [] : e(o);
        if (a.length === 0) {
          n.push(u(r));
          continue;
        }
        var i = s(r.tool_result);
        for (var l of a) {
          var d,
            m = l.tool_call_id;
          if (!(m == null || m === "")) {
            var p = i.get(m);
            n.push({
              is_completed: r.is_completed,
              progress_phase: null,
              progress_summary: null,
              progress_title: null,
              tool_call_args: l.args,
              tool_call_id: m,
              tool_name: l.tool_name,
              tool_result:
                (d = p == null ? void 0 : p.result) != null ? d : null,
              tool_status: c(r.is_completed, p),
            });
          }
        }
      }
      return n;
    }
    ((l.parseToolGroupArgs = e), (l.normalizeMAIBAToolCalls = d));
  },
  98,
);
