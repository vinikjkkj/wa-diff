__d(
  "WASmaxOutMessagePublishBizEngagementDataMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.engagementConversationState,
        n = e.engagementCustomerServiceState,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o("WASmaxJsx").smax("engagement", {
              conversation_state: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                t,
              ),
              customer_service_state: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                n,
              ),
            }),
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizEngagementDataMixin = s;
  },
  98,
);
