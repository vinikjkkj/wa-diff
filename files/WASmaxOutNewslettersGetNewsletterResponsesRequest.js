__d(
  "WASmaxOutNewslettersGetNewsletterResponsesRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersBeforeQuestionResponseMixinMixin",
    "WASmaxOutNewslettersFilterQuestionResponseMixinMixin",
    "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
    "WASmaxOutNewslettersSearchQuestionResponseMixinMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.questionResponsesServerId,
        n = e.questionResponsesCount,
        r = e.beforeQuestionResponseMixinMixinArgs,
        a = e.filterQuestionResponseMixinMixinArgs,
        i = e.searchQuestionResponseMixinMixinArgs,
        l = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutNewslettersSearchQuestionResponseMixinMixin")
                .mergeSearchQuestionResponseMixinMixin,
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutNewslettersFilterQuestionResponseMixinMixin")
                  .mergeFilterQuestionResponseMixinMixin,
                o("WASmaxMixins").optionalMerge(
                  o("WASmaxOutNewslettersBeforeQuestionResponseMixinMixin")
                    .mergeBeforeQuestionResponseMixinMixin,
                  o("WASmaxJsx").smax("question_responses", {
                    server_id: o("WAWap").INT(t),
                    count: o("WAWap").INT(n),
                  }),
                  r,
                ),
                a,
              ),
              i,
            ),
          ),
          e,
        );
      return l;
    }
    l.makeGetNewsletterResponsesRequest = e;
  },
  98,
);
