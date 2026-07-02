__d(
  "WASmaxOutNewslettersFilterQuestionResponseMixinMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersContactsOrRepliedOrStarredFilterMixinMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contactsOrRepliedOrStarredFilterMixinMixinGroupArgs,
        n = o("WASmaxJsx").smax(
          "question_responses",
          null,
          o(
            "WASmaxOutNewslettersContactsOrRepliedOrStarredFilterMixinMixinGroup",
          ).mergeContactsOrRepliedOrStarredFilterMixinMixinGroup(
            o("WASmaxJsx").smax("filters", null),
            t,
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeFilterQuestionResponseMixinMixin = s;
  },
  98,
);
