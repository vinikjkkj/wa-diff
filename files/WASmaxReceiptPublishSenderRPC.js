__d(
  "WASmaxReceiptPublishSenderRPC",
  [
    "WAComms",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutReceiptBroadcastDeviceMixin",
    "WASmaxOutReceiptGroupDeviceMixin",
    "WASmaxOutReceiptGroupStatusDeviceMixin",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptMetaModeMixin",
    "WASmaxOutReceiptRecipientMixin",
    "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
    "WASmaxOutReceiptStatusDeviceMixin",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t =
          e.publishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroupArgs,
        n = e.senderAggregatedPublishOrSingleMixinGroupArgs,
        r = o(
          "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
        ).mergeSenderAggregatedPublishOrSingleMixinGroup(
          u(o("WASmaxJsx").smax("receipt", null), t),
          n,
        );
      return r;
    }
    function u(e, t) {
      if (t.publishSenderGroupDeviceSenderType)
        return h(e, t.publishSenderGroupDeviceSenderType);
      if (t.publishSenderIndividualDeviceSenderType)
        return d(e, t.publishSenderIndividualDeviceSenderType);
      if (t.publishSenderStatusDeviceSenderType)
        return p(e, t.publishSenderStatusDeviceSenderType);
      if (t.publishSenderBroadcastDeviceSenderType)
        return f(e, t.publishSenderBroadcastDeviceSenderType);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function c(e) {
      var t = o("WASmaxOutReceiptRecipientMixin").mergeRecipientMixin(
        C(
          o("WASmaxOutReceiptIndividualDeviceMixin").mergeIndividualDeviceMixin(
            o("WASmaxJsx").smax("receipt", null),
            e,
          ),
          e,
        ),
        e,
      );
      return t;
    }
    function d(e, t) {
      var n = c(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function m(e) {
      var t = C(
        o("WASmaxOutReceiptStatusDeviceMixin").mergeStatusDeviceMixin(
          o("WASmaxJsx").smax("receipt", null),
          e,
        ),
        e,
      );
      return t;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _(e) {
      var t = C(
        o("WASmaxOutReceiptBroadcastDeviceMixin").mergeBroadcastDeviceMixin(
          o("WASmaxJsx").smax("receipt", null),
          e,
        ),
        e,
      );
      return t;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = e.groupGroupStatusDeviceOrGroupDeviceDeviceMixinGroupArgs,
        n = S(C(o("WASmaxJsx").smax("receipt", null), e), t);
      return n;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y(e) {
      var t = e.metaModeMixinArgs,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutReceiptMetaModeMixin").mergeMetaModeMixin,
          v(o("WASmaxJsx").smax("receipt", null)),
          t,
        );
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b() {
      var e = o("WASmaxJsx").smax("receipt", { type: "sender" });
      return e;
    }
    function v(e) {
      var t = b();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function S(e, t) {
      if (t.groupStatusDevice)
        return o(
          "WASmaxOutReceiptGroupStatusDeviceMixin",
        ).mergeGroupStatusDeviceMixin(e, t.groupStatusDevice);
      if (t.groupDevice)
        return o("WASmaxOutReceiptGroupDeviceMixin").mergeGroupDeviceMixin(
          e,
          t.groupDevice,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    ((l.sendPublishSenderRPC = e),
      (l.makePublishSenderRequest = s),
      (l.mergePublishSenderGroupOrPublishSenderIndividualOrPublishSenderStatusOrPublishSenderBroadcastDeviceSenderTypeMixinGroup =
        u),
      (l.mergePublishSenderIndividualDeviceSenderTypeMixin = d),
      (l.mergePublishSenderStatusDeviceSenderTypeMixin = p),
      (l.mergePublishSenderBroadcastDeviceSenderTypeMixin = f),
      (l.mergePublishSenderGroupDeviceSenderTypeMixin = h),
      (l.mergePublishSenderTypeMixin = C),
      (l.mergeSenderTypeMixin = v),
      (l.mergeGroupGroupStatusDeviceOrGroupDeviceDeviceMixinGroup = S));
  },
  98,
);
