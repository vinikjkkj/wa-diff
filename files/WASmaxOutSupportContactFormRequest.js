__d(
  "WASmaxOutSupportContactFormRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutSupportHackBaseIQSetRequestMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.topicElementValue,
        n = o("WASmaxJsx").smax("topic", null, t);
      return n;
    }
    function s(e) {
      var t = e.topicIdElementValue,
        n = o("WASmaxJsx").smax("topic_id", null, t);
      return n;
    }
    function u(e) {
      var t = e.debugInformationJsonElementValue,
        n = o("WASmaxJsx").smax("debug_information_json", null, t);
      return n;
    }
    function c(e) {
      var t = e.uploadedLogsIdElementValue,
        n = o("WASmaxJsx").smax("uploaded_logs_id", null, t);
      return n;
    }
    function d(e) {
      var t = e.additionalAttributesContextFlow,
        n = o("WASmaxJsx").smax("additional_attributes", {
          context_flow: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
        });
      return n;
    }
    function m(t) {
      var n,
        r = t.topicArgs,
        a = t.topicIdArgs,
        i = t.debugInformationJsonArgs,
        l = t.uploadedLogsIdArgs,
        m = t.additionalAttributesArgs,
        p = t.descriptionElementValue,
        _ = o(
          "WASmaxOutSupportHackBaseIQSetRequestMixin",
        ).mergeHackBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            { xmlns: "fb:thrift_iq", smax_id: o("WAWap").INT(3) },
            o("WASmaxJsx").smax("description", null, p),
            (n = o("WASmaxChildren")).OPTIONAL_CHILD(e, r),
            n.OPTIONAL_CHILD(s, a),
            n.OPTIONAL_CHILD(u, i),
            n.OPTIONAL_CHILD(c, l),
            n.OPTIONAL_CHILD(d, m),
          ),
          t,
        );
      return _;
    }
    ((l.makeContactFormRequestTopic = e),
      (l.makeContactFormRequestTopicId = s),
      (l.makeContactFormRequestDebugInformationJson = u),
      (l.makeContactFormRequestUploadedLogsId = c),
      (l.makeContactFormRequestAdditionalAttributes = d),
      (l.makeContactFormRequest = m));
  },
  98,
);
