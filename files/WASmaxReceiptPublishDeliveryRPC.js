__d(
  "WASmaxReceiptPublishDeliveryRPC",
  [
    "WAComms",
    "WASmaxAttrs",
    "WASmaxChildren",
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
    "WASmaxOutReceiptStatusClassMixin",
    "WASmaxOutReceiptStatusDeviceMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = u(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t = e.bizOriginalEnvelopeOrClientReceivedTimestampMixinGroupArgs,
        n = p(o("WASmaxJsx").smax("biz", null), t);
      return n;
    }
    function u(e) {
      var t,
        n = e.bizArgs,
        r = e.publishDeliveryTypeMixinArgs,
        a = e.recipientMixinArgs,
        i = e.hasNeedPrivacyToken,
        l = e.botClientMultiThreadIDReceiptMixinArgs,
        u = e.peripheralOriginMixinArgs,
        c = e.userOrDeviceOrInteropUserOrInteropDeviceMixinGroupArgs,
        p = e.senderAggregatedPublishOrSingleMixinGroupArgs,
        _ = o(
          "WASmaxOutReceiptSenderAggregatedPublishOrSingleMixinGroup",
        ).mergeSenderAggregatedPublishOrSingleMixinGroup(
          m(
            (t = o("WASmaxMixins")).optionalMerge(
              T,
              t.optionalMerge(
                f,
                t.optionalMerge(
                  k,
                  t.optionalMerge(
                    o("WASmaxOutReceiptRecipientMixin").mergeRecipientMixin,
                    t.optionalMerge(
                      d,
                      o("WASmaxJsx").smax(
                        "receipt",
                        null,
                        o("WASmaxChildren").OPTIONAL_CHILD(s, n),
                      ),
                      r,
                    ),
                    a,
                  ),
                  i,
                ),
                l,
              ),
              u,
            ),
            c,
          ),
          p,
        );
      return _;
    }
    function c(e) {
      var t = e.metaModeMixinArgs,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutReceiptMetaModeMixin").mergeMetaModeMixin,
          o("WASmaxJsx").smax("receipt", null),
          t,
        );
      return n;
    }
    function d(e, t) {
      var n = c(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function m(e, t) {
      if (t.user) return x(e, t.user);
      if (t.device) return C(e, t.device);
      if (t.interopUser) return L(e, t.interopUser);
      if (t.interopDevice) return S(e, t.interopDevice);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e, t) {
      if (t.bizOriginalEnvelope) return w(e, t.bizOriginalEnvelope);
      if (t.bizClientReceivedTimestamp)
        return N(e, t.bizClientReceivedTimestamp);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function _(e) {
      var t = e.botClientMultiThreadIDMixinArgs,
        n = e.botConversationThreadIDMixinArgs,
        r = o("WASmaxJsx").smax(
          "receipt",
          null,
          o("WASmaxMixins").optionalMerge(
            h,
            F(o("WASmaxJsx").smax("bot", null), t),
            n,
          ),
        );
      return r;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = e.botConversationThreadId,
        n = o("WASmaxJsx").smax("bot", {
          conversation_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function y(e) {
      var t = e.deviceMixinsArgs,
        n = b(o("WASmaxJsx").smax("receipt", null), t);
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e, t) {
      if (t.groupStatusDevice)
        return o(
          "WASmaxOutReceiptGroupStatusDeviceMixin",
        ).mergeGroupStatusDeviceMixin(e, t.groupStatusDevice);
      if (t.groupDevice)
        return o("WASmaxOutReceiptGroupDeviceMixin").mergeGroupDeviceMixin(
          e,
          t.groupDevice,
        );
      if (t.individualDevice)
        return o(
          "WASmaxOutReceiptIndividualDeviceMixin",
        ).mergeIndividualDeviceMixin(e, t.individualDevice);
      if (t.statusDevice)
        return o("WASmaxOutReceiptStatusDeviceMixin").mergeStatusDeviceMixin(
          e,
          t.statusDevice,
        );
      if (t.broadcastDevice)
        return o(
          "WASmaxOutReceiptBroadcastDeviceMixin",
        ).mergeBroadcastDeviceMixin(e, t.broadcastDevice);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function v(e) {
      var t = e.receiptTo,
        n = o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) });
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e) {
      var t = e.receiptTo,
        n = o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) });
      return n;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E() {
      var e = o("WASmaxJsx").smax("receipt", { privacy_token: "false" });
      return e;
    }
    function k(e) {
      var t = E();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function I(e) {
      var t = e.metaPeripheral,
        n = o("WASmaxJsx").smax(
          "receipt",
          null,
          o("WASmaxJsx").smax("meta", {
            peripheral: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
      var t = e.userMixinsArgs,
        n = $(o("WASmaxJsx").smax("receipt", null), t);
      return n;
    }
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e, t) {
      if (t.groupStatusUser) return q(e, t.groupStatusUser);
      if (t.groupUser) return V(e, t.groupUser);
      if (t.individualUser) return G(e, t.individualUser);
      if (t.statusUser) return j(e, t.statusUser);
      if (t.broadcastUser) return B(e, t.broadcastUser);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function P(e) {
      var t = e.bizClientReceivedMs,
        n = o("WASmaxJsx").smax("biz", {
          client_received_ms: o("WAWap").INT(t),
        });
      return n;
    }
    function N(e, t) {
      var n = P(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function M(e) {
      var t = e.originalEnvelopeElementValue,
        n = o("WASmaxJsx").smax(
          "biz",
          null,
          o("WASmaxJsx").smax("original_envelope", null, t),
        );
      return n;
    }
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A(e) {
      var t = e.botClientThreadId,
        n = o("WASmaxJsx").smax("bot", {
          client_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function F(e, t) {
      var n = A(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxJsx").smax("receipt", {
          to: o("WAWap").BROADCAST_JID(t),
          participant: o("WAWap").USER_JID(n),
        });
      return r;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin(
          o("WASmaxJsx").smax("receipt", {
            to: o("WAWap").GROUP_JID(t),
            participant: o("WAWap").USER_JID(n),
          }),
        );
      return r;
    }
    function q(e, t) {
      var n = W(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function U(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxJsx").smax("receipt", {
          to: o("WAWap").GROUP_JID(t),
          participant: o("WAWap").JID(n),
        });
      return r;
    }
    function V(e, t) {
      var n = U(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function H(e) {
      var t = e.receiptTo,
        n = o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) });
      return n;
    }
    function G(e, t) {
      var n = H(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function z(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = e.receiptPeerParticipantPn,
        a = e.hasStatusClass,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutReceiptStatusClassMixin").mergeStatusClassMixin,
          o("WASmaxJsx").smax("receipt", {
            to: o("WAWap").JID(t),
            participant: o("WAWap").USER_JID(n),
            peer_participant_pn: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r),
          }),
          a,
        );
      return i;
    }
    function j(e, t) {
      var n = z(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendPublishDeliveryRPC = e), (l.makePublishDeliveryRequest = u));
  },
  98,
);
