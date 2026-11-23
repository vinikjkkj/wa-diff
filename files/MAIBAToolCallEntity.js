__d(
  "MAIBAToolCallEntity",
  ["XFBMAIBAToolCallStatus.facebook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e == "string" ? e : null;
    }
    function s(t) {
      var n,
        o = e(t == null ? void 0 : t.tool_call_id);
      if (t == null || t.__typename !== "XFBToolCallObject" || o == null)
        return null;
      var a = e(t.tool_status);
      return {
        __typename: "XFBToolCallObject",
        entity_type: "EMBED",
        is_completed:
          typeof t.is_completed == "boolean" ? t.is_completed : null,
        progress_summary: e(t.progress_summary),
        progress_title: e(t.progress_title),
        tool_call_args: e(t.tool_call_args),
        tool_call_batch_id: e(t.tool_call_batch_id),
        tool_call_id: o,
        tool_name: e(t.tool_name),
        tool_result: e(t.tool_result),
        tool_status:
          a == null
            ? null
            : (n = r("XFBMAIBAToolCallStatus.facebook").cast(a)) != null
              ? n
              : null,
      };
    }
    l.toToolCallObject = s;
  },
  98,
);
