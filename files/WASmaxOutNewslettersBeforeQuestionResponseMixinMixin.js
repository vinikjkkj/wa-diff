__d(
  "WASmaxOutNewslettersBeforeQuestionResponseMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.questionResponsesBefore,
        n = o("WASmaxJsx").smax("question_responses", {
          before: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBeforeQuestionResponseMixinMixin = s;
  },
  98,
);
