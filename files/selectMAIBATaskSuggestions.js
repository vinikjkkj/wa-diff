__d(
  "selectMAIBATaskSuggestions",
  ["MAIBATaskSuggestionsData", "isMAIBATaskSuggestionsTestArm"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l = a != null ? a === "test" : r("isMAIBATaskSuggestionsTestArm")(),
        s = o(
          "MAIBATaskSuggestionsData",
        ).MAIBA_TRIGGERED_AND_SCHEDULED_TASK_SUGGESTIONS;
      l &&
        (s =
          i === "welcome"
            ? o("MAIBATaskSuggestionsData").MAIBA_TEST_WELCOME_TASK_SUGGESTIONS
            : o("MAIBATaskSuggestionsData").MAIBA_TEST_TASK_SUGGESTIONS);
      var u =
        e != null
          ? s.filter(function (t) {
              var n;
              return t.taskType === "CONDITION_BASED"
                ? !0
                : !(
                    (n = t.hideWhenExistingCadences) != null ? n : [t.cadence]
                  ).some(function (t) {
                    return e.has(t);
                  });
            })
          : s;
      if (t === !0 && u.length > 0) {
        var c = o("MAIBATaskSuggestionsData").shuffleMAIBATaskSuggestions(u);
        return n != null ? c.slice(0, n) : c;
      }
      return n != null ? u.slice(0, n) : u;
    }
    l.default = e;
  },
  98,
);
