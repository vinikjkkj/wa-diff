__d(
  "WASmaxReceiptPublishAppDataPeerDeliveryRPC",
  [
    "WAComms",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutReceiptIndividualDeviceMixin",
    "WASmaxOutReceiptSingleMixin",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = s(e);
      await o("WAComms").castSmaxStanza(t);
    }
    function s(e) {
      var t = c(
        o("WASmaxOutReceiptSingleMixin").mergeSingleMixin(
          o("WASmaxOutReceiptIndividualDeviceMixin").mergeIndividualDeviceMixin(
            o("WASmaxJsx").smax("receipt", null),
            e,
          ),
          e,
        ),
      );
      return t;
    }
    function u() {
      var e = o("WASmaxJsx").smax("receipt", { category: "peer_appdata" });
      return e;
    }
    function c(e) {
      var t = u();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendPublishAppDataPeerDeliveryRPC = e),
      (l.makePublishAppDataPeerDeliveryRequest = s),
      (l.mergeAppDataPeerCategoryMixin = c));
  },
  98,
);
