__d(
  "WASmaxOutNewslettersGetMyNewsletterResponsesRequest",
  ["WASmaxJsx", "WASmaxOutNewslettersNewsletterIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.myQuestionResponsesServerId,
        n = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("my_question_responses", {
              server_id: o("WAWap").INT(t),
            }),
          ),
          e,
        );
      return n;
    }
    l.makeGetMyNewsletterResponsesRequest = e;
  },
  98,
);
