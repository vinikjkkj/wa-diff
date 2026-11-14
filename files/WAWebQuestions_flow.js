__d(
  "WAWebQuestions.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "like",
      l = n("$InternalEnum").Mirrored(["Question", "Reply", "Response"]),
      s = n("$InternalEnum").Mirrored([
        "ALL",
        "CONTACTS",
        "REPLIED",
        "STARRED",
      ]);
    ((i.QUESTION_RESPONSE_LIKE_REACTION_CODE = e),
      (i.QuestionType = l),
      (i.ResponsesFilterType = s));
  },
  66,
);
