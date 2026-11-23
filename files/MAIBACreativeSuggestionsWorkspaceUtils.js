__d(
  "MAIBACreativeSuggestionsWorkspaceUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return (
        "creative-suggestions-" +
        e +
        "-" +
        t +
        (n != null && n !== "" ? "-" + n : "")
      );
    }
    function l(e, t) {
      return (e != null ? e : "none") + ":" + (t != null ? t : "none");
    }
    function s(e, t, n) {
      return e === "pending" || n === l(e, t);
    }
    ((i.creativeSuggestionsWorkspaceID = e),
      (i.creativeSuggestionsGenerationStateKey = l),
      (i.isCreativeSuggestionsGenerationPending = s));
  },
  66,
);
