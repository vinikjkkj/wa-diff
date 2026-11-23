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
      var t = _(o("WASmaxJsx").smax("biz", null), e);
      return t;
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
              D,
              t.optionalMerge(
                g,
                t.optionalMerge(
                  I,
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
      if (t.user) return $(e, t.user);
      if (t.device) return b(e, t.device);
      if (t.interopUser) return E(e, t.interopUser);
      if (t.interopDevice) return R(e, t.interopDevice);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e) {
      var t = e.originalEnvelopeElementValue,
        n = o("WASmaxJsx").smax(
          "biz",
          null,
          o("WASmaxJsx").smax("original_envelope", null, t),
        );
      return n;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e) {
      var t = e.botClientMultiThreadIDMixinArgs,
        n = e.botConversationThreadIDMixinArgs,
        r = o("WASmaxJsx").smax(
          "receipt",
          null,
          o("WASmaxMixins").optionalMerge(
            y,
            M(o("WASmaxJsx").smax("bot", null), t),
            n,
          ),
        );
      return r;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e) {
      var t = e.botConversationThreadId,
        n = o("WASmaxJsx").smax("bot", {
          conversation_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C(e) {
      var t = e.deviceMixinsArgs,
        n = v(o("WASmaxJsx").smax("receipt", null), t);
      return n;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e, t) {
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
    function S(e) {
      var t = e.receiptTo,
        n = o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) });
      return n;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = e.receiptTo,
        n = o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) });
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k() {
      var e = o("WASmaxJsx").smax("receipt", { privacy_token: "false" });
      return e;
    }
    function I(e) {
      var t = k();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function T(e) {
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
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t = e.userMixinsArgs,
        n = P(o("WASmaxJsx").smax("receipt", null), t);
      return n;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P(e, t) {
      if (t.groupStatusUser) return O(e, t.groupStatusUser);
      if (t.groupUser) return W(e, t.groupUser);
      if (t.individualUser) return U(e, t.individualUser);
      if (t.statusUser) return H(e, t.statusUser);
      if (t.broadcastUser) return A(e, t.broadcastUser);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function N(e) {
      var t = e.botClientThreadId,
        n = o("WASmaxJsx").smax("bot", {
          client_thread_id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxJsx").smax("receipt", {
          to: o("WAWap").BROADCAST_JID(t),
          participant: o("WAWap").USER_JID(n),
        });
      return r;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
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
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = o("WASmaxJsx").smax("receipt", {
          to: o("WAWap").GROUP_JID(t),
          participant: o("WAWap").JID(n),
        });
      return r;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q(e) {
      var t = e.receiptTo,
        n = o("WASmaxJsx").smax("receipt", { to: o("WAWap").JID(t) });
      return n;
    }
    function U(e, t) {
      var n = q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function V(e) {
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
    function H(e, t) {
      var n = V(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendPublishDeliveryRPC = e),
      (l.makePublishDeliveryRequestBiz = s),
      (l.makePublishDeliveryRequest = u),
      (l.mergePublishDeliveryTypeMixin = d),
      (l.mergeUserOrDeviceOrInteropUserOrInteropDeviceMixinGroup = m),
      (l.mergeBizOriginalEnvelopeMixin = _),
      (l.mergeBotClientMultiThreadIDReceiptMixin = g),
      (l.mergeBotConversationThreadIDMixin = y),
      (l.mergeDeviceMixin = b),
      (l.mergeDeviceMixins = v),
      (l.mergeInteropDeviceMixin = R),
      (l.mergeInteropUserMixin = E),
      (l.mergeNeedPrivacyTokenMixin = I),
      (l.mergePeripheralOriginMixin = D),
      (l.mergeUserMixin = $),
      (l.mergeUserMixins = P),
      (l.mergeBotClientMultiThreadIDMixin = M),
      (l.mergeBroadcastUserMixin = A),
      (l.mergeGroupStatusUserMixin = O),
      (l.mergeGroupUserMixin = W),
      (l.mergeIndividualUserMixin = U),
      (l.mergeStatusUserMixin = H));
  },
  98,
);
