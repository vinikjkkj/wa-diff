__d(
  "AdsLeadGenFormEditorConditionalLogicPreviewUpdateReducerPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      for (var r = n, o = e, a = null; o != null; ) {
        r = r.set(o.id, o.id);
        var i = t.get("conditional_logic"),
          l = i == null ? void 0 : i.get(o.id),
          s = l == null ? void 0 : l.get(0);
        if ((s == null ? void 0 : s.destinationID) != null) {
          var u = s.destinationID;
          if (s.destinationType === "QUESTION") {
            var c = t.getQuestion(u);
            if (
              (c == null ? void 0 : c.questionTypeKey) === "short-answer" ||
              (c == null ? void 0 : c.questionTypeKey) === "date-time"
            ) {
              o = c;
              continue;
            }
            c && (r = r.set(u, u));
            break;
          } else {
            s.destinationType === "THANK_YOU_PAGE"
              ? (a = { type: "THANK_YOU_PAGE", id: u })
              : s.destinationType === "DISQUALIFIED_END_COMPONENT" &&
                (a = { type: "DISQUALIFIED_END_COMPONENT", id: u });
            break;
          }
        } else break;
      }
      return { questions: r, ending: a };
    }
    var s = {
        reduce: function (n, o) {
          var t = o.form,
            a = o.selectedAnswerIndex,
            i = o.selectedQuestionID,
            l = n.currentFormID;
          if (i == null || a == null || l !== t.id) {
            var s = t.questions.keySeq().first(),
              u = t.getQuestion(s);
            if (!u) return n;
            var c = r("immutable").OrderedMap();
            return (
              (c = c.set(s, s)),
              {
                questions: c,
                selectedAnswer: r("immutable").OrderedMap(),
                ending: null,
                currentFormID: t.id,
              }
            );
          }
          var d = n.questions.keySeq().indexOf(i),
            m = n.questions,
            p = n.selectedAnswer;
          if (d !== -1) {
            var _ = n.questions.keySeq().slice(d + 1);
            _.forEach(function (e) {
              ((m = m.delete(e)), (p = p.delete(e)));
            });
          }
          p = p.set(i, a);
          var f = t.get("conditional_logic"),
            g = f == null ? void 0 : f.get(i),
            h = g == null ? void 0 : g.get(a);
          if (
            h &&
            h.destinationID != null &&
            h.destinationType === "QUESTION"
          ) {
            var y = h.destinationID,
              C = t.getQuestion(y);
            if (C)
              if (
                C.questionTypeKey === "short-answer" ||
                (C == null ? void 0 : C.questionTypeKey) === "date-time"
              ) {
                var b = e(C, t, m);
                return (
                  (m = b.questions),
                  {
                    questions: m,
                    selectedAnswer: p,
                    ending: b.ending,
                    currentFormID: t.id,
                  }
                );
              } else m = m.set(y, y);
            return {
              questions: m,
              selectedAnswer: p,
              ending: null,
              currentFormID: t.id,
            };
          } else
            return ((h && h.destinationType === "THANK_YOU_PAGE") ||
              (h == null ? void 0 : h.destinationType) ===
                "DISQUALIFIED_END_COMPONENT") &&
              h.destinationID != null
              ? {
                  questions: m,
                  selectedAnswer: p,
                  ending: { type: h.destinationType, id: h.destinationID },
                  currentFormID: t.id,
                }
              : n;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
