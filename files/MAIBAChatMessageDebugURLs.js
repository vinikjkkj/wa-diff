__d(
  "MAIBAChatMessageDebugURLs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
      /(^|\.)(?:od\d+\.[a-z0-9]+|(?:devvm|devbig)\d+\.[a-z0-9]+|\d{4,}\.od|my-(?:od|devmate)(?:-\d+)?|[a-z0-9-]+\.sb)(?:\.|$)/;
    function l(t) {
      return e.test(t.toLowerCase());
    }
    function s(e) {
      return (
        "https://www.internalfb.com/mgp/logs?q=%7B%22key%22%3A%22AND%22%2C%22children%22%3A[%7B%22key%22%3A%22is_any%22%2C%22field%22%3A%22request_id%22%2C%22value%22%3A[%22" +
        e +
        "%22]%7D]%7D&startTime=-1%20week&endTime=now&sandbox=false"
      );
    }
    function u(e) {
      return (
        "https://www.internalfb.com/omnibot_dev_tool/dashboard?conversation_id=" +
        e +
        "&show_raw=false"
      );
    }
    function c(e) {
      return (
        "https://brand-agent-lens.internalmeta.com/conversations?c=" +
        encodeURIComponent(e)
      );
    }
    function d(e) {
      return (
        "https://axon-chat.internalmeta.com/debugger?thread_id=" +
        e +
        "&view=dialog_viz"
      );
    }
    function m(e) {
      return (
        "https://www.internalfb.com/alr-debugger/conversation?threadId=" +
        e +
        "&viewMode=dialog_viz"
      );
    }
    function p(e, t) {
      var n = "https://www.internalfb.com/maiba-hub/pre/logs?otid=" + e;
      return (t != null && (n += "&isAM=" + String(t)), n);
    }
    function _(e) {
      var t = {
          constraints: [
            [
              {
                column: "extra_annotations",
                op: "any_contains",
                value: [JSON.stringify(["bot_request_uuid:" + e])],
              },
            ],
          ],
          end: "now",
          start: "-1 week",
        },
        n = encodeURIComponent(JSON.stringify(t)),
        r =
          "https://www.internalfb.com/intern/scuba/query/?pool=uber&dataset=asa_routine_events&view=samples_client&drillstate=" +
          n;
      return r;
    }
    function f(e) {
      return (
        "https://www.internalfb.com/alr-debugger/conversation?threadId=" + e
      );
    }
    function g(e) {
      var t = {
          cols: ["burndown_adjusted_tokens"],
          constraints: [
            [
              {
                column: "app_request_uuid",
                is_included_in_query: !0,
                op: "eq",
                value: [JSON.stringify([e])],
              },
            ],
          ],
          end: "now",
          metric: "avg",
          order: "prompt_tokens",
          order_desc: !0,
          purposes: ["debugging"],
          start: "-1 week",
        },
        n = encodeURIComponent(JSON.stringify(t));
      return (
        "https://www.internalfb.com/intern/scuba/query/?pool=uber&dataset=mgp3p_llm_inference_logs&view=table_client&drillstate=" +
        n
      );
    }
    function h(e, t) {
      var n = t ? "omnibot_chat_app/sandbox" : "omnibot_chat_app",
        r = {
          constraints: [
            [
              {
                column: "conversation_fbid",
                op: "eq",
                value: [JSON.stringify([e])],
              },
            ],
          ],
          end: "now",
          purposes: ["debugging"],
          sampleCols: [
            "agent_config_overrides",
            "agent_config_version",
            "agent_request",
            "conversation_fbid",
            "error_msg",
            "error_severity",
            "error_stacktrace",
            "error_type",
            "qe_universe",
            "time",
            "user_id",
          ],
          start: "-1 day",
        },
        o = encodeURIComponent(JSON.stringify(r));
      return (
        "https://www.internalfb.com/intern/scuba/query/?pool=uber&dataset=" +
        n +
        "&view=samples_client&drillstate=" +
        o
      );
    }
    var y =
      "Debug this MAIBA (Meta AI business assistant) conversation turn. Read the conversation and its trace, find where and why the agent went wrong, and name the code, prompt, skill or config responsible, with evidence.";
    function C(e, t) {
      var n = e
          .filter(function (e) {
            var t = e[1];
            return t != null && t !== "";
          })
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return t + ": " + (n != null ? n : "");
          }),
        r = [y, ""].concat(n, [""], b(t)).join("\n");
      return (
        "https://agentcloud.internalmeta.com/new?model=claude-opus-5-5&prompt=" +
        encodeURIComponent(r)
      );
    }
    function b(e) {
      var t = e.botResponseId,
        n = e.externalConversationId,
        r = e.isSandbox,
        o = n != null ? n : "<external conversation ID>",
        a = r ? "omnibot_chat_app/sandbox" : "omnibot_chat_app";
      return [
        "Logging and telemetry for this error (Scuba):",
        "- Tool calls: maiba_mcp_www_scuba, conversation_id = " +
          o +
          ", event_type = mcp_call_tool; entity_name is the tool, with exception_type, exception_code and exception_message.",
        "- Agent spans: maiba_agent_platform_metrics, trajectory_session_id = " +
          o +
          "; tool_name, tool_error, std_error_json, gen_ai_error_type.",
        "- Chat errors: " +
          a +
          ", conversation_fbid = " +
          o +
          "; error_type, error_msg, error_stacktrace.",
        "- LLM calls: mgp3p_llm_inference_logs, app_request_uuid = " +
          (t != null ? t : "<bot response ID>") +
          ".",
        "- Reach & Frequency forecasts (Reach Planner tools): reach_frequency_prediction, by account_id and time; error_code and exception_message hold the real exception behind an ads API error.",
        "Report: the error class (tool input validation, tool or backend exception, forecast failure, auth or permission, LLM provider error, skill or routing, or agent reasoning with no error logged); how often that class occurred in the last 7 days in these datasets, excluding shadow and eval traffic (traffic_mode, run_type), and whether it is new or rising; and any telemetry gap: a failure that was not logged, or was logged without enough detail to diagnose, with the logging change that would close it.",
      ];
    }
    ((i.isMAIBASandboxHostname = l),
      (i.getOmnibotMessageLogsURL = s),
      (i.getOmnibotConversationDebuggerURL = u),
      (i.getBrandAgentLensConversationDebuggerURL = c),
      (i.getAxonConversationDebuggerURL = d),
      (i.getAxonALRLegacyDebuggerURL = m),
      (i.getMaibaPreDashboardURL = p),
      (i.getPBCMessageScubaURI = _),
      (i.getPBCConversationDebuggerURL = f),
      (i.getLLMInferenceLogsURL = g),
      (i.getOmnibotChatExceptionsByConversationURL = h),
      (i.getAgentcloudDebugURL = C));
  },
  66,
);
