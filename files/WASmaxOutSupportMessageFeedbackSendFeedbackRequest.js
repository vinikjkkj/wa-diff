__d(
  "WASmaxOutSupportMessageFeedbackSendFeedbackRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutSupportMessageFeedbackHackBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.feedbackKind,
        n = o("WASmaxJsx").smax("feedback", {
          kind: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t) {
      var n = t.feedbackArgs,
        r = t.messageId,
        a = o(
          "WASmaxOutSupportMessageFeedbackHackBaseIQSetRequestMixin",
        ).mergeHackBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(138) },
            o("WASmaxJsx").smax("message", { id: o("WAWap").STANZA_ID(r) }),
            o("WASmaxJsx").smax(
              "feedback_list",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 10),
            ),
          ),
          t,
        );
      return a;
    }
    ((l.makeSendFeedbackRequestFeedbackListFeedback = e),
      (l.makeSendFeedbackRequest = s));
  },
  98,
);
