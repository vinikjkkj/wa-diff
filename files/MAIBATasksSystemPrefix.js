__d(
  "MAIBATasksSystemPrefix",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "[System: MAIBA_TASKS_PAGE]",
      l = "[Task Creation Instruction: ",
      s =
        "Language Matching: MUST reply to the user, and write the task name, description and instructions, in the language of the user's message below, not in the language of these instructions; never mix languages within a sentence.";
    function u(t, n) {
      return n == null
        ? e + "\n" + t
        : e + "\n" + l + s + "\n" + n + "]\n\n" + t;
    }
    var c = "[System: MAIBA_TASK_POST_PUBLISH]",
      d = "[System: MAIBA_TASK_POST_PUBLISH_AUTO]";
    function m(e) {
      return e.startsWith(c + "\n") || e.startsWith(d + "\n");
    }
    var p =
      "[Context: The advertiser just published these changes from this chat. Decide whether they are worth a follow-up check and, if so, set up one task.]";
    function _(e, t) {
      var n = [
        e,
        p,
        "draft_id=" + t.draftID,
        "published_objects=" +
          t.publishedObjects
            .map(function (e) {
              return e.type + ":" + e.id;
            })
            .join(","),
        "published_fragment_ids=" + t.publishedFragmentIDs.join(","),
      ];
      return (
        t.failedFragmentIDs.length > 0 &&
          n.push("failed_fragment_ids=" + t.failedFragmentIDs.join(",")),
        n.join("\n")
      );
    }
    function f(e) {
      return _(d, e);
    }
    function g(e) {
      return _(c, e);
    }
    ((i.MAIBA_TASKS_PAGE_SYSTEM_PREFIX = e),
      (i.MAIBA_TASK_CREATION_INSTRUCTION_PREFIX = l),
      (i.MAIBA_TASK_SUGGESTION_LANGUAGE_INSTRUCTION = s),
      (i.buildMAIBATaskSuggestionSystemMessage = u),
      (i.MAIBA_TASK_POST_PUBLISH_SYSTEM_PREFIX = c),
      (i.MAIBA_TASK_POST_PUBLISH_AUTO_SYSTEM_PREFIX = d),
      (i.isMAIBAPostPublishMessage = m),
      (i.buildMAIBAPostPublishAutoMessage = f),
      (i.buildMAIBAPostPublishWidgetMessage = g));
  },
  66,
);
