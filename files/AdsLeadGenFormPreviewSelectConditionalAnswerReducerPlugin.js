__d(
  "AdsLeadGenFormPreviewSelectConditionalAnswerReducerPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.questionID,
            o = t.get(e),
            a = o ? o.answerCombination : r("immutable").List(),
            i = a.take(n.conditionalQuestionIndex).push(n.answerValue);
          return t.set(e, { answerCombination: i });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
