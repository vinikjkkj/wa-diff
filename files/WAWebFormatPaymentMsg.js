__d(
  "WAWebFormatPaymentMsg",
  ["fbt", "WAWebWidToFormattedNameOrNumber"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("WAWebWidToFormattedNameOrNumber")(e.remote);
      return e.fromMe
        ? s._(/*BTDS*/ "You invited {otherUser} to use payments", [
            s._param("otherUser", t),
          ])
        : s._(/*BTDS*/ "{otherUser} invited you to use payments", [
            s._param("otherUser", t),
          ]);
    }
    function u(e) {
      return e === "send"
        ? s._(/*BTDS*/ "Sent to you")
        : e === "request"
          ? s._(/*BTDS*/ "Requested from you")
          : null;
    }
    function c(e, t) {
      return t == null || t === ""
        ? null
        : e === "send"
          ? s._(/*BTDS*/ "Sent to {receiverName}", [
              s._param("receiverName", t),
            ])
          : e === "request"
            ? s._(/*BTDS*/ "Requested from {receiverName}", [
                s._param("receiverName", t),
              ])
            : null;
    }
    ((l.formatPaymentInviteMessageText = e),
      (l.getPaymentTypeTextForSelf = u),
      (l.getPaymentTypeText = c));
  },
  226,
);
