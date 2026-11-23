__d(
  "MAIBAAdSpecHumanReadableFormatterQPLLogger",
  ["MAIBAAdSpecHumanReadableFormatter", "MAIBAObservabilityUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("MAIBAObservabilityUtils").addMAIBASendMessageAnnotation(
        e,
        t != null ? t : "",
      );
    }
    function s(t) {
      var n = o(
        "MAIBAAdSpecHumanReadableFormatter",
      ).buildMAIBAAdSpecHumanReadableFormatterQPLAnnotations(t.comparison);
      (e("agentic_r23_shared_formatter", "true"),
        e(
          "agentic_spec_diff_formatter_comparison_status",
          n.string.formatter_comparison_status,
        ),
        e(
          "agentic_current_spec_diff_formatter_id",
          n.string.current_formatter_id,
        ),
        e(
          "agentic_current_spec_diff_formatter_version",
          n.string.current_formatter_version,
        ),
        e(
          "agentic_r23_spec_diff_formatter_id",
          n.string.candidate_formatter_id,
        ),
        e(
          "agentic_r23_spec_diff_formatter_version",
          n.string.candidate_formatter_version,
        ),
        e(
          "agentic_current_spec_diff_rendered_tables",
          n.string.current_rendered_tables,
        ),
        e(
          "agentic_r23_spec_diff_rendered_tables",
          n.string.candidate_rendered_tables,
        ),
        e(
          "agentic_r23_spec_diff_unsupported_field_keys",
          n.string.candidate_unsupported_field_keys,
        ),
        e("agentic_spec_diff_field_keys", n.string.current_field_keys),
        e("agentic_spec_diff_tool_call_id", t.toolCallId));
    }
    l.logMAIBAAdSpecHumanReadableFormatterComparisonToSendMessageQPL = s;
  },
  98,
);
