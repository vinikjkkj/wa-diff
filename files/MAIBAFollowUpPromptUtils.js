__d(
  "MAIBAFollowUpPromptUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "task",
      u = "quick_reply",
      c = "generic";
    function d(t, n) {
      var r = t.findIndex(function (t) {
        return t.type === e;
      });
      if (r < 0 || !n() || r === 0) return t;
      var o = t[r];
      return o == null ? t : [o].concat(t.slice(0, r), t.slice(r + 1));
    }
    function m(e, t, n) {
      return !e && !t && n();
    }
    function p() {
      return [s._(/*BTDS*/ ""), s._(/*BTDS*/ ""), s._(/*BTDS*/ "")].map(
        function (e) {
          return { text: e.toString(), type: u };
        },
      );
    }
    var _ = "[System: MAIBA_TASK_FOLLOW_UP_PROMPT]",
      f =
        "[Context: The user selected a MAIBA task offer. Task setup is handled by the main MAIBA agent. The user wants to create a task that will perform this work later, not perform the underlying analysis now.]";
    function g(t, n) {
      return n === e ? _ + "\n" + f + "\n\nUser-selected task: " + t : t;
    }
    ((l.TASK_PROMPT_TYPE = e),
      (l.QUICK_REPLY_PROMPT_TYPE = u),
      (l.UNTYPED_PROMPT_TYPE = c),
      (l.maybeOrderMAIBAFollowUpPrompts = d),
      (l.shouldShowMAIBAQuickReplies = m),
      (l.getMAIBAQuickReplyPrompts = p),
      (l.MAIBA_TASK_FOLLOW_UP_PROMPT_SYSTEM_PREFIX = _),
      (l.getMAIBAFollowUpPromptAgentMessage = g));
  },
  226,
);
