__d(
  "AdsLeadGenFormEditorValidateConditionalLogicPreviewEligibilityReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.form.set(
            "is_conditional_question_preview_ready",
            n.response.isValid,
          );
          return t.setSingleValueOrError(n.formID, e);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
