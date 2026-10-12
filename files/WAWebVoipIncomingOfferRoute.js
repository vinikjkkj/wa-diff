__d(
  "WAWebVoipIncomingOfferRoute",
  ["WAWebVoipGatingUtils", "WAWebVoipSignalingEnums"],
  function (t, n, r, o, a, i, l) {
    var e = 3e4;
    function s(e, t) {
      if (!c(e)) return "init";
      var n = t();
      return n <= 0
        ? "init"
        : e.is_call_ended === !0 || e.e >= n
          ? "stale"
          : "init";
    }
    function u(t) {
      return t.is_call_ended !== !0 && t.e < e;
    }
    function c(e) {
      return (
        e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
        e.peer_jid.isLid() &&
        e.call_creator.isLid() &&
        !o("WAWebVoipGatingUtils").isGroupCallMessage(e) &&
        e.has_terminate_transaction_id !== !0 &&
        e.silence_reason == null
      );
    }
    ((l.getIncomingOfferRoute = s), (l.isFreshIncomingOffer = u));
  },
  98,
);
