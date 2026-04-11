__d(
  "WASmaxOutNewslettersSearchQuestionResponseMixinMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.searchText,
        n = o("WASmaxJsx").smax(
          "question_responses",
          null,
          o("WASmaxJsx").smax("search", { text: o("WAWap").CUSTOM_STRING(t) }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSearchQuestionResponseMixinMixin = s;
  },
  98,
);
