__d(
  "WASmaxOutReceiptStatusUserMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.receiptTo,
        n = e.receiptParticipant,
        r = e.receiptPeerParticipantPn,
        a = o("WASmaxJsx").smax("receipt", {
          to: o("WAWap").JID(t),
          participant: o("WAWap").USER_JID(n),
          peer_participant_pn: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r),
        });
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusUserMixin = s;
  },
  98,
);
