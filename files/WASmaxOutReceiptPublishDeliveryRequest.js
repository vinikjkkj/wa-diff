__d(
  "WASmaxOutReceiptPublishDeliveryRequest",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptBizOriginalEnvelopeMixin",
    "WASmaxOutReceiptBotClientMultiThreadIDReceiptMixin",
    "WASmaxOutReceiptNeedPrivacyTokenMixin",
    "WASmaxOutReceiptRecipientMixin",
    "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
    "WASmaxOutReceiptUserOrDeviceOrInteropUserOrInteropDeviceMixinGroup",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutReceiptBizOriginalEnvelopeMixin",
      ).mergeBizOriginalEnvelopeMixin(o("WASmaxJsx").smax("biz", null), e);
      return t;
    }
    function s(t) {
      var n = t.bizArgs,
        r = t.recipientMixinArgs,
        a = t.hasNeedPrivacyToken,
        i = t.botClientMultiThreadIDReceiptMixinArgs,
        l = t.userOrDeviceOrInteropUserOrInteropDeviceMixinGroupArgs,
        s = t.senderAggregatedPublishOrSingleMixinGroupArgs,
        u = o(
          "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
        ).mergeSenderAggregatedPublishOrSingleMixinGroup(
          o(
            "WASmaxOutReceiptUserOrDeviceOrInteropUserOrInteropDeviceMixinGroup",
          ).mergeUserOrDeviceOrInteropUserOrInteropDeviceMixinGroup(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutReceiptBotClientMultiThreadIDReceiptMixin")
                .mergeBotClientMultiThreadIDReceiptMixin,
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutReceiptNeedPrivacyTokenMixin")
                  .mergeNeedPrivacyTokenMixin,
                o("WASmaxMixins").optionalMerge(
                  o("WASmaxOutReceiptRecipientMixin").mergeRecipientMixin,
                  o("WASmaxJsx").smax(
                    "receipt",
                    null,
                    o("WASmaxChildren").OPTIONAL_CHILD(e, n),
                  ),
                  r,
                ),
                a,
              ),
              i,
            ),
            l,
          ),
          s,
        );
      return u;
    }
    ((l.makePublishDeliveryRequestBiz = e), (l.makePublishDeliveryRequest = s));
  },
  98,
);
